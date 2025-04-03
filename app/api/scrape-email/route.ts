// app/api/scrape-email/route.ts
import { NextRequest, NextResponse } from "next/server";
import puppeteer from "puppeteer";

export async function POST(req: NextRequest) {
  try {
    const { url } = await req.json();
    if (!url) {
      return NextResponse.json({ email: null, error: "URL is required" }, { status: 400 });
    }

    // Launch a headless browser
    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    const page = await browser.newPage();

    // Set a user agent to avoid being blocked
    await page.setUserAgent("Mozilla/5.0 (compatible; EmailScraper/1.0)");

    // Navigate to the URL with a timeout
    await page.goto(url, { waitUntil: "networkidle2", timeout: 15000 });

    // Wait for potential dynamic content to load
    await page.waitForTimeout(2000);

    // Get the page content
    const content = await page.content();

    // Extract emails from the page content
    let email: string | null = null;

    // 1. Look for mailto links
    const mailtoLinks = await page.$$eval("a[href^='mailto:']", (links) =>
      links.map((link) => link.getAttribute("href")?.replace("mailto:", ""))
    );
    if (mailtoLinks.length > 0) {
      email = mailtoLinks[0];
    }

    // 2. Look for email patterns in text (including obfuscated ones)
    if (!email) {
      const text = await page.evaluate(() => document.body.innerText);

      // Enhanced email regex
      const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
      const matches = text.match(emailRegex);
      if (matches) {
        email = matches[0];
      }

      // 3. Look for obfuscated emails (e.g., "info [at] domain [dot] com")
      if (!email) {
        const obfuscatedRegex = /([a-zA-Z0-9._%+-]+)\s*\[at\]\s*([a-zA-Z0-9.-]+)\s*\[dot\]\s*([a-zA-Z]{2,})/gi;
        const obfuscatedMatch = text.match(obfuscatedRegex);
        if (obfuscatedMatch) {
          const parts = obfuscatedMatch[0]
            .replace(/\[at\]/gi, "@")
            .replace(/\[dot\]/gi, ".")
            .replace(/\s+/g, "");
          email = parts;
        }
      }

      // 4. Look for emails in common elements (e.g., contact sections)
      if (!email) {
        const contactElements = await page.$$eval(
          "p, div, span, a",
          (elements) =>
            elements
              .map((el) => el.textContent?.toLowerCase())
              .filter((text) => text?.includes("contact") || text?.includes("email"))
        );
        for (const text of contactElements) {
          const emailMatch = text?.match(emailRegex);
          if (emailMatch) {
            email = emailMatch[0];
            break;
          }
        }
      }
    }

    await browser.close();

    return NextResponse.json({ email: email || null });
  } catch (error) {
    console.error("Error scraping email:", error);
    return NextResponse.json({ email: null, error: "Failed to scrape email" }, { status: 500 });
  }
}