import { AuroraBackground } from "@/components/ui/animated/aurora-background";
import { Button } from "@/components/ui/button";
import React from "react";

const Invite = () => {
  return (
    <div className="fixed inset-0 z-[301]">
      <AuroraBackground>
        <div className="flex flex-col items-center justify-center h-1/3 lg:w-1/3 md:w-1/2 bg-slate-950 text-white rounded-lg border">
          <div className="flex flex-col items-center gap-4 z-50 p-4">
            <div className="text-xl font-bold">
              You are invited to the community
            </div>
            <div className="text-sm text-center">
              Join the community to connect with other members and participate in discussions.
            </div>
            <div className="flex">
              <Button variant={'outline'} className="btn btn-primary">Join Community</Button>
            </div>
          </div>
        </div>
      </AuroraBackground>
    </div>
  );
};

export default Invite;
