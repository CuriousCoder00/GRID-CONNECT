"use client";
import { CommunityHeader } from "@/components/app-components/communities/community-header";
import { TopicsSidebar } from "@/components/app-components/communities/community-sidebar";
import { usePathname } from "next/navigation";
import React, { Suspense } from "react";

const CommunityLayout = ({ children }: { children: React.ReactNode }) => {
  const path = usePathname();
  const id = path.split("/")[2];
  return (
    <div className="flex flex-col items-start justify-start h-full w-full max-h-[92vh] overflow-hidden">
      <Suspense>
        <CommunityHeader id={id} />
      </Suspense>
      <div className="flex items-start justify-start w-full h-full">
        <TopicsSidebar />
        <div className="flex items-start justify-start p-2 h-full w-full border border-slate-600 overflow-hidden">{children}</div>
      </div>
    </div>
  );
};

export default CommunityLayout;
