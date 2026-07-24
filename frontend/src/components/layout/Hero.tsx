import Button from "../ui/Button";

function Hero() {
  return (
    <section className="flex min-h-[80vh] items-center justify-center bg-slate-100">
      <div className="max-w-3xl text-center">
        <h1 className="text-6xl font-extrabold text-gray-900">
          Generate Professional Emails
          <span className="text-blue-600">
            {" "}
            Using AI
          </span>
        </h1>

        <p className="mt-6 text-lg text-gray-600">
          Save time by creating professional, personalized
          emails in seconds with the power of Artificial
          Intelligence.
        </p>

        <Button className="mt-10">
          Generate Email
        </Button>
      </div>
    </section>
  );
}

export default Hero;