'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const AddEmail = () => {
  const [email, setEmail] = useState("");

  const handleAddEmail = async () => {
    try {
      const response = await fetch('/api/verified-emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        alert("Verification email sent!");
      } else {
        alert("Error adding email.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold">Add Verified Email</h2>
      <Input
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button onClick={handleAddEmail}>Add Email</Button>
    </div>
  );
};

export default AddEmail;