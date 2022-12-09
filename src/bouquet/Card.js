import React, { useState } from "react";
import classes from "./CreateBouquet.module.css";
import { motion } from "framer-motion";

const Card = (props) => {
  const [count,setCount]=useState(0);
  const increment=()=>{
    setCount(count + 1);
  }
  const decrement=()=>{
    if(count !==0){
    setCount(count - 1);
    }
  }
  return (
    <motion.div className="item">
      <div>
        <div class={`card ${classes.Card}`}>
          <img
            src={props.Img}
            class={`card-img-top ${classes.cardImg}`}
            alt="..."
          />
          <div class={classes.cardBody}>
            <center>
              <p className={classes.Name}>{props.name}</p>
              
              <div className={`card ${classes.innerCard}`}>
                <div className={classes.innerDiv}>
                <center>
                <button className={`btn ${classes.increment}`} onClick={()=>increment()}>+</button>
                <p className={classes.count}>{count}</p>
                <button className={`btn ${classes.decrement}`} onClick={()=>decrement()}>-</button>
                </center>
              </div>
              </div>
              </center>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
