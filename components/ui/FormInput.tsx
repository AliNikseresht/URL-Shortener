import React from "react";

interface FormInputProps {
  url: string;
  setUrl: (url: string) => void;
}

const FormInput: React.FC<FormInputProps> = ({ url, setUrl }) => (
  <input
    type="url"
    value={url}
    onChange={(e) => setUrl(e.target.value)}
    placeholder="Enter your URL"
    className="w-full p-4 outline-none"
    required
  />
);

export default FormInput;
