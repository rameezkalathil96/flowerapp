import React from "react";
import MaskGroup from "../assets/Bouquet/MaskGroup.jpg";
import classes from "./CreateBouquet.module.css";
import Card from "./Card";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import "../App.css";

const CreateBouquet = () => {
  const [widthh, setWidth] = useState(0);
  const carousel = useRef();
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    console.log(carousel.current.offsetWidth);
  });
  const bouquet = [
    {
      name: "Tulips",
      Img: "https://images.unsplash.com/photo-1587316830148-c9b01df2da38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      name: "Rose",
      Img: "https://images.unsplash.com/photo-1496062031456-07b8f162a322?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
    },
    {
      name: "Lily",
      Img: "https://images.unsplash.com/photo-1501973931234-5ac2964cd94a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
    },
    {
      name: "Tulips",
      Img: "https://images.unsplash.com/photo-1587316830148-c9b01df2da38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      name: "Rose",
      Img: "https://images.unsplash.com/photo-1496062031456-07b8f162a322?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
    },
    {
      name: "Lily",
      Img: "https://images.unsplash.com/photo-1501973931234-5ac2964cd94a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
    },
  ];
  return (
    <div>
      <div className={classes.mainDiv}>
        <div>
          <img src={MaskGroup} className={classes.TopImage} />
        </div>
        <div className={`card ${classes.crd}`}>
          <div className={classes.btnDiv}>
            <button className={`btn ${classes.custBtn}`}>Small Box</button>
            &emsp;&nbsp;
            <button className={`btn ${classes.custBtn2}`}>Big Box</button>
          </div>
          <div className={classes.contentBox}>
            <span className={classes.head}>Soft Pink Box</span>
            <br />
            <span className={classes.subHead}>100 SAR</span>
            <br />
            <br />
            <span>
              Soft colours with a very feminine touch. Delicate but elegant.
              Subtile but refined. A beautiful bouquet made with love by our
              experienced florists.
            </span>
            <br />
            <br />
            <span className={classes.title}>Includes</span>
            <div className={classes.dis}>
              <motion.div
                ref={carousel}
                className="carousel carousel-dark slide"
                id="carouselExampleControls"
                // customRightArrow={<CustomRightArrow />}
              >
                <motion.div
                  drag="x"
                  // onDrag={detectPaginationGesture}
                  dragConstraints={{ right: 0, left: -widthh }}
                  className="inner-carousel"
                  keyBoardControl={true}
                >
                  {bouquet.map((item) => (
                    <Card name={item.name} Img={item.Img} />
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBouquet;
