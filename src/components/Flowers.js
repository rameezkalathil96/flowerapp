import React from "react";
import Reusablecard from "./Reusablecard";
import { Navigate, useNavigate } from "react-router-dom";
import classes from "./Card.module.css";
import imgf1 from "../assets/imgf1.png";
import imgf2 from "../assets/imgf2.png";
import imgf3 from "../assets/imgf3.png";
import imgf4 from "../assets/imgf4.png";

const Flowers = () => {
  const flower = [
    {
      id: 1,
      image: imgf1,

      title: "Rose",
      rate: "250",
      sar: "20 SAR",

      content: "A beautiful lovely high quality and hand-picked roses.",
      
    },
    {
      id: 2,
      image: imgf2,

      title: "Lily",
      rate: "300",
      sar: "25 SAR",
      content: "A beautiful lovely high quality and hand-picked Liiyes.",
      visible:true,
    },
    {
      id: 3,
      image: imgf3,

      title: "Chamomile",
      rate: "250",
      sar: "10 SAR",
      content: "A beautiful lovely high quality and hand-picked Chamomile.",
    },
    {
      id: 4,
      image: imgf4,
      title: "Tulips",
      rate: "300",
      sar: "10 SAR",

      content: "A beautiful lovely high quality and hand-picked tulips.",
    },
  ];

  const Navigate = useNavigate();

  function buttonhandler() {
    Navigate("/Bouquet");
  }

  function Popular() {}
  function Rose() {}
  function Chamomile() {}
  function Tulips() {}

  return (
    <div className={classes.mainHead}>
      <div className={classes.heading1}>
        <b>Choose Flowers</b>
      </div>
      <input
        type="radio"
        className="btn-check "
        name="options-outlined"
        id="success-outlined"
        onClick={Popular}
        autocomplete="off"
      />
      <label
        className={`btn ${classes.popularbutton}`}
        htmlFor="success-outlined"
      >
        Popular
      </label>
      &emsp;
      <input
        type="radio"
        className="btn-check "
        name="options-outlined"
        id="success-outlined"
        onClick={Rose}
        autocomplete="off"
      />
      <label className={`btn ${classes.button}`} htmlFor="success-outlined">
        Rose
      </label>
      &emsp;
      <input
        type="radio"
        className="btn-check "
        name="options-outlined"
        id="success-outlined"
        onClick={Chamomile}
        autocomplete="off"
      />
      <label className={`btn ${classes.button}`} htmlFor="success-outlined">
        Chamomile
      </label>
      &emsp;
      <input
        type="radio"
        className="btn-check "
        name="options-outlined"
        id="success-outlined"
        onClick={Tulips}
        autocomplete="off"
      />
      <label className={`btn ${classes.button}`} htmlFor="success-outlined">
        Tulips
      </label>
      &emsp;
      <br /> <br /> <br />
      {flower.map((item) => (
        <Reusablecard
          image={item.image}
          title={item.title}
          rate={item.rate}
          sar={item.sar}
          content={item.content}
          visible={item.visible}
        />
      ))}
      <button onClick={buttonhandler}>Next</button>
    </div>
  );
};

export default Flowers;
