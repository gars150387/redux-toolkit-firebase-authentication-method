import React, { useState } from "react";
import { RegisterForm } from "../components/RegisterForm";

export const Home = () => {
  const initialState = 1;

  const [increase, setIncrease] = useState(initialState);

  const handleIncrease = () => {
    setIncrease(increase + 1);
  };

  const handleDecrease = () => {
    setIncrease(increase - 1);
  };

  if (increase < 1) {
    return setIncrease(initialState);
  }

  const handleReset = () => {
    return setIncrease(initialState);
  };

  return (
    <div>
      <section>
        <RegisterForm setIncrease={setIncrease} increase={increase} />
      </section>
      <section>
        <p>
          Device: {increase}
          <button onClick={handleIncrease}>+</button>
          <button onClick={handleReset}>Reset</button>
          <button onClick={handleDecrease}>-</button>
        </p>
      </section>
    </div>
  );
};
