import { Button } from "@/components/ui/button";
import { Combobox } from "@/components/ui/combobox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";


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
    <form className="flex flex-col mt-4 gap-4 w-96" action="">
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
      <p>A community for...</p>
      <RadioGroup defaultValue="comfortable" className="w-full flex flex-col">
        <div className="flex flex-col w-full border-[1px] rounded-md p-3 dark:border-slate-500">
          <div className="flex w-full">
            <Label className="w-full" htmlFor="r1">
              Anyone
            </Label>
            <RadioGroupItem value="public" id="r1" />
          </div>
          <Label
            htmlFor="r1"
            className="text-xs text-slate-700 dark:text-slate-400"
          >
            Anyone can join with a invite link.
          </Label>
        </div>
        <div className="flex flex-col w-full border-[1px] rounded-md p-3 dark:border-slate-500">
          <div className="flex w-full">
            <Label className="w-full" htmlFor="r2">
              People you invite
            </Label>
            <RadioGroupItem value="private" id="r2" />
          </div>
          <Label
            className="text-xs text-slate-700 dark:text-slate-400"
            htmlFor="r2"
          >
            Only you can add members to the community.
          </Label>
        </div>
      </RadioGroup>
      <div className="flex justify-end">
        <Button>Create</Button>
      </div>
    </form>
  );
};
