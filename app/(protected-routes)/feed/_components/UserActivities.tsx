import { Separator } from "@/components/ui/separator";

type Props = {};
export const UserActivities = ({}: Props) => {
  return (
    <div className="flex flex-col w-full p-2 my-5">
      <h1 className="text-xl mb-2">Your activities</h1>
      <Separator orientation="horizontal" className="bg-slate-600" />
    </div>
  );
};
