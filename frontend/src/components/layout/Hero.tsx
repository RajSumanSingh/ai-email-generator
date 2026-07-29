import HeroPreview from "./HeroPreview";
import Button from "../ui/Button";

function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-slate-950">
      {/* Background Glow */}
      <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-indigo-600/20 blur-3xl"></div>

      <div className="absolute bottom-10 right-20 h-80 w-80 rounded-full bg-purple-600/20 blur-3xl"></div>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center gap-12 px-6 lg:flex-row lg:justify-between lg:gap-16">

        {/* Left Side */}
        <div className="max-w-2xl text-left">

          {/* Badge */}
          <div className="mb-6 inline-flex items-center rounded-full border border-indigo-500/30 bg-indigo-500/10 px-5 py-2 text-sm font-medium text-indigo-300">
            ✨ AI-Powered Email Assistant
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-extrabold leading-tight text-white sm:text-6xl lg:text-7xl">
            Generate Professional Emails
            <span className="text-indigo-400"> Using AI</span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg text-slate-300">
            Save time by creating professional, personalized emails in
            seconds with the power of Artificial Intelligence.
          </p>

          {/* CTA Button */}
          <Button
            className="mt-10"
            onClick={() => {
              document
                .getElementById("generator")
                ?.scrollIntoView({
                  behavior: "smooth",
                });
            }}
          >
            Generate Email
          </Button>

        </div>

        {/* Right Side */}
        <div className="hidden lg:block">
          <HeroPreview />
        </div>
      </div>
    </section>
  );
}

export default Hero;