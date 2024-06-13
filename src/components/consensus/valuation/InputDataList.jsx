import React from "react";

export default function InputDataList({
  label,
  value,
  placeholder,
  setInput,
  children,
}) {
  return (
    <div className="w-full flex flex-col items-start gap-1">
      <input
        list="input-list"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setInput(e.target.value)}
        className="w-72 p-2 px-3 text-tuatara-100 bg-tuatara-900 focus:border-none"
      />

      <datalist id="input-list" className="bg-tuatara-900">
        {children}
      </datalist>
    </div>
  );
}
