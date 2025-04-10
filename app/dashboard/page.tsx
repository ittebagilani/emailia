import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Users, Mail, Send, ChevronRight, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-40">
      {/* Dashboard Header */}
      <div className="bg-none border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-5xl font-bold gradient-text">Dashboard</h1>
            <Link href={'/new-campaign'}>
            <Button className="gradient-button">New Campaign</Button>
            </Link>
            <Link href={'/manage-emails'}>
            <Button className="gradient-button">Manage Emails</Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="hover-scale card-hover">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">Total Businesses</p>
                  <h3 className="text-2xl font-bold">328</h3>
                </div>
                <div className="h-12 w-12 bg-emaila-100 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-emaila-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-scale card-hover">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">Emails Generated</p>
                  <h3 className="text-2xl font-bold">156</h3>
                </div>
                <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Mail className="h-6 w-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-scale card-hover">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">Emails Sent</p>
                  <h3 className="text-2xl font-bold">92</h3>
                </div>
                <div className="h-12 w-12 bg-teal-100 rounded-full flex items-center justify-center">
                  <Send className="h-6 w-6 text-teal-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-scale card-hover">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">Response Rate</p>
                  <h3 className="text-2xl font-bold">24.3%</h3>
                </div>
                <div className="h-12 w-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <BarChart3 className="h-6 w-6 text-orange-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Sections Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Saved Businesses Section */}
          <Card className="animate-fade-in card-hover">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xl font-semibold">
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-emaila-600" />
                  Saved Businesses
                </div>
              </CardTitle>
              <Button variant="ghost" size="sm" className="gap-1 text-xs">
                View All <ChevronRight className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {['TechNova Solutions', 'Green Earth Consulting', 'BlueWave Marketing', 'Stellar Systems Inc.', 'Apex Financial Services'].map((business, index) => (
                  <div 
                    key={index} 
                    className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="h-10 w-10 rounded-full bg-gradient-to-r from-emaila-400 to-purple-400 flex items-center justify-center text-white font-semibold">
                      {business.charAt(0)}
                    </div>
                    <div className="ml-3 flex-1">
                      <p className="text-sm font-medium">{business}</p>
                      <p className="text-xs text-gray-500">Added {index + 1} day{index !== 0 ? 's' : ''} ago</p>
                    </div>
                    <Mail className="h-4 w-4 text-gray-400 hover:text-emaila-600 cursor-pointer" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Generated Emails Section */}
          <Card className="animate-fade-in card-hover" style={{ animationDelay: '0.2s' }}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xl font-semibold">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-purple-600" />
                  Generated Emails
                </div>
              </CardTitle>
              <Button variant="ghost" size="sm" className="gap-1 text-xs">
                Generate New <ChevronRight className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {['Product Introduction - TechNova', 'Partnership Proposal - Green Earth', 'Service Overview - BlueWave', 'Development Pitch - Stellar', 'Investment Opportunity - Apex'].map((email, index) => (
                  <div 
                    key={index} 
                    className="p-1 rounded-lg border border-gray-100 hover:border-purple-200 hover:bg-purple-50/30 transition-all animate-fade-in"
                    style={{ animationDelay: `${(index * 0.1) + 0.2}s` }}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-sm">{email}</h4>
                      <span className="text-xs px-2 py-1 bg-red-100 text-red-800 rounded-full">AI Gen</span>
                    </div>
                    <p className="text-xs text-gray-500 line-clamp-2">
                      Hello, I noticed your company is leading in {index % 2 === 0 ? 'technology innovation' : 'sustainable practices'}. I&apos;d like to discuss how our solutions can help with your {index % 2 === 0 ? 'growth objectives' : 'efficiency goals'}...
                    </p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-xs text-gray-400">Created {index + 2} days ago</span>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <Mail className="h-4 w-4 text-gray-400 hover:text-purple-600" />
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <Send className="h-4 w-4 text-gray-400 hover:text-teal-600" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Sent Campaigns Section */}
          <Card className="animate-fade-in card-hover" style={{ animationDelay: '0.4s' }}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xl font-semibold">
                <div className="flex items-center">
                  <Send className="h-5 w-5 mr-2 text-teal-600" />
                  Sent Campaigns
                </div>
              </CardTitle>
              <Button variant="ghost" size="sm" className="gap-1 text-xs">
                History <ChevronRight className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {['Tech Startups Outreach', 'Eco-Friendly Business Campaign', 'Marketing Agencies Pitch', 'SaaS Companies Introduction', 'Financial Services Network'].map((campaign, index) => (
                  <div 
                    key={index} 
                    className="p-3 rounded-lg bg-gradient-to-r from-white to-teal-50/30 border border-gray-100 hover:border-teal-200 transition-all animate-fade-in"
                    style={{ animationDelay: `${(index * 0.1) + 0.4}s` }}
                  >
                    <h4 className="font-medium text-sm">{campaign}</h4>
                    <div className="flex justify-between items-center mt-2">
                      <div className="flex items-center space-x-2">
                        <div className="h-2 w-2 rounded-full bg-teal-500"></div>
                        <span className="text-xs text-gray-500">
                          {25 - index * 3} sent • {8 - index} opened • {3 - (index > 2 ? 2 : index)} replied
                        </span>
                      </div>
                      <span className="text-xs text-gray-400">{index + 1} week{index !== 0 ? 's' : ''} ago</span>
                    </div>
                    <div className="mt-2 h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-teal-400 to-teal-600 rounded-full"
                        style={{ width: `${32 - index * 5}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
