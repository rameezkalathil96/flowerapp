import React from "react";
import classes from "./Card.module.css";


const Reusablecard = (props) => {
  function addon() {}

  return (
    <>
        <div className={classes.item}>
        <div style={{width:"50%", float:"left"}}>
        <img src={props.image} class="img-fluid rounded-start"className={classes.image}  alt="flower" width="160px" height="120px"/>
        </div>
        <div style={{width:"50%", float:"left"}}>
        <div><p className={classes.title}>{props.title}</p></div>
        <div><p className={classes.content}>{props.content}</p></div>
        <p class="card-text"><small className={classes.sar}>{props.sar}</small>&emsp;&emsp;
        <button type="button" className={classes.addbutton}> {props.visible?<span>-&nbsp;   1&nbsp; +  </span>:"Add"}</button></p></div>  
        </div>       
        <br></br>
    </>
  );
};
export default Reusablecard;

