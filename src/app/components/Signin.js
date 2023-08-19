"use client";
import Account from "./db";
import { useState } from "react";
export default function Signin() {
  let [value, setValue] = useState({});
  return (
    <>
      <h1> Signin</h1>
      <form onSubmit={(e) => console.log(e)}>
        <label> Name </label>
        <input
          name="name"
          autoComplete="name"
          onChange={(e) => {
            return setValue((prevValue) => {
              return { ...prevValue, name: e.target.value };
            });
          }}
        ></input>
        <br /> <label name="mdp"> MDP </label>
        <input
          name="mdp"
          onChange={(e) => {
            return setValue((prevValue) => {
              return { ...prevValue, mdp: e.target.value };
            });
          }}
        ></input>
        <br />
        <button
          onSubmit={(e) => {
            e.preventDefault();
          }}
          onClick={async function handler(e) {
            e.preventDefault();
            let res = await fetch("http://localhost:3000/api/addUser", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(value),
            });
            let data = await res.json();
            console.log(data.message);
          }}
        >
          submit
        </button>
      </form>
    </>
  );
}
