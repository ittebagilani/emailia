import { useState } from "react";

const EmailForm = () => {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ to, subject, message }),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      alert("Email sent successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to send email. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-lg font-bold mb-4">Compose Email</h1>
      <input
        type="email"
        placeholder="To"
        value={to}
        onChange={(e) => setTo(e.target.value)}
        className="w-full mb-3 p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        className="w-full mb-3 p-2 border rounded"
      />
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full mb-3 p-2 border rounded h-32"
      />
      <button
        onClick={sendEmail}
        className={`w-full p-2 bg-blue-500 text-white rounded ${
          loading ? "opacity-50" : ""
        }`}
        disabled={loading}
      >
        {loading ? "Sending..." : "Send Email"}
      </button>
    </div>
  );
};

export default EmailForm;
