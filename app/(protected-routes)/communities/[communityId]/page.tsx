"use client";
import { CommunityHeader } from "@/components/app-components/communities/community-header";
import { Skeleton } from "@/components/ui/skeleton";
import { usePathname } from "next/navigation";
import React, { Suspense } from "react";

const CommunityPage = () => {
  const path = usePathname();
  const id = path.split("/")[2];
  return (
    <div>
      <Suspense>
        <CommunityHeader id={id} />
      </Suspense>
    </div>
  );
};

export default CommunityPage;
