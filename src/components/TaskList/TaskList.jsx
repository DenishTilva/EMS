/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  return (
    <div
      id="tasklist"
      className="overflow-x-auto flex items-center justify-start flex-nowrap gap-5 py-5 mt-10 h-[55%] w-full"
    >

      {data?.tasks?.map((elem,ind) =>{
         if(elem.active){
            return <AcceptTask key={ind} data={elem}/>
         }
         if(elem.newTask){
            return <NewTask key={ind} data={elem}/>
         }
         if(elem.completed){
            return <CompleteTask key={ind} data={elem}/>
         }
         if(elem.failed){
            return <FailedTask key={ind} data={elem}/>
         }
      })}

      {/* <div className=' flex-shrink-0 h-full p-5 w-[300px] bg-blue-400 rounded-xl'>
         <div className='flex justify-between items-center'>
            <h3 className='bg-rose-600 px-3 py-1 rounded-md text-sm'>High</h3>
            <h4 className='text-sm'>20 march 2024</h4>
         </div>
         <h2 className='mt-5 text-2xl font-semibold'>Make coding projects</h2>
         <p className='text-sm mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam fuga magni amet qui reprehenderit debitis!</p>
      </div> */}
    </div>
  );
};

export default TaskList;
