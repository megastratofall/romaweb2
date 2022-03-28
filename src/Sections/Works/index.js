import "./works.css";
import tapa1 from "../../assets/tapa1.jpg";
import tapa2 from "../../assets/tapa2.jpg";
import redArrow from "../../assets/redarrow.png";

const Works = () => {
  return (
    <>
      <div className="container" id="work">
        <div className="image-container">
          <img id="tapascomic1" src={tapa1} alt="tapa de comic" />
          <p className="invitacion">
            Si querés ver más de mi trabajo o leer mis comics, seguí la flecha y
            conseguirás los íconos de acceso directo a Devianart y Faneo
            respectivamente.
          </p>
          <img id="tapascomic2" src={tapa2} alt="tapa de comic" />
        </div>
        <div className="redarrow-container">
          <img src={redArrow} alt="redArrow"></img>
        </div>
      </div>
    </>
  );
};

export default Works;
