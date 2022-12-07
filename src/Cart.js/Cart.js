import React from 'react';
import Button from './Button';
import classes from './cart.module.css';
// import img from '../public/assets/cartimage/Mask Group 2/Mask Group 2.png'

// import VueEcommerceCard from "vue-ecommerce-card";




const Cart = () => {



  return (
    <div className={classes.cartbgcolor}>
      <span className={classes.headingShop}>Shopping cart</span>
      <div className={classes.field}>
        <div className={classes.button}>
          <Button classbutton={classes.classbutton} button_name="PLACE ORDER" />
        </div>
      






      </div>

    </div>
  );
}

export default Cart