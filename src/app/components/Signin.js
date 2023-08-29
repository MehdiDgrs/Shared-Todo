"use client";
import Account from "./db";
import { useState } from "react";
import Button from "./Button";
import Form from "./Form";
export default function Signin() {
  let [value, setValue] = useState({});
  let [loading, setLoading] = useState(false);
  let [rep, setRep] = useState({});
  async function handler(e) {
    setLoading(true);
    e.preventDefault();
    let res = await fetch("http://localhost:3000/api/addUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(value),
    });
    setRep(res);
    let data = await res.json();

    console.log(res);
    setLoading(false);
  }
  function inputHandler(e) {
    let { name, value } = e.target;
    return setValue((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }
  return (
    <>
      <Form
        res={rep}
        loading={loading}
        title="Signin"
        clickHandler={handler}
        InputChangeHandler={inputHandler}
      ></Form>
    </>
  );
}
