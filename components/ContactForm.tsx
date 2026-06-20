"use client";
import { useState } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div className="border border-[#222] rounded-sm p-10 text-center">
        <p className="text-2xl font-['Space_Grotesk'] font-semibold mb-2">Message sent.</p>
        <p className="text-[#888] text-sm">I'll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {[
        { key: "name", label: "Name", type: "text", placeholder: "Your name" },
        { key: "email", label: "Email", type: "email", placeholder: "your@email.com" },
        { key: "subject", label: "Subject", type: "text", placeholder: "What's this about?" },
      ].map(({ key, label, type, placeholder }) => (
        <div key={key}>
          <label className="text-xs tracking-widest uppercase text-[#888] block mb-2">{label}</label>
          <input
            type={type}
            placeholder={placeholder}
            required
            value={form[key as keyof typeof form]}
            onChange={(e) => setForm((f) => ({ ...f, [key]: e.target.value }))}
            className="w-full bg-[#111] border border-[#222] text-[#f5f0e8] px-4 py-3 text-sm outline-none focus:border-[#555] transition-colors placeholder:text-[#444] rounded-sm"
          />
        </div>
      ))}
      <div>
        <label className="text-xs tracking-widest uppercase text-[#888] block mb-2">Message</label>
        <textarea
          placeholder="Tell me about your project..."
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
          className="w-full bg-[#111] border border-[#222] text-[#f5f0e8] px-4 py-3 text-sm outline-none focus:border-[#555] transition-colors placeholder:text-[#444] resize-none rounded-sm"
        />
      </div>
      <button
        type="submit"
        className="flex items-center gap-2 bg-[#f5f0e8] text-[#0a0a0a] px-6 py-3 text-sm font-semibold tracking-wider uppercase self-start hover:bg-[#f5f0e8]/90 transition-colors rounded-sm"
      >
        Send Message <Send size={14} />
      </button>
    </form>
  );
}
