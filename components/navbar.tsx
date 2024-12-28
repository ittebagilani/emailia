"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const Navbar: React.FC = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
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
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed light:bg-white/75 dark:bg-black/75 backdrop-blur-lg top-0 left-1/2 transform -translate-x-1/2 w-full shadow-md dark:shadow-sm light:shadow-black dark:shadow-white transition-transform duration-300 px-4 z-[2000] ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Logged-Out Navbar */}
      <SignedOut>
        <div className="md:m-4 my-4 text-center flex justify-center items-center space-x-8 md:space-x-12">
          <Link href={"/"}>
            <h1 className="text-medium font-normal light:text-black dark:text-white">
              HOME
            </h1>
          </Link>
          <Link href={"/features"}>
            <h1 className="text-medium font-normal light:text-black dark:text-white">
              FEATURES
            </h1>
          </Link>
          <Link href={"/pricing"}>
            <h1 className="text-medium font-normal light:text-black dark:text-white">
              PRICING
            </h1>
          </Link>
          <Link href={"/contact"}>
            <h1 className="text-medium font-normal light:text-black dark:text-white">
              CONTACT
            </h1>
          </Link>
          <SignInButton>
            <Button className="bg-[#E3B5A4] hover:bg-[#d39e8a] text-black">
              GET STARTED
            </Button>
          </SignInButton>
        </div>
      </SignedOut>

      {/* Logged-In Navbar */}
      <SignedIn>
        <div className="md:m-4 my-4 flex justify-between items-center px-20">
          <h1 className="text-medium font-medium light:text-black dark:text-white">
            EMALIA
          </h1>
          <div className="space-x-8">
            <Link href={"/dashboard"}>
              <Button className="-mt-4">Dashboard</Button>
            </Link>
            <UserButton />
          </div>
        </div>
      </SignedIn>
    </nav>
  );
};

export default Navbar;
