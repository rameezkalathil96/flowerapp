import React from "react";
import classes from "./Login.module.css";
import img from "../Image/Lotus.png";
import Input from "@mui/material/Input";

const Login = () => {
  return (
    <div>
      <div className={classes.area}>
        <div className={classes.height}>
          <div className={classes.center}>
            <img src={img} height="200px" alt="Lotus.png" />
          </div>
          <div className={classes.border}>
            <span className={classes.text}>
              <b>Log in</b>&nbsp;to your account.
            </span>
            <div className={classes.Input}>
              <Input placeholder="Email" className={classes.box} />
            </div>
            <div className={classes.Input}>
              <Input placeholder="Password" className={classes.box} />
            </div>
            <div className={classes.forgot}>Forgot Password</div>
            <div className={classes.buttonContainer}>
              <button className={classes.button}>
                <b>LOGIN</b>
              </button>
            </div>
            <div className={classes.account}>
              Don’t have an account?
              <b>
                &nbsp;<span className={classes.signIn}>Sign in</span>
              </b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
