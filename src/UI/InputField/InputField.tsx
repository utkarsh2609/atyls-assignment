import type React from "react";

const InputField: React.FC<{
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({
  label,
  type = "text",
  placeholder = "",
  value,
  onChange,
}) => {
  return (
    <div className="mb-4">
      <label className="block font-semibold mb-1 text-gray-900 text-sm">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl bg-gray-100 px-4 py-3 text-base outline-none focus:ring-2 focus:ring-indigo-400"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
export default InputField;