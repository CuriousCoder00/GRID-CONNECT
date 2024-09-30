import React from "react";

const Chat = () => {
  return (
    <div className="flex w-full h-full max-h-[90vh] gap-1">
      <div className="flex flex-col overflow-y-auto hidden-scrollbar gap-2 lg:w-96 md:w-80 sm:w-20 max-sm:hidden md:p-2">
        {[...new Array(270)].map((i) => (
          <div
            key={i}
            className="flex w-full min-h-20 rounded-lg bg-gray-300 dark:bg-slate-700"
          >.</div>
        ))}
      </div>
      <div className="flex flex-col h-full w-full overflow-y-auto gap-3 p-2 sm:border-l-2 dark:border-l-slate-700">
        {[...new Array(600)].map((i) => (
          <div
            key={i}
            className="flex h-4 w-full rounded  bg-gray-100 dark:bg-slate-700"
          >.</div>
        ))}
      </div>
    </div>
  );
};

export default Chat;
