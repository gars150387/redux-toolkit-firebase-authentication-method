import React from "react";

export const PaymentForm = ({ increase }) => {
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

                {/* <div className="d-flex flex-row align-items-center mb-4 pb-1">
              <img className="img-fluid" src="" />
              
              <div className="flex-fill mx-3">
                <div className="form-outline">
                  <input type="p" id="formControlLgXc" className="form-control form-control-lg"
                    value="**** **** **** 3193" />
                  <label className="form-label" for="formControlLgXc">Card Number</label>
                </div>
              </div>
              <a href="#!">Remove card</a>
            </div> */}

                {/* <div className="d-flex flex-row align-items-center mb-4 pb-1">
              <img className="img-fluid" src="https://img.icons8.com/color/48/000000/visa.webp" />
              <div className="flex-fill mx-3">
                <div className="form-outline">
                  <input type="p" id="formControlLgXs" className="form-control form-control-lg"
                    value="**** **** **** 4296" />
                  <label className="form-label" for="formControlLgXs">Card Number</label>
                </div>
              </div>
              <a href="#!">Remove card</a>
            </div> */}

                <p className="fw-bold mb-4">Add new card:</p>

                <div className="form-outline mb-4">
                  <input
                    type="p"
                    id="formControlLgXsd"
                    className="form-control form-control-lg"
                    value="Anna Doe"
                  />
                  <label className="form-label" for="formControlLgXsd">
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
                        value="1234 5678 1234 5678"
                      />
                      <label className="form-label" for="formControlLgXM">
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
                      />
                      <label className="form-label" for="formControlLgExpk">
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
                      />
                      <label className="form-label" for="formControlLgcvv">
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
