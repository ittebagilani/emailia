import React from "react";
import { 
  Users, Mail, Send, Search, Zap, Clock, PenTool, Target, LineChart
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Search className="h-6 w-6 text-red-800" />,
      title: "Smart Business Targeting",
      description: "Choose industries, locations, and company sizes to find the perfect prospects for your outreach."
    },
    {
      icon: <Mail className="h-6 w-6 text-red-800" />,
      title: "Automated Email Finding",
      description: "Our system automatically discovers and verifies business email addresses with over 95% accuracy."
    },
    {
      icon: <PenTool className="h-6 w-6 text-red-800" />,
      title: "AI Content Generation",
      description: "Generate personalized, compelling emails that convert using our advanced AI templates."
    },
    {
      icon: <Zap className="h-6 w-6 text-red-800" />,
      title: "One-Click Campaigns",
      description: "Send personalized emails to hundreds of prospects with a single click, all tracked in real-time."
    },
    {
      icon: <Clock className="h-6 w-6 text-red-800" />,
      title: "Optimal Timing",
      description: "Our system analyzes the best time to send emails for maximum open rates and responses."
    },
    {
      icon: <LineChart className="h-6 w-6 text-red-800" />,
      title: "Detailed Analytics",
      description: "Track opens, clicks, replies, and conversions to optimize your cold email performance."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Everything You Need for <span className="gradient-text">Successful Cold Outreach</span>
          </h2>
          <p className="text-lg text-gray-600">
            Emaila simplifies every step of the cold emailing process so you can focus on growing your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-red-50 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;