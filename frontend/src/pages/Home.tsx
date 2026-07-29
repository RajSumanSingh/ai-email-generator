import Features from "../components/features/Features";
import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/layout/Hero";
import EmailForm from "../components/email/EmailForm";
import EmailOutput from "../components/email/EmailOutput";

export default function Home() {
  const [generatedEmail, setGeneratedEmail] = useState({
  subject: "",
  email: "",
  });

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <section id="generator" className="bg-slate-950 py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 lg:grid-cols-2">

          <EmailForm setGeneratedEmail={setGeneratedEmail}
          loading={loading}
          setLoading={setLoading}
          setError={setError}
          />

          <EmailOutput generatedEmail={generatedEmail}
          loading={loading}
          error={error}
          />

        </div>
      </section>
    </>
  );
}