import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen">
      <div className="w-16 h-16 border-4 border-[#144EE3] border-dashed rounded-full animate-spin"></div>
    </div>
  );
};

export default Loading;
