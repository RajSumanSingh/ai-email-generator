import { Loader2 } from "lucide-react";
import { generateEmail } from "../../services/emailService";
import React, { useState } from "react";

import Button from "../ui/Button";
import Input from "../ui/Input";
import Select from "../ui/Select";
import Textarea from "../ui/Textarea";


interface EmailFormProps {
  setGeneratedEmail: React.Dispatch<
    React.SetStateAction<{
      subject: string;
      email: string;
    }>
  >;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;

  setError: React.Dispatch<React.SetStateAction<string>>;
}

export default function EmailForm({ setGeneratedEmail, loading, setLoading, setError, }: EmailFormProps) {
  const [formData, setFormData] = useState({
    purpose: "",
    recipientName: "",
    recipientEmail: "",
    tone: "Professional",
    length: "Short",
    keyPoints: "",
  });



  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(
  e: React.FormEvent
) {
  e.preventDefault();

  setLoading(true);

  try {
    setError(""); // Clear any previous error
    const response = await generateEmail(formData);

    setGeneratedEmail(response);
  } catch (error) {
    console.error(error);
    setError("Failed to generate email. Please try again.");
  } finally {
    setLoading(false);
  }
}

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl backdrop-blur-xl"
    >
      <h2 className="mb-2 text-3xl font-bold text-white">
        Generate AI Email
      </h2>
        <p className="mb-6 text-slate-400">
          Fill in the details and let MailCraft AI write the perfect email.
        </p>

      <div className="space-y-6">

        <Input
          label="Purpose"
          name="purpose"
          value={formData.purpose}
          onChange={handleChange}
          placeholder="e.g. Job Application"
        />

        <Input
          label="Recipient Name"
          name="recipientName"
          value={formData.recipientName}
          onChange={handleChange}
          placeholder="John Doe"
        />

        <Input
          label="Recipient Email"
          name="recipientEmail"
          type="email"
          value={formData.recipientEmail}
          onChange={handleChange}
          placeholder="john@example.com"
        />

        <Select
          label="Tone"
          name="tone"
          value={formData.tone}
          onChange={handleChange}
        >
          <option>Professional</option>
          <option>Friendly</option>
          <option>Formal</option>
          <option>Persuasive</option>
        </Select>

        <Select
          label="Length"
          name="length"
          value={formData.length}
          onChange={handleChange}
        >
          <option>Short</option>
          <option>Medium</option>
          <option>Long</option>
        </Select>

        <Textarea
          label="Key Points"
          name="keyPoints"
          value={formData.keyPoints}
          onChange={handleChange}
          placeholder="Explain what you want the AI to include..."
        />


        <Button
        className="flex w-full items-center justify-center gap-2"
        type="submit"
        disabled={loading}
        >
            {loading ? (
                <>
                    <Loader2 size={20} className="animate-spin" />
                    Generating...
                </>
            ) : (
                "Generate Email"
            )}
        </Button>
                    

      </div>
    </form>
  );
}