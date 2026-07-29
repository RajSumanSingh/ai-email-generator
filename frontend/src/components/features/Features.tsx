import FeatureCard from "./FeatureCard";
import { Bot, FileText, Target, Zap } from "lucide-react";

function Features() {
  return (
    <section className="bg-slate-950 px-6 py-20">
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold text-white">
            Why Choose MailCraft AI?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
            Everything you need to write professional emails
            quickly, confidently, and effortlessly.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          <FeatureCard
            icon={<Zap size={36} />}
            title="Lightning Fast"
            description="Generate professional emails in seconds."
          />

          <FeatureCard
            icon={<Bot size={36} />}
            title="AI Powered"
            description="Smart AI creates polished and personalized emails."
          />

          <FeatureCard
            icon={<FileText size={36} />}
            title="Export Ready"
            description="Copy your email instantly and export features coming soon."
          />

          <FeatureCard
            icon={<Target size={36} />}
            title="Easy to Use"
            description="Just fill in the form and let AI handle the writing."
          />

        </div>
      </div>
    </section>
  );
}

export default Features;