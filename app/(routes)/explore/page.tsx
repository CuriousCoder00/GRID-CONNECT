"use client";

import React from "react";
import Cards from "./_components/Cards";
import { ScrollToTop } from "./_components/ScrollToTop";
import CommunityNavs from "./_components/CommunityNavs";

const page = () => {
  return (
    <div className="container w-full grid grid-cols-4 mt-12">
      <div className="col-span-1">
        <CommunityNavs />
      </div>
      <div className="col-span-3 flex flex-col w-full justify-center items-start gap-3">
        <Cards />
      </div>
    </div>
  );
};

export default page;
