"use client"

import type React from "react"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Menu, X } from 'lucide-react'
import { Button } from "./ui/button"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"

const Navbar: React.FC = () => {
  const [showNavbar, setShowNavbar] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const handleScroll = () => {
    const currentScrollY = window.scrollY
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setShowNavbar(false)
    } else {
      setShowNavbar(true)
    }
    setLastScrollY(currentScrollY)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [lastScrollY]) //Corrected useEffect dependency array

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen]);

  const NavLinks = () => (
    <>
      <Link href={"/"} className="nav-link">
        HOME
      </Link>
      <Link href={"/features"} className="nav-link">
        FEATURES
      </Link>
      <Link href={"/pricing"} className="nav-link">
        PRICING
      </Link>
      <Link href={"/contact"} className="nav-link">
        CONTACT
      </Link>
    </>
  )

  return (
    <nav
      className={`fixed bg-white/75 dark:bg-black/75 backdrop-blur-lg top-0 left-0 w-full shadow-md dark:shadow-sm shadow-black/10 dark:shadow-white/10 transition-transform duration-300 z-[20] ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Logged-Out Navbar */}
      <SignedOut>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <h1 className="text-xl font-bold text-black dark:text-white">EMAILIA</h1>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <NavLinks />
              <SignInButton>
                <Button className="bg-[#E3B5A4] hover:bg-[#d39e8a] text-black font-medium transition-colors">
                  GET STARTED
                </Button>
              </SignInButton>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-black dark:text-white">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[75%] sm:w-[350px] bg-white dark:bg-gray-900">
                  <div className="flex flex-col h-full">
                    <div className="flex justify-between items-center py-4 border-b border-gray-200 dark:border-gray-700">
                      <h2 className="text-xl font-bold text-black dark:text-white">EMAILIA</h2>
                      <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                        <X className="h-6 w-6 text-black dark:text-white" />
                        <span className="sr-only">Close menu</span>
                      </Button>
                    </div>
                    <div className="flex flex-col space-y-6 py-8">
                      <Link href={"/"} className="mobile-nav-link" onClick={() => setIsOpen(false)}>
                        HOME
                      </Link>
                      <Link href={"/features"} className="mobile-nav-link" onClick={() => setIsOpen(false)}>
                        FEATURES
                      </Link>
                      <Link href={"/pricing"} className="mobile-nav-link" onClick={() => setIsOpen(false)}>
                        PRICING
                      </Link>
                      <Link href={"/contact"} className="mobile-nav-link" onClick={() => setIsOpen(false)}>
                        CONTACT
                      </Link>
                    </div>
                    <div className="mt-auto pb-8">
                      <SignInButton>
                        <Button className="w-full bg-[#E3B5A4] hover:bg-[#d39e8a] text-black font-medium">
                          GET STARTED
                        </Button>
                      </SignInButton>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </SignedOut>

      {/* Logged-In Navbar */}
      <SignedIn>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex-shrink-0">
              <h1 className="text-xl font-bold text-black dark:text-white">EMAILIA</h1>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <Link href={"/dashboard"}>
                <Button variant="default">Dashboard</Button>
              </Link>
              <UserButton afterSignOutUrl="/" />
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center space-x-4">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-black dark:text-white">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[75%] sm:w-[350px] bg-white dark:bg-gray-900 z-200">
                  <div className="flex flex-col h-full">
                    <div className="flex justify-between items-center py-4 border-b border-gray-200 dark:border-gray-700">
                      <h2 className="text-xl font-bold text-black dark:text-white">EMAILIA</h2>
                      <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                        {/* <X className="h-6 w-6 text-black dark:text-white" /> */}
                        <span className="sr-only">Close menu</span>
                      </Button>
                    </div>
                    <div className="flex flex-col space-y-6 py-8">
                      <Link href={"/dashboard"} className="mobile-nav-link" onClick={() => setIsOpen(false)}>
                        Dashboard
                      </Link>
                    </div>
                    <div className="mt-auto pb-8 flex justify-center">
                      <UserButton afterSignOutUrl="/" />
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </SignedIn>
    </nav>
  )
}

export default Navbar
