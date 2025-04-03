import React from "react";
import { Button } from "@/components/ui/button";
import { Mail, Send, Users, ArrowRight } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-20 sm:py-32 lg:py-40">
      {/* Background gradient and animated elements */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute right-1/3 top-0 h-[300px] w-[300px] rounded-full bg-gradient-to-r from-emaila-400 via-purple-500 to-teal-400 blur-[100px] animate-pulse-slow"></div>
        <div
          className="absolute left-1/3 bottom-0 h-[250px] w-[250px] rounded-full bg-gradient-to-r from-teal-400 via-purple-500 to-emaila-400 blur-[100px] animate-pulse-slow"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute right-0 top-1/2 h-[200px] w-[200px] rounded-full bg-gradient-to-r from-purple-400 via-teal-500 to-emaila-400 blur-[100px] animate-pulse-slow"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in">
              <span className="text-[#780000]">Cold Emails</span> Made
              Effortless
            </h1>
            <p
              className="text-xl text-gray-600 mb-8 max-w-lg animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Choose your target businesses, get their emails, generate
              personalized outreach, and send to everyone with just a few
              clicks.
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                className="gradient-button text-lg h-12 px-8 shadow-lg animate-bounce-in"
                style={{ animationDelay: "0.4s" }}
              >
                <Link href="/dashboard">Start for Free</Link>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="h-12 px-8 text-lg border-2 border-gray-200 hover:border-emaila-400 animate-bounce-in"
                style={{ animationDelay: "0.6s" }}
              >
                See Demo
              </Button>
            </div>

            <div
              className="mt-8 flex items-center space-x-2 text-sm text-gray-500 animate-fade-in"
              style={{ animationDelay: "0.8s" }}
            >
              <span className="flex items-center">
                <Users className="h-4 w-4 mr-1 text-emaila-500" />
                2,500+ users
              </span>
              <span className="w-1 h-1 rounded-full bg-gray-400"></span>
              <span className="flex items-center">
                <Send className="h-4 w-4 mr-1 text-purple-500" />
                1M+ emails sent
              </span>
              <span className="w-1 h-1 rounded-full bg-gray-400"></span>
              <span className="flex items-center">
                <Mail className="h-4 w-4 mr-1 text-teal-500" />
                No credit card required
              </span>
            </div>
          </div>

          <div className="relative hidden sm:block">
            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-emaila-400 via-purple-500 to-teal-400 opacity-30 blur-lg animate-pulse-slow"></div>
            <div className="relative bg-white/90 rounded-2xl shadow-xl overflow-hidden border border-gray-200 backdrop-blur-sm animate-scale-in">
              <div className="p-6 border-b border-gray-200 bg-gray-50/80">
                <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  <div className="ml-4 text-sm text-gray-500">
                    Emaila Campaign Dashboard
                  </div>
                </div>
              </div>
              <div className="p-8 animate-float">
                <div className="h-12 w-3/4 bg-gray-100 rounded-lg mb-6"></div>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-emaila-50 h-24 rounded-lg p-4 flex flex-col items-center justify-center hover-scale">
                    <div className="h-8 w-8 bg-emaila-100 rounded-full flex items-center justify-center mb-2">
                      <Users className="h-4 w-4 text-emaila-600" />
                    </div>
                    <div className="h-3 w-16 bg-gray-200 rounded"></div>
                  </div>
                  <div className="bg-purple-50 h-24 rounded-lg p-4 flex flex-col items-center justify-center hover-scale">
                    <div className="h-8 w-8 bg-purple-100 rounded-full flex items-center justify-center mb-2">
                      <Mail className="h-4 w-4 text-purple-600" />
                    </div>
                    <div className="h-3 w-16 bg-gray-200 rounded"></div>
                  </div>
                  <div className="bg-teal-50 h-24 rounded-lg p-4 flex flex-col items-center justify-center hover-scale">
                    <div className="h-8 w-8 bg-teal-100 rounded-full flex items-center justify-center mb-2">
                      <Send className="h-4 w-4 text-teal-600" />
                    </div>
                    <div className="h-3 w-16 bg-gray-200 rounded"></div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="h-6 bg-gray-100 rounded w-full animate-pulse-slow"></div>
                  <div
                    className="h-6 bg-gray-100 rounded w-5/6 animate-pulse-slow"
                    style={{ animationDelay: "0.5s" }}
                  ></div>
                  <div
                    className="h-6 bg-gray-100 rounded w-4/6 animate-pulse-slow"
                    style={{ animationDelay: "1s" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
