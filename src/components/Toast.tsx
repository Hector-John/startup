"use client";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils"; // or your classnames function

interface ToastProps {
  message: string;
  type?: "success" | "error";
  duration?: number; 
}

const Toast = ({ message, type = "success", duration = 3000 }: ToastProps) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(false), duration);
    return () => clearTimeout(timeout);
  }, [duration]);

  if (!visible) return null;

  return (
    <div
      className={cn(
        "fixed top-6 right-6 z-[9999] px-5 py-3 rounded-xl text-sm font-medium shadow-lg transition-all duration-300 ease-in-out animate-toast-slide-fade",
        type === "success"
          ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white"
          : "bg-gradient-to-r from-red-500 to-red-400 text-white"
      )}
    >
      {message}
    </div>
  );
};

export default Toast;
