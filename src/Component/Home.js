import React from "react";
import classes from "./Home.module.css";
import { AiFillBell } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import Card from "./Card";
import frstimg from "./Assets/frstimg.png";
import secondimg from "./Assets/secondimg.png";
import thirdimg from "./Assets/thirdimg.png";
import fourthimg from "./Assets/fourthimg.png";
import fifthimg from "./Assets/fifthimg.png";
import search from "./Assets/search.png";
import Offercard from "./Offercard";
import Bstpricecard from "./Bstpricecard";
import { AiOutlineHome } from "react-icons/ai";
import { TbFlower } from "react-icons/tb";
import { GiFlowers } from "react-icons/gi";
import { BsCart4 } from "react-icons/bs";
import { GoThreeBars } from "react-icons/go";

const Home = () => {
  let offer = [
    {
      img: frstimg,
      title: "Friendship Day",
      description: "Get 30% Discount on All bouquets",
    },
    {
      img: "",
      title: "Mothers Day ",
      description: "Get 25% Discount on All bouquets",
    },
  ];
  let popular = [
    { img: secondimg, details: "Soft Pink Box", price: "100 SAR" },
    { img: thirdimg, details: "Chamomile Box ", price: "120 SAR" },
  ];
  let bestprice = [
    { img: fifthimg, details: "Soft Pink Box", price: "20 SAR" },
    { img: fourthimg },
  ];

  return (
    <>
      <div className={classes.content}>
        <div className={classes.top}>
          <b>
            <span className={classes.headtxt}>Hi, Abdul Malik</span>
            <span className={classes.notification}>
              {" "}
              <AiFillBell />{" "}
            </span>
          </b>
        </div>
        <div className={classes.search}>
          <input
            className={classes.searchbox}
            type="text"
            placeholder="Search your flowers, Bouquets"
          />
          <div className={classes.Offertxt}> Offer</div>
          <div className={classes.carddisplay}>
            {offer.map((item) => (
              <Card
                img={item.img}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
          <div className={classes.popular}>Popular</div>
        </div>

        <div className={classes.offerdisplay}>
          {popular.map((item) => (
            <Offercard
              img={item.img}
              details={item.details}
              price={item.price}
            />
          ))}
        </div>
        <br />

        <div className={classes.bsttxt}> Best price</div>
        <div className={classes.bstpricedisplay}>
        {bestprice.map((item) => (
          <Bstpricecard
            img={item.img}
            details={item.details}
            price={item.price}
          />
        ))}
      </div>
      
        <Bstpricecard />
      </div>
      <div className={classes.footer}>
        <span className={classes.icons}>
          {" "}
          <AiOutlineHome />
          &emsp;&emsp;
          <TbFlower />
          &emsp;&emsp;
          <GiFlowers />
          &emsp;&emsp;
          <BsCart4 />
          &emsp;&emsp;
          <GoThreeBars />
          &emsp;&emsp;
        </span>
      </div>
    </>
  );
};

export default Home;
