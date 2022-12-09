import React from "react";
import Reusablecard from "./Reusablecard";
import classes from "./Card.module.css";
import imgb1 from "../assets/imgb1.png";
import imgb2 from "../assets/imgb2.png";
import imgb3 from "../assets/imgb3.png";
import imgb4 from "../assets/imgb4.png";

const Bouquet = () => {
  const bouquet = [
    {
      id: 1,
      image: imgb1,
      title: "Soft Pink Box",
      rate: "300",
      sar: "100 SAR",

      content: "Soft colours with a very feminine touch.Delicate but elegant.",
    },
    {
      id: 2,
      image: imgb2,
      title: "Lily",
      rate: "350",
      sar: "80 SAR",

      content: "A beautiful lovely high quality and hand-picked Liiyes.",
    },
    {
      id: 3,
      image: imgb3,
      title: "Chamomile Box",
      rate: "200",
      sar: "90 SAR",

      content: "A beautiful lovely high quality and hand-picked Chamomile.",
    },
    {
      id: 4,
      image: imgb4,
      title: "Tulips Box",
      rate: "300",
      sar: "100 SAR",

      content: "A beautiful lovely high quality and hand-picked Chamomile.",
    },
  ];

  function Popular() {}
  function createbutton() {}

  return (
    <>
      <div className={classes.heading1}>
        <b>Choose Bouquet</b>
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
        onClick={createbutton}
        autocomplete="off"
      />
      <label className={`btn ${classes.button}`} htmlFor="success-outlined">
        Create your Bouquet
      </label>
      <br />
      <br />
      <br />
      {bouquet.map((item) => (
        <Reusablecard
          image={item.image}
          title={item.title}
          rate={item.rate}
          sar={item.sar}
          content={item.content}
        />
      ))}
    </>
  );
};

export default Bouquet;
