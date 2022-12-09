import React from "react";
import classes from "./Home.module.css";

const Offercard = (props) => {
  return (
    <div>
      <div className={classes.offercard}>
        <img class="card-img-top" src={props.img} />
        <div class="card-body">
          <div className={classes.clr}>
           <b> <p class="card-text">{props.details}</p></b>
            <p class="card-text">{props.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offercard;
