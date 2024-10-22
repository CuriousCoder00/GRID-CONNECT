"use client";
import { CommunityHeader } from "@/components/app-components/communities/community-header";
import { ThreadsSidebar } from "@/components/app-components/communities/community-sidebar";
import { Skeleton } from "@/components/ui/skeleton";
import { usePathname } from "next/navigation";
import React, { Suspense } from "react";

const CommunityPage = () => {
  const path = usePathname();
  const id = path.split("/")[2];
  return (
    <div className="flex flex-col items-start justify-start h-full max-h-[92vh]">
      <Suspense>
        <CommunityHeader id={id} />
      </Suspense>
      <div className="flex items-start justify-start h-full">
        <ThreadsSidebar />
      </div>
    </div>
  );
};

export default CommunityPage;
