// app/api/scrape-email/route.ts
import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import cheerio from "cheerio";

export async function POST(req: NextRequest) {
  try {
    const { url } = await req.json();
    if (!url) {
      return NextResponse.json({ email: null, error: "URL is required" }, { status: 400 });
    }

    // Fetch the webpage content
    const { data } = await axios.get(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; EmailScraper/1.0)",
      },
      timeout: 10000, // 10-second timeout to avoid hanging
    });

    // Load the HTML into cheerio
    const $ = cheerio.load(data);

    // Look for email addresses in mailto links
    let email = $("a[href^='mailto:']").attr("href")?.replace("mailto:", "");

    // If no mailto link found, search for email patterns in text
    if (!email) {
      const text = $("body").text();
      const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
      const match = text.match(emailRegex);
      email = match ? match[0] : null;
    }

    return NextResponse.json({ email: email || null });
  } catch (error) {
    console.error("Error scraping email:", error);
    return NextResponse.json({ email: null, error: "Failed to scrape email" }, { status: 500 });
  }
}