"use client";
import { CommunitSidebar } from "@/components/app-components/communities/community-sidebar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full h-full overflow-hidden">
      <div className="flex w-full h-full gap-1 overflow-hidden">
        <CommunitSidebar />
        <div className="flex flex-col h-full w-full overflow-y-auto gap-3 border-l-2 dark:border-l-slate-700">
          {children}
        </div>
      </div>
    </div>
  );
};

export default layout;
