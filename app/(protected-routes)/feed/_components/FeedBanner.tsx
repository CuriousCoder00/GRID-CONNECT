import { useCurrentUser } from "@/hooks/use-current-user";

type Props = {};
export const FeedBanner = ({}: Props) => {
  const user = useCurrentUser();
  return (
    <div className="flex flex-col rounded-lg p-4 shadow-md dark:shadow-slate-700">
      <h1 className="text-2xl">
        Hey, <span className="font-bold">{user.name}</span>
      </h1>
      <p className="text-slate-400">
        Welcome to GridConnects
      </p>
    </div>
  );
};
