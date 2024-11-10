/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [category, setCategory] = useState('')
  const [newTask, setNewTask] = useState({})

  const [userData,setUserData] = useContext(AuthContext)

  const submitHandler = (e)=>{
    e.preventDefault();

    setNewTask({taskTitle,taskDate,taskDescription,assignTo,category,active:false,newTask:true,completed:false,failed:false})

    const data = userData

    data.forEach((elem)=>{
      if(assignTo == elem.firstName){
        elem.tasks.push(newTask)
        elem.taskCount.newTask = elem.taskCount.newTask+1
      }
    })
    setUserData(data)
    console.log(data,"ctt")
    setTaskTitle("")
    setAssignTo("")
    setTaskDate("")
    setTaskDescription("")
    setCategory("")
  }
  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className="flex flex-wrap w-full items-start justify-between">
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e)=>{
                setTaskTitle(e.target.value)
              }}
              type="text"
              placeholder="ui design"
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              value={taskDate}
              onChange={(e)=>{
                setTaskDate(e.target.value)
              }}
              type="date"
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
            <input
            value={assignTo}
            onChange={(e)=>{
              setAssignTo(e.target.value)
            }}
              type="text"
              placeholder="employee name"
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input
            value={category}
            onChange={(e)=>{
              setCategory(e.target.value)
            }}
              type="text"
              placeholder="design, dev"
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
            />
          </div>
        </div>

        <div className="w-2/5 flex flex-col items-start">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
          value={taskDescription}
          onChange={(e)=>{
            setTaskDescription(e.target.value)
          }}
            name=""
            id=""
            className="w-full h-44 text-sm py-4 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"
          ></textarea>
          <button className="bg-emerald-500 py-3 hover:bg-rose-600 px-5 rounded text-sm mt-4 w-full">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
