import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Combobox } from "@/components/ui/combobox";
import { Label } from "@/components/ui/label";
import { LucideCamera, LucidePlusCircle } from "lucide-react";

const options = [
  {
    value: "gaming",
    label: "Gaming",
  },
  {
    value: "esports",
    label: "Esports",
  },
  {
    value: "trading",
    label: "Trading",
  },
  {
    value: "music",
    label: "Music",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

export const CreateCommunityForm = () => {
  return (
    <form className="flex flex-col mx-auto mt-4 gap-4 w-96" action="">
      <Label
        htmlFor="communityPFP"
        className="flex items-center justify-center rounded-full border border-dashed w-28 h-28 mx-auto cursor-pointer relative"
      >
        <Avatar className="w-24 h-24">
          <AvatarImage src={""} alt="community image" />
          <AvatarFallback className="flex flex-col gap-2">
            <LucideCamera className="w-10 h-10" />
            Upload
          </AvatarFallback>
        </Avatar>
        <LucidePlusCircle className="absolute right-0 top-5 w-6 h-6 bg-blue-500 rounded-full" />
      </Label>
      <input
        type="file"
        className="hidden"
        id="communityPFP"
        accept="image/*"
      />
      <input
        className="p-2 px-4 border rounded w-full h-12 bg-transparent dark:border-slate-500 focus:outline-none"
        type="text"
        placeholder="Community Name"
      />
      <Combobox
        className="w-full h-12 dark:border-slate-500"
        options={options}
        str="Select category"
        placeholder="Search for category"
      />
      <div className="flex justify-end">
        <Button>Create</Button>
      </div>
    </form>
  );
};
