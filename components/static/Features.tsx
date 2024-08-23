import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconFolderMinus,
  IconGlobe,
  IconHeart,
  IconTerminal2,
} from "@tabler/icons-react";

export function Features() {
  const features = [
    {
      title: "Built for developers",
      description:
        "Built for engineers, developers, dreamers, thinkers and doers.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Ease of use",
      description:
        "It's as easy as using an Apple, and as expensive as buying one.",
      icon: <IconEaseInOut />,
    },
    {
      title: "No need to waste money",
      description:
        "Our prices are best in the market. No cap, no lock, it's free.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "100% Uptime guarantee",
      description: "We just cannot be taken down by anyone.",
      icon: <IconCloud />,
    },
    {
      title: "Global Networking",
      description:
        "Connect with individuals from different countries and cultures. Expand your professional and personal network.",
      icon: <IconGlobe />,
    },
    {
      title: "Interactive Forums",
      description:
        "Engage in discussions, share ideas, and get feedback from a global audience.",
      icon: <IconFolderMinus />,
    },
    {
      title: "Collaborative Projects",
      description:
        "Find collaborators for your projects and work together to achieve your goals.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Events and Meetups",
      description:
        "Participate in virtual and in-person events to meet new people and learn from experts.",
      icon: <IconHeart />,
    },
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 z-10 py-10 max-w-7xl mx-auto place-content-center place-items-center min-h-screen">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800 bg-transparent hover:bg-bg-gradient hover:from-slate-100 transition-all duration-150 delay-100 hover:bg-opacity-10",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
