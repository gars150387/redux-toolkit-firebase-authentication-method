import React, { useMemo } from "react";

import "./RegisterForm.css";
import { useDispatch, useSelector } from "react-redux";
import { startGoogleSignin, startLoginWithEmailPassword } from "../app/auth/thunk";
import { useForm } from "../hooks/useForm";



export const LoginForm = () => {

  const {
    email,
    password,
    onInputChange,
  } = useForm();



  const { status } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const isAuthenticating = useMemo(() => status === "checking", [status]);

  const onSubmit = (event) => {
    event.preventDefault();

    dispatch( startLoginWithEmailPassword({ email, password }));
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
              name="email"
              value={ email }
              onChange={ onInputChange }
            />
          </div>
          <div className="col">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              aria-label="Password"
              name="password"
              value={ [password] }
              onChange={ onInputChange }
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
