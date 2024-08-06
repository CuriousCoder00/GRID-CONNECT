"use client";

import React from "react";
import Cards from "@/components/static/Cards";
import CommunityNavs from "@/components/static/CommunityNavs";

const page = () => {
  return (
    <div className="container w-full grid grid-cols-12 mt-12 ">
      <div className="sm:col-span-5 md:col-span-3 col-span-12">
        <CommunityNavs />
      </div>
      <div className="sm:col-span-7 md:col-span-9 flex flex-col w-full justify-center items-start gap-3 col-span-12">
        <Cards />
      </div>
    </div>
  );
};

export default page;
