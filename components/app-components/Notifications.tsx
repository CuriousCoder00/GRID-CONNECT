import { BellIcon } from "lucide-react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { TooltipContainer } from "@/components/TooltipContainer";

export const Notifications = () => {
  const [notifications, setNotification] = useState(null);
  return (
    <Popover>
      <TooltipContainer content="Notifications" pos="bottom" sideOffset={15}>
        <PopoverTrigger asChild>
          <BellIcon className="cursor-pointer" />
        </PopoverTrigger>
      </TooltipContainer>
      {notifications ? (
        <PopoverContent className="flex justify-center items-center z-10 mt-5 mr-3 p-2 w-96 bg-white dark:bg-slate-950">
          {notifications}
        </PopoverContent>
      ) : (
        <PopoverContent className="flex justify-center items-center z-10 mt-5 mr-3 p-2 w-96 bg-white dark:bg-slate-950">
          There are no new notifications
        </PopoverContent>
      )}
    </Popover>
  );
};
