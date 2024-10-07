import { Button } from "@/components/ui/button";

type Props = {
  title: string;
  description: string;
  imageUrl?: string;
  category: string;
};
export const CommunityCard = ({
  title,
  description,
  imageUrl,
  category,
}: Props) => {
  return (
    <div className="flex flex-col items-start justify-center p-4 border rounded-lg shadow-lg col-span-1 gap-3">
      <div className="flex items-center justify-start gap-4">
        <div className="rounded-full overflow-hidden h-24 w-24">
          {imageUrl ? (
            <img src={imageUrl} alt="community image" />
          ) : (
            <img src="https://via.placeholder.com/150" alt="community image" />
          )}
        </div>
        <div className="flex flex-col justify-start items-start">
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="text-lg font-medium">{description}</p>
          <p className="text-xs font-thin">{category}</p>
        </div>
      </div>
      <div className="flex items-center justify-start gap-6 w-full">
        <Button className="bg-zinc-950 dark:bg-white dark:text-black text-white">
          View Community
        </Button>
        <Button className="text-red-500 border border-red-500">
          Leave Community
        </Button>
      </div>
    </div>
  );
};
