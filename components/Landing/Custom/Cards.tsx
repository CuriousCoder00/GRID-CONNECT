import Image from "next/image";
import React from "react";
import * as pic from "@/_assets_dummy/index";

const Cards = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex p-3 hover:bg-slate-200 rounded dark:hover:bg-slate-900 gap-3">
        <div className="flex items-center justify-center object-contain overflow-hidden rounded-md lg:aspect-video aspect-square">
          <Image
            className="lg:w-[35rem] lg:h-64 w-16 h-16"
            alt="gaming community"
            src={pic.WARZONE_COMMUNITY}
          />
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex flex-col justify-start">
            <span className="font-bold w-full">Warzone x Call of Duty</span>
            <span className="font-light w-full text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Veritatis in praesentium eum numquam provident nisi fuga.
              Voluptate veniam commodi nostrum!
            </span>
          </div>
          <span className="text-sm">Verified</span>
        </div>
      </div>
    </div>
  );
};

export default Cards;
