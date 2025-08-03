"use client"; // if you are in Next.js app directory, you need this for client components
import { useState } from "react";

export default function ConnectEmail() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("bkrishal22@tbc.edu.np").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div
      className="text-xs md:text-sm text-right cursor-pointer select-none"
      onClick={handleCopy}
    >
      [LET&apos;S CONNECT]
      {copied && (
        <span className="ml-2 text-green-600 font-semibold">Email copied!</span>
      )}
    </div>
  );
}
