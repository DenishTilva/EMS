/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const Header = ({ data,changeUser }) => {
  const logOutUser = () =>{
    localStorage.setItem("loggedInUser","")
    changeUser("")
  }
  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br />{" "}
        <span className="text-3xl font-semibold">
          {" "}
          {data?.firstName ? `${data.firstName} 👌` : "Admin 👋"}
        </span>{" "}
      </h1>
      <button onClick={logOutUser} className="bg-red-600 text-white px-5 py-2 text-lg font-medium rounded-md">
        Log Out
      </button>
    </div>
  );
};

export default Header;
