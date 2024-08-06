import Image from "next/image";
import React from "react";
import * as pic from "@/_assets_dummy/index";
import { Gradient } from "@/components/static/Gradient";

const Cards = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="flex p-3 min-w-full hover:bg-slate-300 rounded dark:hover:bg-slate-900 gap-3">
        <div className="flex object-cover overflow-hidden rounded-md aspect-video md:w-72 md:h-52 sm:w-48 sm:h-42">
          <Image
            className="md:w-72 md:h-52 sm:w-48 sm:h-42 w-24 h-20"
            alt="gaming community"
            src={pic.WARZONE_COMMUNITY}
          />
        </div>
        <div className="flex w-full flex-col justify-between py-5">
          <div className="flex w-full flex-col">
            <span className="font-bold w-full">Warzone x Call of Duty</span>
            <span className="max-sm:hidden font-light w-full text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Veritatis in praesentium eum numquam provident nisi fuga.
              Voluptate veniam commodi nostrum!
            </span>
          </div>
          <Gradient />
          <span className="text-sm">Verified</span>
        </div>
      </div>
      <div className="flex p-3 min-w-full hover:bg-slate-300 rounded dark:hover:bg-slate-900 gap-3">
        <div className="flex overflow-hidden rounded-md aspect-video md:w-72 md:h-52 sm:w-48 sm:h-42 w-24 h-20">
          <Image
            alt="gaming community"
            className="md:w-72 md:h-52 sm:w-48 sm:h-42 w-24 h-20"
            src={pic.GAMING_COMMUNITY}
          />
        </div>
        <div className="flex w-full flex-col justify-between py-5">
          <div className="flex w-full flex-col">
            <span className="font-bold w-full">Gaming Community</span>
            <span className="max-sm:hidden font-light w-full text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Veritatis in praesentium eum numquam provident nisi fuga.
              Voluptate veniam commodi nostrum!
            </span>
          </div>
          <span className="text-sm">Verified</span>
        </div>
      </div>
      <div className="flex p-3 min-w-full hover:bg-slate-300 rounded dark:hover:bg-slate-900 gap-2">
        <div className="flex overflow-hidden rounded-md aspect-video md:w-72 md:h-52 sm:w-48 sm:h-42 w-24 h-20">
          <Image
            alt="gaming community"
            className="md:w-72 md:h-52 sm:w-48 sm:h-42 w-24 h-20"
            src={pic.ESPORTS_COMMUNITY}
          />
        </div>
        <Gradient />
        <div className="flex w-full flex-col justify-between py-5">
          <div className="flex w-full flex-col">
            <span className="font-bold w-full">Esports Community</span>
            <span className="max-sm:hidden font-light w-full text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Veritatis in praesentium eum numquam provident nisi fuga.
              Voluptate veniam commodi nostrum!
            </span>
          </div>
          <span className="text-sm">Verified</span>
        </div>
      </div>
      <div className="flex p-3 min-w-full hover:bg-slate-300 rounded dark:hover:bg-slate-900 gap-3">
        <div className="flex overflow-hidden rounded-md aspect-video md:w-72 md:h-52 sm:w-48 sm:h-42 w-24 h-20">
          <Image
            alt="gaming community"
            className="md:w-72 md:h-52 sm:w-48 sm:h-42 w-24 h-20"
            src={pic.TRADING_COMMUNITY}
          />
        </div>
        <div className="flex w-full flex-col justify-between py-5">
          <div className="flex w-full flex-col">
            <span className="font-bold w-full">Trading Community</span>
            <span className="max-sm:hidden font-light w-full text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Veritatis in praesentium eum numquam provident nisi fuga.
              Voluptate veniam commodi nostrum!
            </span>
          </div>
          <span className="text-sm">Verified</span>
        </div>
      </div>
      <div className="flex p-3 min-w-full hover:bg-slate-300 rounded dark:hover:bg-slate-900 gap-3">
        <div className="flex object-fit overflow-hidden rounded-md aspect-video md:w-72 md:h-52 sm:w-48 sm:h-42 w-24 h-20">
          <Image
            alt="gaming community" className="md:w-72 md:h-52 sm:w-48 sm:h-42 w-24 h-20"
            src={pic.VR_COMMUNITY}
          />
        </div>
        <div className="flex w-full flex-col justify-between py-5">
          <div className="flex w-full flex-col">
            <span className="font-bold w-full">VR Community</span>
            <span className="max-sm:hidden font-light w-full text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Veritatis in praesentium eum numquam provident nisi fuga.
              Voluptate veniam commodi nostrum!
            </span>
          </div>
          <span className="text-sm">Verified</span>
        </div>
      </div>
      <div className="flex p-1 min-w-full hover:bg-slate-300 rounded dark:hover:bg-slate-900 gap-3">
        <Gradient />
        <div className="flex overflow-hidden rounded-md aspect-video md:w-72 md:h-52 sm:w-48 sm:h-42 w-24 h-20">
          <Image
            alt="gaming community"
            className="md:w-72 md:h-52 sm:w-48 sm:h-42 w-24 h-20"
            src={pic.LEARNING_COMMUNITY}
          />
        </div>
        <div className="flex w-full flex-col justify-between py-5">
          <div className="flex w-full flex-col">
            <span className="font-bold w-full">Learning Community</span>
            <span className="max-sm:hidden font-light w-full text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Veritatis in praesentium eum numquam provident nisi fuga.
              Voluptate veniam commodi nostrum!
            </span>
          </div>
          <span className="text-sm">Verified</span>
        </div>
      </div>
      <Gradient />
    </div>
  );
};

export default Cards;
