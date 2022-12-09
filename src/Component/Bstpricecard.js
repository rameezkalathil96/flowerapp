import React from "react";
import classes from "./Home.module.css";

const Bstpricecard = (props) => {
  return (
    <div>
      <div className={`card mb-3 ${classes.txt}`}>
        <div className="row g-0">
          <div className="col-4">
            <img src={props.img} className={classes.cardImg} alt="..." />
          </div>
          <div className={`col-8 ${classes.cardBodyBg}`}>
           
          <b>Soft Pink Box</b><br/>
              20 SAR
              <br/>
           
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default Bstpricecard;
