import React from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      description: "Perfect for individuals and small businesses just getting started with cold outreach.",
      features: [
        "Find up to 500 verified emails per month",
        "Send up to 1,000 emails per month",
        "Basic AI email templates",
        "Standard analytics dashboard",
        "Email support"
      ],
      popular: false,
      buttonText: "Start Free Trial",
      buttonVariant: "outline"
    },
    {
      name: "Professional",
      price: "$79",
      description: "For growing businesses looking to scale their cold email outreach efforts.",
      features: [
        "Find up to 2,000 verified emails per month",
        "Send up to 5,000 emails per month",
        "Advanced AI email personalization",
        "A/B testing capabilities",
        "Priority email support",
        "Campaign scheduling",
        "Advanced analytics & reporting"
      ],
      popular: true,
      buttonText: "Start Free Trial",
      buttonVariant: "default"
    },
    {
      name: "Enterprise",
      price: "$199",
      description: "For large teams and agencies with high-volume outreach needs.",
      features: [
        "Find up to 10,000 verified emails per month",
        "Unlimited email sending",
        "Enterprise-grade AI personalization",
        "Advanced A/B testing & optimization",
        "Dedicated account manager",
        "API access",
        "White labeling options",
        "Custom reporting"
      ],
      popular: false,
      buttonText: "Contact Sales",
      buttonVariant: "outline"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">Simple, Transparent Pricing</span>
          </h2>
          <p className="text-lg text-gray-600">
            Choose the plan that's right for your business. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl p-8 border ${
                plan.popular 
                  ? "border-emaila-400 shadow-xl relative" 
                  : "border-gray-200 shadow-md"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-gradient-to-r from-emaila-600 to-purple-600 text-white text-xs font-semibold px-4 py-1 rounded-full shadow-md">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <div className="flex items-center justify-center mb-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-600 ml-1">/month</span>
                </div>
                <p className="text-gray-600 text-sm">{plan.description}</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="h-5 w-5 text-emaila-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={plan.buttonVariant as any} 
                className={`w-full ${plan.buttonVariant === "default" ? "gradient-button" : ""}`}
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center text-gray-600">
          <p>Need a custom plan? <a href="#" className="text-emaila-600 font-medium">Contact our sales team</a></p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;