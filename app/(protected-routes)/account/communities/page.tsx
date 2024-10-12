"use client";
import React, { useState, useEffect } from "react";

import { getCommunitiesByUserId } from "@/actions/community-actions";

import Link from "next/link";
import { useCurrentUser } from "@/hooks/use-current-user";

interface Community {
  id: string;
  name: string;
  description: string;
  imageUrl: string | null;
  inviteCode: string;
  category: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

const Communities = () => {
  const [communities, setCommunities] = useState<Community[]>([]);
  const user = useCurrentUser();
  // const fetchCommunities = async () => {
  //   // fetch user communities
  //   const res = await getCommunitiesByUserId(user?.id);
  //   setCommunities(res);
  // };
  // useEffect(() => {
  //   fetchCommunities();
  // });

  return (
    <div className="flex flex-col w-full h-full max-h-[90vh]">
      <div className="text-xs mb-5">
        <Link className="mr-1" href="/account">
          Account
        </Link>
        &gt; Communities
      </div>
      Manage Your subscribed communities
      <div className="grid grid-cols-3 gap-3 mt-5">
        <p>There&apos;s nothing to show at the moment</p>
      </div>
    </div>
  );
};

export default Communities;
