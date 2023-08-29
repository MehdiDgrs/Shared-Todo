"use client";
import { useState } from "react";
import { users } from "./db";
import { cookies } from "next/dist/client/components/headers";
import Button from "./Button";
import Form from "./Form";
export default function Loging() {
  const input_fields = {
    username: /^[a-z\d]{5,12}$/i,
    password: /^[#\w@_-]{8,20}$/,
  };
  let [user, setUser] = useState({});
  let [isConnected, setIsConnected] = useState(false);
  let changeHandler = (e) => {
    let { name, value } = e.target;
    setUser((previousData) => {
      return { ...previousData, [name]: value };
    });
  };
  let clickHandler = async (e) => {
    e.preventDefault();
    let res = await fetch("http://localhost:3000/api/findUser", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(user),
    });

    let data = await res.json();
    if (data.message) {
      setIsConnected(true);
    }
  };
  return (
    <>
      <Form
        title="Loging Form"
        clickHandler={clickHandler}
        InputChangeHandler={changeHandler}
      />
      <div> {isConnected && <span>connecté!</span>} </div>
    </>
  );
}
