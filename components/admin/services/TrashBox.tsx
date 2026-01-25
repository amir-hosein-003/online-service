import React from "react";

interface Props {}

const TrashBox = () => {
  return (
    <div className="w-64 h-12 absolute top-6 left-1/2 flex flex-row items-center justify-center gap-4 rounded-full bg-base-100 shadow">
      <div className="">❌</div>
      <div className="min-w-12"></div>
      <div className="text-error">حذف</div>
    </div>
  );
};

export default TrashBox;
