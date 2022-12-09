import React from "react";
import classes from "./Home.module.css";

const Bstpricecard = (props) => {
  return (
    <div>
      <div className={classes.bstcard}>
        <img src={props.img} align="left"></img>
        <div className={classes.bstcardcontent}>
          <p className={classes.cardtitle}>{props.details}</p>
          <br />
          <p className={classes.carddetails}>{props.price}</p>
        </div>
      </div>
    </div>
  );
};

export default Bstpricecard;
