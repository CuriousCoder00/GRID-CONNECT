import React from "react";

const Chat = () => {
  return (
    <div className="flex w-full h-full max-h-[90vh] gap-1">
      <div className="flex flex-col h-full overflow-y-auto hidden-scrollbar gap-2 sm:p-2 md:p-1 w-14 sm:w-20 md:w-18 ">
        {[...new Array(22)].map((i) => (
          <div
            key={i}
            className="aspect-square flex md:w-16 md:h-16 sm:h-14 sm:w-14 h-12 w-12 rounded-lg bg-gray-300 dark:bg-slate-700"
          ></div>
        ))}
      </div>
      <div className="flex flex-col h-full w-full overflow-y-auto gap-3 p-2 border-l-2 dark:border-l-slate-700">
        {[...new Array(600)].map((i) => (
          <div
            key={i}
            className="flex h-4 w-full rounded  bg-gray-100 dark:bg-slate-700"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Chat;
