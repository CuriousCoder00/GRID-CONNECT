"use client";

import { CheckCircle, InfoIcon, TriangleAlert } from "lucide-react";

interface AlertProps {
  message: string;
  type: "error" | "success" | "warning";
}

const Alert = ({ message, type }: AlertProps) => {
  return (
    <div
      className={`flex gap-3 mb-2 ${
        type === "error"
          ? "bg-red-500 bg-opacity-20 border-red-400 text-red-700"
          : type === "success"
          ? "bg-green-500 bg-opacity-20 border-green-400 text-green-700"
          : "bg-yellow-500 bg-opacity-20 border-yellow-400 text-yellow-700"
      } border px-4 py-3 rounded relative`}
      role="alert"
    >
      {type === "error" ? (
        <TriangleAlert />
      ) : type === "success" ? (
        <CheckCircle />
      ) : (
        <InfoIcon />
      )}
      <span className="block sm:inline">{message}</span>
    </div>
  );
};

export default Alert;
