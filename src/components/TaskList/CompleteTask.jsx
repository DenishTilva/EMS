/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const CompleteTask = ({data}) => {
  return (
    <div className=" flex-shrink-0 h-full p-5 w-[300px] bg-red-400 rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-rose-600 px-3 py-1 rounded-md text-sm">{data?.category}</h3>
        <h4 className="text-sm">{data?.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data?.taskTitle}</h2>
      <p className="text-sm mt-2">
      {data?.taskDescription}
      </p>
      <div className="mt-2">
        <button className="bg-pink-500 px-2 py-1 text-sm w-full">Completed</button>
      </div>
    </div>
  );
};

export default CompleteTask;
