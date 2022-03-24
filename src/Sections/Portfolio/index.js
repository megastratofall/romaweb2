import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import portfoliostyle from "./portfolio.css";
import img1 from "../../assets/1.jpg";
import img2 from "../../assets/2.JPG";
import img3 from "../../assets/3.JPG";
import img4 from "../../assets/4.jpg";
import img5 from "../../assets/5.jpg";
import img6 from "../../assets/6.jpg";
import img7 from "../../assets/7.jpg";
import img8 from "../../assets/8.jpg";
import img9 from "../../assets/9.jpg";

const Portfolio = () => {
  let data = [
    {
      id: 1,
      imgSrc: img1,
    },
    {
      id: 2,
      imgSrc: img2,
    },
    {
      id: 3,
      imgSrc: img3,
    },
    {
      id: 4,
      imgSrc: img4,
    },
    {
      id: 5,
      imgSrc: img5,
    },
    {
      id: 6,
      imgSrc: img6,
    },
    {
      id: 7,
      imgSrc: img7,
    },
    {
      id: 8,
      imgSrc: img8,
    },
    {
      id: 9,
      imgSrc: img9,
    },
  ];

  const [model, setModel] = useState(false);
  const [tempingSrc, setTempImgSrc] = useState("");
  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };

  return (
    <>
      <div className={model ? "model open" : "model"}>
        <img src={tempingSrc} alt="imagen de la galeria" />
        <CloseIcon onClick={() => setModel(false)} />
      </div>
      <h1>Galeria</h1>
      <br />
      <div className="gallery">
        {data.map((items, index) => {
          return (
            <div
              className="pics"
              id="portfolio"
              key={index}
              onClick={() => getImg(items.imgSrc)}
            >
              <img src={items.imgSrc} alt="" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Portfolio;
