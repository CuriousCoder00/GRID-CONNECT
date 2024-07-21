"use client";

// Scroll to top button in tsx
import React, { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

export const ScrollToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 3000) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 2700,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed bottom-4 right-4 z-[9999999] bg-transparent transition-all duration-200 ease-in-out ${
        show ? "opacity-100" : "hidden"
      }`}
    >
      <Button
        onClick={handleScrollToTop}
        variant="ghost"
        className="flex items-center justify-center"
      >
        <ArrowUp className="dark:text-white text-slate-700" />
      </Button>
    </div>
  );
};
