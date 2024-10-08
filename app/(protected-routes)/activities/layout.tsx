"use client";
import React from "react";

function FeedLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex max-h-[90vh] w-full h-full overflow-hidden">
      {children}
    </div>
  );
}

export default FeedLayout;
