import React from "react";
import classes from "./Welcome.module.css";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/Login");
  };
  return (
    <div>
      <div className={classes.welcome}>
        <div className={classes.background}>
          <div className={classes.content}>
            <div className={classes.contentAlign}>
              <div className={classes.spaces}>Welcome</div>
              <div className={classes.text}>
                Flowers convey the feelings of love, romance, and happiness in
                the best worthy manner. On a particular day, send a bouquet of
                flowers
              </div>
            </div>
          </div>
          <div className={classes.iconAlign}>
            <BsFillArrowRightSquareFill
              className={classes.icon}
              onClick={handleClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
