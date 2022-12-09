import React, { useState } from "react";
import Button from "./Button";
import classes from "./cart.module.css";
import MaskGroup3x from "../assets/cartimage/Mask Group 2/MaskGroup3x.png";
import { QuantityPicker } from "react-qty-picker";


const Cart = () => {
  const [result, setresult] = useState(0);

  function increment() {
    if (result>=0) setresult((state) => state + 1);
  }
   function decrement() {
    if (result >= 1) setresult((state) => state - 1);
   }
  return (
    <div className={classes.cartbgcolor}>
      <span className={classes.headingShop}>Shopping cart</span>
      <div className={`card ${classes.field}`}>
        <div class={`card mb-3 border-0  ${classes.cardbody}`}>
          <div class="row">
            <div class="col-md-4">
              <img
                src={MaskGroup3x}
                class={`img-fluid rounded-start ${classes.img}`}
                alt="flower"
                width="90px"
                height="67px"
              />
            </div>
            <div class="col-md-5">
              <div class={`card-body ${classes.discBody}`}>
                <span className={`card-title ${classes.cardtitle}`}>
                  Soft Pink Box
                </span>
                <div className={classes.para}>
                  <p className={`card-text ${classes.paragraph}`}>
                    {" "}
                    Soft colours with a very feminine touch. Delicate but
                    elegant.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <span className={classes.price}>100 SAR</span>
              {/* <br></br>
              <br></br> */}
              <div class={`card ${classes.incrmntbtn}`}>
                <div className="row">
                  <div className="col-md-4">
                    <button
                      className={`btn ${classes.buttonforqty1}`}
                      onClick={() => decrement()}
                    >
                      -
                    </button>
                  </div>
                  <div className="col-md-4">
                    <p className={classes.qtyresult}>{result}</p>
                  </div>
                  <div className="col-md-4">
                    <button
                      className={`btn ${classes.buttonforqty}`}
                      onClick={() => increment()}
                    >
                      <b> +</b>
                    </button>
                  </div>
                </div>
              </div>
              {/* <span className={classes.billprice}>Subtotal</span> */}
            </div>
          </div>
        </div>
        <center>
          {" "}
          <hr className={`hr ${classes.hr}`} />
        </center>
        <div>
          <span className={classes.bill}>Subtotal</span>{" "}
          <span className={classes.billprice}>
            <b>350 SAR</b>
          </span>
        </div>
        <br></br>
        <div>
          <span className={classes.bill}>Delivery</span>
          <span className={classes.billprice}>
            <b>50 SAR</b>
          </span>
        </div>
        <center>
          {" "}
          <hr className={`hr ${classes.hr}`} />
        </center>
        <div>
          {" "}
          <span className={classes.bill}>
            <b>Total</b>
          </span>
          <span className={classes.totalprice}>
            <b>400 SAR</b>
          </span>
        </div>
        {/* <QuantityPicker min={0} smoothy width='2rem' /> */}{" "}
        <div className={classes.button}>
          {" "}
          <Button classbutton={classes.classbutton} button_name="PLACE ORDER" />
        </div>{" "}
      </div>
    </div>
  );
};

export default Cart;
