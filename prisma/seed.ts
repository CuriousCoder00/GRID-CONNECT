import { db } from "@/lib/db";

const main = async () => {
  await db.category.createMany({
    data: [
      { name: "Technology" },
      { name: "Music" },
      { name: "Sports" },
      { name: "News" },
      { name: "Fashion" },
      { name: "Movies" },
      { name: "Gaming" },
      { name: "Sports" },
      { name: "Entertainment" },
      { name: "Education" },
    ],
    skipDuplicates: true,
  });
};

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await db.$disconnect();
  });
