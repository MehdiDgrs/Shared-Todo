"use client";
import { useState } from "react";
import { users } from "./db";
export default function Loging() {
  let [user, setUser] = useState({});
  let [isConnected, setIsConnected] = useState(false);
  let changeHandler = (e) => {
    let { name, value } = e.target;
    setUser((previousData) => {
      return { ...previousData, [name]: value };
    });
  };

  return (
    <>
      <h1> Loging</h1>
      <form>
        <label> Name </label>
        <input
          name="name"
          autoComplete="name"
          onChange={(e) => {
            changeHandler(e);
          }}
        ></input>
        <br />
        <label name="mdp"> MDP </label>
        <input
          name="mdp"
          onChange={(e) => {
            changeHandler(e);
          }}
        ></input>
        <br />
        <button
          onClick={async (e) => {
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
          }}
        >
          submit
        </button>
        <div>
          {" "}
          `${isConnected ? (
            <span>connecté!</span>
          ) : (
            <span>mauvais id</span>
          )}`{" "}
        </div>
      </form>
    </>
  );
}
