import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function Input({
  label,
  className = "",
  ...props
}: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-medium text-gray-700">
        {label}
      </label>

      <input
        className={`
          rounded-xl
          border
          border-gray-300
          px-4
          py-3
          outline-none
          transition
          focus:border-blue-600
          ${className}
        `}
        {...props}
      />
    </div>
  );
}