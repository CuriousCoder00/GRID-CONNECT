import React from "react";

const Chat = () => {
  return (
    <div className="grid grid-cols-12 w-full max-h-[90vh]">
      <div className="grid col-span-1 overflow-y-auto gap-2 p-2">
        {[...new Array(22)].map((i) => (
          <div
            key={i}
            className="h-22 aspect-square rounded-lg  bg-gray-100 dark:bg-slate-700"
          ></div>
        ))}
      </div>
      <div className="grid col-span-11 overflow-y-auto gap-1 p-2">
        {[...new Array(222)].map((i) => (
          <div
            key={i}
            className="h-2 w-full rounded-lg  bg-gray-100 dark:bg-slate-700"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Chat;
