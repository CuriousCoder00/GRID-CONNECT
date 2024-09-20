"use client";

import logout from "@/actions/logout";
import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push("/");
  };
  return (
    <div className="flex flex-1 h-full w-full">
      <div className="p-2 md:p-10 border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-black flex flex-col gap-2 flex-1 w-full h-full">
        <div className="flex gap-2">
          {[...new Array(4)].map((i) => (
            <div
              key={i}
              className="h-20 w-full rounded-lg  bg-gray-100 dark:bg-slate-950 animate-pulse"
            ></div>
          ))}
        </div>
        <div className="flex gap-2 flex-1">
          {[...new Array(2)].map((i) => (
            <div
              key={i}
              className="h-full w-full rounded-lg  bg-gray-100 dark:bg-slate-950 animate-pulse"
            ></div>
          ))}
        </div>
      </div>
    </div>
    // <button onClick={handleLogout}>Logout</button>
  );
}
