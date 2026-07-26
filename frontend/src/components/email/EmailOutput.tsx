import Button from "../ui/Button";

interface EmailOutputProps {
  generatedEmail: {
    subject: string;
    email: string;
  };
}


export default function EmailOutput({ generatedEmail }: EmailOutputProps) {
  return (
    <div className="rounded-2xl bg-white p-8 shadow-lg h-full">
      <h2 className="mb-6 text-3xl font-bold">
        Generated Email
      </h2>

      <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 min-h-[500px]">

        <h3 className="mb-4 text-lg font-semibold">
          Subject
        </h3>

        <p className="mb-8 whitespace-pre-line text-gray-600">
           {generatedEmail.subject ||
             "Your generated email subject will appear here..."}
        </p>

        <hr className="my-6" />

        <h3 className="mb-4 text-lg font-semibold">
          Email
        </h3>

        <p className="leading-8 whitespace-pre-line text-gray-600">
          {generatedEmail.email ||
            `Your AI-generated email will appear here after you click the Generate Email button.

         This area will later display the response returned by Gemini AI.`}
        </p>

      </div>

      <div className="mt-6 flex gap-4">

        <Button>
          Copy
        </Button>

        <Button variant="secondary">
          Download
        </Button>

      </div>
    </div>
  );
}