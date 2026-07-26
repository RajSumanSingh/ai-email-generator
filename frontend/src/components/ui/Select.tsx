import type { SelectHTMLAttributes } from "react";

interface SelectProps
  extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
}

export default function Select({
  label,
  children,
  className = "",
  ...props
}: SelectProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-medium text-gray-700">
        {label}
      </label>

      <select
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
      >
        {children}
      </select>
    </div>
  );
}