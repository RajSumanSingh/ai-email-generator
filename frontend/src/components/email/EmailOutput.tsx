import { Check, Copy, Download, Sparkles } from "lucide-react";
import Button from "../ui/Button";
import { useState } from "react";
import jsPDF from "jspdf";

interface EmailOutputProps {
  generatedEmail: {
    subject: string;
    email: string;
  };
  loading: boolean;
  error: string;
}

export default function EmailOutput({
  generatedEmail,
  loading,
  error,

}: EmailOutputProps) {
  const hasEmail =
    generatedEmail.subject || generatedEmail.email;

  const [copied, setCopied] = useState(false);

 async function handleCopy() {
  const text = `Subject: ${generatedEmail.subject}


${generatedEmail.email}`;



  try {
    await navigator.clipboard.writeText(text);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  } catch (error) {
    console.error("Failed to copy:", error);
  }
}

function handleDownloadPDF() {
  const doc = new jsPDF();

  const subject = String(generatedEmail.subject ?? "");
  const email = String(generatedEmail.email ?? "");

  

  doc.setFontSize(20);
  doc.text("MailCraft AI", 20, 20);

  doc.setFontSize(14);
  doc.text("Subject:", 20, 40);
  doc.text(subject, 20, 50);

  doc.text("Email:", 20, 70);

  const emailLines = doc.splitTextToSize(email, 170
  );

  doc.text(emailLines, 20, 80);

  doc.save("MailCraft_Email.pdf");
}

  return (
    <div className="h-full rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl backdrop-blur-xl">

      {/* Heading */}
      <h2 className="mb-2 text-3xl font-bold text-white">
        Generated Email
      </h2>

      <p className="mb-8 text-slate-400">
        Your AI-crafted email will appear below.
      </p>

      {/* Email Container */}
      <div className="min-h-[500px] rounded-2xl border border-slate-700 bg-slate-800/60 p-6">
      {error && (
  <div className="mb-6 rounded-xl border border-red-500/30 bg-red-500/10 p-4">
    <h3 className="font-semibold text-red-400">
      Unable to generate email
    </h3>

    <p className="mt-2 text-sm text-red-300">
      {error}
    </p>
  </div>
)}

        {loading ? (
          /* Loading Skeleton */
          <div className="animate-pulse space-y-6">
            <div className="h-6 w-40 rounded bg-slate-700"></div>

            <div className="space-y-3">
              <div className="h-4 rounded bg-slate-700"></div>
              <div className="h-4 w-11/12 rounded bg-slate-700"></div>
              <div className="h-4 w-4/5 rounded bg-slate-700"></div>
              <div className="h-4 w-10/12 rounded bg-slate-700"></div>
              <div className="h-4 w-2/3 rounded bg-slate-700"></div>
            </div>
          </div>
        ) : hasEmail ? (
          <>
            {/* Subject */}
            <div>
              <h3 className="mb-3 text-lg font-semibold text-white">
                Subject
              </h3>

              <p className="whitespace-pre-line text-slate-300">
                {generatedEmail.subject}
              </p>
            </div>

            <hr className="my-6 border-slate-700" />

            {/* Email */}
            <div>
              <h3 className="mb-3 text-lg font-semibold text-white">
                Email
              </h3>

              <p className="whitespace-pre-line leading-8 text-slate-300">
                {generatedEmail.email}
              </p>
            </div>
          </>
        ) : (
          /* Empty State */
          <div className="flex h-full min-h-[450px] flex-col items-center justify-center text-center">

            <div className="mb-6 rounded-full bg-indigo-500/20 p-5">
              <Sparkles
                size={40}
                className="text-indigo-400"
              />
            </div>

            <h3 className="mb-3 text-2xl font-semibold text-white">
              Ready to Generate
            </h3>

            <p className="max-w-sm leading-7 text-slate-400">
              Fill out the form on the left and click
              <span className="font-medium text-slate-300">
                {" "}
                Generate Email
              </span>{" "}
              to let MailCraft AI create a professional email
              for you.
            </p>
          </div>
        )}

      </div>

      {/* Buttons */}
      <div className="mt-6 flex gap-4">

        <Button type="button" className="flex items-center gap-2"
            onClick={handleCopy}
            
        >
          {copied ? (
            <>
              <Check size={18} />
              Copied!
            </>
          ) : (
            <>
              <Copy size={18} />
              Copy
            </>
          )}
        </Button>

        <Button
          type="button"
          variant="secondary"
          className="flex items-center gap-2"
          onClick={handleDownloadPDF}
        >
          <Download size={18} />
          Download PDF
        </Button>

      </div>
    </div>
  );
}