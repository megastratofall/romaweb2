import "./works.css";
import tapa1 from "../../assets/tapa1.jpg";
import redArrow from "../../assets/redarrow.png";
import styled, { keyframes } from "styled-components";

const move = keyframes`
0% { transform: translateY(-5px)         }
    50% { transform: translateY(10px)        }
    100% { transform: translateY(-5px)         }
`;

const Flebai = styled.div`
  animation: ${move} 1s ease infinite;
  @media only Screen and (max-width: 40em) {
    width: 50vw;
    padding-bottom: 0;
  }
`;

const Works = () => {
  return (
    <>
      <div className="container" id="work">
        <div className="image-container">
          <img id="tapascomic1" src={tapa1} alt="tapa de comic" />
          <p className="invitacion">
            Si querés ver más de mi trabajo o leer mi comic:"Señora Martillo",  seguí la flecha y conseguirás los íconos de acceso directo a todas mis redes
            sociales.
          </p>
        </div>
        <Flebai className="redarrow-container">
          <img id="flecharoja" src={redArrow} alt="redArrow"></img>
        </Flebai>
      </div>
    </>
  );
};

export default Works;

