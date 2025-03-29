"use client";

import type React from "react";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const Navbar: React.FC = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); //Fixed: Removed lastScrollY dependency

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  return (
    <nav
      className={`fixed bg-white/75 dark:bg-black/75 backdrop-blur-lg top-0 left-0 w-full shadow-md dark:shadow-sm shadow-black/10 dark:shadow-white/10 transition-transform duration-300 z-[2000] ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Logged-Out Navbar */}
      <SignedOut>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <h1 className="text-xl font-medium text-black dark:text-white">
                  emaila
                </h1>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <SignInButton>
                <Button className="bg-[#E3B5A4] hover:bg-[#d39e8a] text-black font-medium transition-colors">
                  GET STARTED
                </Button>
              </SignInButton>
            </div>

            {/* Mobile Navigation */}
            <div className="mt-auto pb-8 md:hidden">
              <SignInButton>
                <Button className="w-full bg-[#E3B5A4] hover:bg-[#d39e8a] text-black font-medium align-middle justify-center items-center flex mt-2.5">
                  GET STARTED
                </Button>
              </SignInButton>
            </div>
          </div>
        </div>
      </SignedOut>

      {/* Logged-In Navbar */}
      <SignedIn>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex-shrink-0">
              <h1 className="text-xl font-medium text-black dark:text-white">
                emaila
              </h1>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <Link href={"/dashboard"}>
                <Button variant="default">Dashboard</Button>
              </Link>
              <UserButton afterSignOutUrl="/" />
            </div>

            {/* Mobile Navigation */}
            <div className="flex flex-row h-full md:hidden">
              <div className="flex flex-row space-y-6 mt-2.5">
                <Link
                  href={"/dashboard"}
                  className="mobile-nav-link"
                  onClick={() => setIsOpen(false)}
                >
                  <Button>Dashboard</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SignedIn>
    </nav>
  );
};

export default Navbar;
