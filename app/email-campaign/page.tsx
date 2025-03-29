"use client"

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

export default function EmailCampaign() {
  const [savedBusinesses, setSavedBusinesses] = useState<any[]>([]);
  const [subject, setSubject] = useState('');
  const [template, setTemplate] = useState('');

  useEffect(() => {
    // Load saved businesses from localStorage or your preferred storage method
    const loadSavedBusinesses = () => {
      // Implementation depends on how you're storing the saved businesses
    };
    loadSavedBusinesses();
  }, []);

  return (
    <div className="container mx-auto p-8 max-w-4xl">
      <h1 className="text-2xl font-bold mb-6">Create Email Campaign</h1>
      
      <div className="space-y-6">
        <div>
          <label className="block mb-2">Subject Line</label>
          <Input
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Enter email subject"
            className="w-full"
          />
        </div>

        <div>
          <label className="block mb-2">Email Template</label>
          <Textarea
            value={template}
            onChange={(e) => setTemplate(e.target.value)}
            placeholder="Write your email template here...
            
Available variables:
{businessName}
{businessAddress}
{businessWebsite}"
            className="w-full min-h-[200px]"
          />
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <h2 className="font-semibold mb-2">Recipients ({savedBusinesses.length})</h2>
          <div className="space-y-2">
            {savedBusinesses.map((business) => (
              <div key={business.place_id} className="flex items-center justify-between">
                <span>{business.name}</span>
                <span className="text-gray-500">{business.email || 'No email found'}</span>
              </div>
            ))}
          </div>
        </div>

        <Button 
          className="w-full"
          disabled={!subject || !template || savedBusinesses.length === 0}
        >
          Send Campaign
        </Button>
      </div>
    </div>
  );
} 