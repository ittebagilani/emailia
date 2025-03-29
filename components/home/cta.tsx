import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-emaila-600 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Revolutionize Your Cold Email Outreach?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join thousands of businesses using Emaila to find leads and close more deals. 
            Start your 14-day free trial today.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button className="bg-white text-emaila-600 hover:bg-gray-100 text-lg h-12 px-8">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 h-12 px-8 text-lg">
              Schedule Demo
            </Button>
          </div>
          
          <p className="mt-6 text-sm text-white/80">
            No credit card required. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;