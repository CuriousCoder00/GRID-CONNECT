import { createCommunity, getCategories } from "@/actions/community-actions";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCurrentUser } from "@/hooks/use-current-user";
 
import { LucideCamera, LucidePlusCircle } from "lucide-react";
import { useEffect, useState } from "react";

export const CreateCommunityForm = () => {
  const user = useCurrentUser();
  const [options, setOptions] = useState([{ value: "1", label: "Category 1" }]);
  const [formData, setFormData] = useState({
    imageUrl: undefined,
    name: "",
    description: "",
    category: "",
  });
  useEffect(() => {
    const fetchCategories = async () => {
      const categories = await getCategories();
      if (categories) {
        setOptions(
          categories.map((category) => ({
            value: category.name,
            label: category.name,
          }))
        );
      }
    };
    fetchCategories();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createCommunity({
      email: user?.email,
      name: formData.name,
      description: formData.description,
      category: formData.category,
      imageUrl: undefined,
    });
  };
  return (
    <form
      className="flex flex-col mx-auto mt-4 gap-4 w-96"
      onSubmit={handleSubmit}
    >
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
        accept="image/png, image/jpeg, image/jpg, image/webp"
      />
      <input
        className="p-2 px-4 border rounded w-full h-12 bg-transparent dark:border-slate-500 focus:outline-none"
        type="text"
        required
        placeholder="Community Name"
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        className="p-2 px-4 border rounded w-full h-12 bg-transparent dark:border-slate-500 focus:outline-none"
        type="text"
        required
        placeholder="Community Description"
        onChange={(e) =>
          setFormData({ ...formData, description: e.target.value })
        }
      />
      <Select
        onValueChange={(value) => setFormData({ ...formData, category: value })}
      >
        <SelectTrigger>
          <SelectValue
            placeholder={options[0].label}
            defaultValue={options[0].value}
          />
        </SelectTrigger>
        <SelectContent className="bg-white dark:bg-zinc-950 z-[290]">
          <SelectGroup>
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <div className="flex justify-end">
        <Button type="submit">Create</Button>
      </div>
    </form>
  );
};
