import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen bg-[#fff] text-[#000]">
      <h1 className="text-7xl font-bold">404</h1>
      <p className="text-xl mt-4">Not Found</p>
      <Link
        href="/"
        className="mt-6 px-4 py-2 bg-[#144EE3] text-[#fff] rounded hover:bg-[#144EE3]"
      >
        Home
      </Link>
    </div>
  );
};

export default NotFound;
