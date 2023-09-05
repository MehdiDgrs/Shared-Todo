"use client";
import Signin from "../components/Signin";
import Loging from "../components/Loging";
import { useState } from "react";
export default function Login() {
  let [state, setState] = useState(false);
  return (
    <>
      <h1>Login page</h1>
      <div>
        {!state ? (
          <div>
            No account ?{" "}
            <span
              style={{ color: "blue", cursor: "pointer" }}
              onClick={(e) => {
                setState(true);
              }}
            >
              {" "}
              Sign in{" "}
            </span>
          </div>
        ) : (
          <div>
            Go back ?{" "}
            <span
              style={{ color: "blue", cursor: "pointer" }}
              onClick={(e) => {
                setState(false);
              }}
            >
              {" "}
              Login{" "}
            </span>
          </div>
        )}
        {!state ? <Loging /> : <Signin />}
      </div>
    </>
  );
}
