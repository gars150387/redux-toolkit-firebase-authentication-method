import React, { useMemo } from "react";

import "./RegisterForm.css";
import { useDispatch, useSelector } from "react-redux";
import { checkingAuthentication, startGoogleSignin } from "../app/auth/thunk";

// const formValidations = {
//   email: [(value) => value.includes("@"), "Email form required"],
//   password: [
//     (value) => value.includes >= 6,
//     "Password must be greater than 6 digits",
//   ],
//   displayName: [(value) => value.length >= 1, "Name is required"],
// };

export const LoginForm = ({ increase, setIncrease }) => {
  const { status } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const isAuthenticating = useMemo(() => status === "checking", [status]);

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(checkingAuthentication());
  };

  const googleSignin = () => {
    dispatch(startGoogleSignin());
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="row g-3">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              aria-label="Email"
            />
          </div>
          <div className="col">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              aria-label="Password"
            />
          </div>
        </div>
        <div className="col-12">
          <button
            disabled={isAuthenticating}
            type="submit"
            className="btn btn-primary"
          >
            Sign in
          </button>
        </div>
      </form>
      <div className="col-12">
        <button
          disabled={isAuthenticating}
          onClick={googleSignin}
          className="btn btn-primary"
        >
          Google Sign in
        </button>
      </div>
    </>
  );
};
