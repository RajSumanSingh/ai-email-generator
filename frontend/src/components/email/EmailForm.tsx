import { generateEmail } from "../../services/emailService";
import { useState } from "react";

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
}

export default function EmailForm({ setGeneratedEmail }: EmailFormProps) {
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
 ){
  e.preventDefault();

  try {
    const response = await generateEmail(formData);

    setGeneratedEmail(response);

  } catch (error) {
    console.error(error);
  }
 }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl bg-white p-8 shadow-lg"
    >
      <h2 className="mb-8 text-3xl font-bold">
        Generate AI Email
      </h2>

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

        <Button className="w-full" type="submit">
          Generate Email
        </Button>

      </div>
    </form>
  );
}