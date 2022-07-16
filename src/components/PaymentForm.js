import React from "react";
import { useForm } from "../hooks/useForm";



const formDataCreditCard = {
name: 'Anna Doe',
cardNumber: '12365478665611',
expire: '25/25',
cvv: '542'
}


export const PaymentForm = ({ increase }) => {
  const { name, cardNumber, expire, cvv, onInputChange } = useForm(formDataCreditCard);

  return (
    <section
      className="p-4 p-md-5"
      style={{
        backgroundImage:
          "url(https://mdbcdn.b-cdn.net/img/Photos/Others/background3.webp)",
      }}
    >
      <div className="row d-flex justify-content-center">
        <div className="col-md-10 col-lg-8 col-xl-5">
          <div className="card rounded-3">
            <div className="card-body p-4">
              <div className="p-center mb-4">
                <h3>Settings</h3>
                <h6>Payment</h6>
              </div>
              <form action="">
                <p className="fw-bold mb-4 pb-2">Amount: ${increase * 200} </p>

                <p className="fw-bold mb-4">Add new card:</p>

                <div className="form-outline mb-4">
                  <input
                    type="p"
                    id="formControlLgXsd"
                    className="form-control form-control-lg"
                    name="Anna Doe"
                    value={name}
                    onChange={onInputChange}
                  />
                  <label className="form-label" htmlFor="formControlLgXsd">
                    Cardholder's Name
                  </label>
                </div>

                <div className="row mb-4">
                  <div className="col-7">
                    <div className="form-outline">
                      <input
                        type="p"
                        id="formControlLgXM"
                        className="form-control form-control-lg"
                        name="1234 5678 1234 5678"
                        value={cardNumber }
                        onChange={onInputChange}
                      />
                      <label className="form-label" htmlFor="formControlLgXM">
                        Card Number
                      </label>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="form-outline">
                      <input
                        type="password"
                        id="formControlLgExpk"
                        className="form-control form-control-lg"
                        placeholder="MM/YYYY"
                        name="expire"
                        value={ expire }
                        onChange={onInputChange}
                      />
                      <label className="form-label" htmlFor="formControlLgExpk">
                        Expire
                      </label>
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="form-outline">
                      <input
                        type="password"
                        id="formControlLgcvv"
                        className="form-control form-control-lg"
                        placeholder="Cvv"
                        name=""
                        value={ cvv }
                        onChange={onInputChange}
                      />
                      <label className="form-label" htmlFor="formControlLgcvv">
                        Cvv
                      </label>
                    </div>
                  </div>
                </div>

                <button className="btn btn-success btn-lg btn-block">
                  Add card
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
