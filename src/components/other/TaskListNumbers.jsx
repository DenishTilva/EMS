/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className='flex w-[95vw] mt-10 justify-between gap-5'>
      <div className='rounded-xl py-6 px-9 w-[45%] bg-red-400'>
         <h2 className='text-3xl font-semibold'>{data?.taskCount?.newTask ? `${data.taskCount.newTask}`: ""}</h2>
         <h3 className='text-xl font-medium'>New Task</h3>
      </div>

      <div className='rounded-xl py-6 px-9 w-[45%] bg-sky-400'>
         <h2 className='text-3xl font-semibold'>{data?.taskCount?.completed ? `${data.taskCount.completed}`: ""}</h2>
         <h3 className='text-xl font-medium'>Completed Task</h3>
      </div>

      <div className='rounded-xl py-6 px-9 w-[45%] bg-emerald-400'>
         <h2 className='text-3xl font-semibold'>{data?.taskCount?.active ? `${data.taskCount.active}`: ""}</h2>
         <h3 className='text-xl font-medium'>Accepted Task</h3>
      </div>

      <div className='rounded-xl py-6 px-9 w-[45%] bg-amber-400'>
         <h2 className='text-3xl font-semibold'>{data?.taskCount?.failed ? `${data.taskCount.failed}`: ""}</h2>
         <h3 className='text-xl font-medium'>Failed Task</h3>
      </div>
    </div>
  )
}

export default TaskListNumbers
