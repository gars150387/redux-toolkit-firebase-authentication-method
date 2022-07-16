import React, { useMemo, useState } from "react";
import { PaymentForm } from "./PaymentForm";
import { useForm } from "../hooks/useForm";

import "./RegisterForm.css";
import { useDispatch, useSelector } from "react-redux";
import { checkingAuthentication, startGoogleSignin } from "../app/auth/thunk";

const formData = {
  email: "hola@test.com",
  passowrd: "1234567",
  displayName: "Checking",
};

const formValidations = {
  email: [(value) => value.includes("@"), "Email form required"],
  password: [
    (value) => value.length >= 6,
    "Password must be greater than 6 digits",
  ],
  displayName: [(value) => value.length >= 1, "Name is required"],
};

export const RegisterForm = ({ increase, setIncrease }) => {
  const { status } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const {
    displayName,
    email,
    password,
    onInputChange,
    formState,
    isFormValid,
    displayNameValid,
    emailValid,
    passowrdValid,
  } = useForm(formData, formValidations);

  console.log('displayNameValid',displayNameValid);

  const isAuthenticating = useMemo(() => status === "checking", [status]);

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(checkingAuthentication());

  };

  const googleSignin = () => {
    console.log("google sign in");
    dispatch(startGoogleSignin());
  };

  return (
    <>
      <form onSubmit={onSubmit} className="row g-3">
        <div className="col-md-6">
          <label htmlFor="inputName4" className="form-label">
            Name
          </label>
          <input
            name="displayName"
            value={displayName}
            onChange={onInputChange}
            type="text"
            className="form-control"
            id="inputName4"
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">
            Email
          </label>
          <input
            name="email"
            value={email}
            onChange={onInputChange}
            type="email"
            className="form-control"
            id="inputEmail4"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label">
            Password
          </label>
          <input
            name="password"
            value={password}
            onChange={onInputChange}
            type="password"
            className="form-control"
            id="inputPassword4"
          />
        </div>

        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck"
            />
            <label className="form-check-label" htmlFor="gridCheck">
              Check me out
            </label>
          </div>
        </div>
        <div className="col-12">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={isAuthenticating}
          >
            Sign in
          </button>
        </div>
      </form>
      <button
        className="btn btn-primary"
        onClick={googleSignin}
        disabled={isAuthenticating}
      >
        Google Sign in
      </button>
      {/* <PaymentForm increase={increase} setIncrease={setIncrease} /> */}
    </>
  );
};
