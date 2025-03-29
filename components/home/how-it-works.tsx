import React from "react";
import { Target, Mail, PenTool, Send, ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Target className="h-8 w-8 text-white" />,
      title: "Target Businesses",
      description: "Select your target audience by industry, location, company size, and more.",
      iconBg: "bg-emaila-600"
    },
    {
      icon: <Mail className="h-8 w-8 text-white" />,
      title: "Get Verified Emails",
      description: "Emaila automatically finds and verifies business email addresses for your prospects.",
      iconBg: "bg-purple-600"
    },
    {
      icon: <PenTool className="h-8 w-8 text-white" />,
      title: "Generate Content",
      description: "Our AI creates personalized email content based on your business and target audience.",
      iconBg: "bg-emaila-600"
    },
    {
      icon: <Send className="h-8 w-8 text-white" />,
      title: "Send & Track",
      description: "Launch your campaign with one click and track results in real-time.",
      iconBg: "bg-purple-600"
    }
  ];

  return (
    <section id="how-it-works" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">How Emaila Works</span>
          </h2>
          <p className="text-lg text-gray-600">
            Four simple steps to launch effective cold email campaigns
          </p>
        </div>

        <div className="relative">
          {/* Connect line */}
          {/* <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div> */}
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className={`${step.iconBg} h-16 w-16 rounded-full flex items-center justify-center mb-6 shadow-lg`}>
                  {step.icon}
                </div>
                
                {/* {index < steps.length - 1 && (
                // //   <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gray-200 translate-x-1/2 z-0">
                //     <ArrowRight className="absolute top-1/2 -translate-y-1/2 right-0 text-gray-400" />
                //   </div>
                )} */}
                
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
