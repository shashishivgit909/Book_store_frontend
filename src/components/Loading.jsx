import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
      <p className="ml-2 text-blue-500 text-lg">Loading...</p>
    </div>
  );
};

export default Loading;
