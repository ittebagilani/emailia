// app/send-test-email/page.tsx
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select"; // Assuming you have a Select component

const SendTestEmail = () => {
  const [emails, setEmails] = useState([]);
  const [selectedEmail, setSelectedEmail] = useState("");
  const [testMessage, setTestMessage] = useState("");

  useEffect(() => {
    const fetchEmails = async () => {
      const response = await fetch('/api/verified-emails');
      const data = await response.json();
      setEmails(data);
    };

    fetchEmails();
  }, []);

  const handleSendTestEmail = async () => {
    const response = await fetch('/api/send-test-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: selectedEmail, message: testMessage }),
    });

    if (response.ok) {
      alert("Test email sent!");
    } else {
      alert("Error sending test email.");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold">Send Test Email</h2>
      <Select value={selectedEmail} onChange={(e) => setSelectedEmail(e.target.value)}>
        {emails.map((email) => (
          <option key={email.id} value={email.email}>{email.email}</option>
        ))}
      </Select>
      <textarea
        placeholder="Enter your test message"
        value={testMessage}
        onChange={(e) => setTestMessage(e.target.value)}
      />
      <Button onClick={handleSendTestEmail}>Send Test Email</Button>
    </div>
  );
};

export default SendTestEmail;