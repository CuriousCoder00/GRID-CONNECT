"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function SelectTheme({ text }: { text?: boolean }) {
  const { setTheme, theme } = useTheme();
  return (
    <>
      {text === false ? (
        <div
          className={`flex items-center gap-3 rounded-lg text-center cursor-pointer`}
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          <Sun className="size-5 rotate-0 scale-100 dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute size-6 rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
        </div>
      ) : (
        <div
          className={`flex items-center gap-3 rounded-lg text-center cursor-pointer`}
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          <Sun className="size-5 rotate-0 scale-100 dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute size-4 rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
          <span>
            {theme === "light" ? "Dark" : "Light"} Mode
          </span>
        </div>
      )}
    </>
  );
}
