"use client";

import { useCurrentUser } from "@/hooks/use-current-user";

export default function Feed() {
  const user = useCurrentUser();
  return (
    <div className="flex flex-1 h-full w-full">
      Hey {user.name}
    </div>
  );
}
