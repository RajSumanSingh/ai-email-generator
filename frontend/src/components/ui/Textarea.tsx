import type { TextareaHTMLAttributes } from "react";

interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export default function Textarea({
  label,
  className = "",
  ...props
}: TextareaProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-medium text-gray-700">
        {label}
      </label>

      <textarea
        className={`
          min-h-36
          rounded-xl
          border
          border-gray-300
          px-4
          py-3
          outline-none
          transition
          resize-none
          focus:border-blue-600
          ${className}
        `}
        {...props}
      />
    </div>
  );
}