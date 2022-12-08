import React from 'react';
import Button from './Button';
import classes from './cart.module.css';
import MaskGroup3x from '../assets/cartimage/Mask Group 2/MaskGroup3x.png';




const Cart = () => {



  return (
    <div className={classes.cartbgcolor}>
      <span className={classes.headingShop}>Shopping cart</span>
      <div className={`card ${classes.field}`}>
        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src={MaskGroup3x}
                class="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div class="col-md-7">
              <div class="card-body">
                <span className={`card-title ${classes.cardtitle}`}>Soft Pink Box</span>
                <p class="card-text">
                  Soft colours with a very feminine touch. Delicate but elegant.
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={classes.button}>
          <Button classbutton={classes.classbutton} button_name="PLACE ORDER" />
        </div>
      </div>
    </div>
  );
}

export default Cart