import React from "react";
import classes from "./Home.module.css";

const Card = (props) => {
  return (
    <div>
      <div className={classes.card}>
        <p className={classes.cardtitle}>{props.title}</p>
        <br />
        <p className={classes.carddetails}>{props.description}</p>
      </div>
    </div>
  );
};

export default Card;
