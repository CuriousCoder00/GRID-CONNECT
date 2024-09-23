import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type Props = {
  content: string;
  children: React.ReactNode;
  pos?: "top" | "right" | "bottom" | "left" | undefined;
  sideOffset?: number;
};
export const TooltipContainer = ({ content, children, pos, sideOffset }: Props) => {
  return (
    <TooltipProvider delayDuration={50}>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent sideOffset={sideOffset} side={pos}>
          <p className="text-black dark:text-white">{content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
