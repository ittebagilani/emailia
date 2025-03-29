import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Emaila has transformed our outreach process. We're getting 3x more responses with half the effort.",
      author: "Sarah Johnson",
      title: "Marketing Director",
      company: "TechGrowth Inc.",
      avatar: "SJ"
    },
    {
      quote: "The email finder and AI content generation alone are worth every penny. Our sales team is closing deals faster than ever.",
      author: "Michael Chen",
      title: "Sales Manager",
      company: "Vertex Solutions",
      avatar: "MC"
    },
    {
      quote: "As a small business owner, I was skeptical about cold email marketing. Emaila made it so simple and effective that it's now our main lead generation channel.",
      author: "Emma Rodriguez",
      title: "Founder & CEO",
      company: "Bright Consulting",
      avatar: "ER"
    }
  ];

  return (
    <section id="testimonials" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">What Our Customers Say</span>
          </h2>
          <p className="text-lg text-gray-600">
            Join thousands of businesses that are growing with Emaila
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <div className="mb-6">
                <svg className="h-8 w-8 text-emaila-300" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>
              <p className="text-gray-700 mb-6">{testimonial.quote}</p>
              <div className="flex items-center">
                <Avatar className="h-10 w-10 mr-3">
                  <AvatarFallback className="bg-emaila-100 text-emaila-700">
                    {testimonial.avatar}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sm text-gray-600">{testimonial.title}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
