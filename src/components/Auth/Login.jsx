/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Login = ({handleLogin}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email,password)
    setEmail("")
    setPassword("")
  };
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-600 p-16 rounded-xl">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className="outline-none bg-transparent border-2 border-emerald-500 py-2 px-6 rounded-full text-lg placeholder:text-gray-400"
            type="email"
            placeholder="Enter your email"
          />
          <input
            value={password}
            onChange={(e) =>{
                setPassword(e.target.value)
            }}
            required
            className="outline-none bg-transparent border-2 border-emerald-500 py-2 px-6 mt-5 rounded-full text-lg placeholder:text-gray-400"
            type="password"
            placeholder="Enter password"
          />
          <button className="text-white mt-6 outline-none  border-none bg-emerald-500 py-2 px-4 rounded-full text-xl placeholder:text-white">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
