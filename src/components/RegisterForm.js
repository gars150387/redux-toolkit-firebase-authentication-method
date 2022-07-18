import React, { useMemo } from "react";
import { useForm } from "../hooks/useForm";

import "./RegisterForm.css";
import { useDispatch, useSelector } from "react-redux";
import { startCreatingUserWithEmailPassword } from "../app/auth/thunk";

const formData = {
  email: "hola@test.com",
  passowrd: "1234567.",
  displayName: "Checking",
};

// const formValidations = {
//   email: [(value) => value.includes("@"), "Email form required"],
//   password: [
//     (value) => value.includes >= 6,
//     "Password must be greater than 6 digits",
//   ],
//   displayName: [(value) => value.length >= 1, "Name is required"],
// };

export const RegisterForm = ({ increase, setIncrease }) => {


  const { status, errorMessage } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const {
    displayName,
    email,
    password,
    onInputChange,
    formState,
  } = useForm(formData);

  const isAuthenticating = useMemo(() => status === "checking", [status]);


  const onSubmit = (event) => {
    event.preventDefault();

    dispatch(startCreatingUserWithEmailPassword(formState));
    console.log({ email, password, displayName })
  };

  return (
    <>
      <form onSubmit={onSubmit} className="row g-3">
        <div className="col-12">
          <label className="form-label">Name</label>
          <input name="displayName" value={displayName} onChange={ onInputChange } type="text" className="form-control" id="inputName" />
        </div>
        <div className="col-md-6">
          <label className="form-label">Email</label>
          <input name="email" value={email} onChange={ onInputChange }  type="email" className="form-control" id="inputEmail4" />
        </div>
        <div className="col-md-6">
          <label className="form-label">Password</label>
          <input name="password" value={password} onChange={ onInputChange }  type="password" className="form-control" id="inputPassword4" />
        </div>

        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck"
            />
            <label className="form-check-label">Check me out</label>
          </div>
        </div>
        <div 
        className="col"
        >
          { errorMessage }
        </div>
        <div className="col">
          <button
          disabled={ isAuthenticating }
          type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
      </form>
    </>
  );
};
