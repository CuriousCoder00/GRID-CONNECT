type Props = {
  title: string;
  description: string;
  date: string;
  id: number;
};
export const ActivityCard = ({ title, description, date, id }: Props) => {
  return (
    <div
      className="w-full border rounded-lg border-slate-700 dark:border-slate-400 p-4"
      key={id}
    >
      <h3>{title}</h3>
      <p>{description}</p>
      <small>{new Date(date).toLocaleString()}</small>
    </div>
  );
};
