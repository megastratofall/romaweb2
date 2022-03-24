import styled from "styled-components";
import MoserviFoto from "../../assets/moservi2.jpg";
import Back from "./back.css";

const HomeSection = styled.section`
  width: 100vw;
  height: 45vw;
  background-color: #050505;
  display: flex;
  justify-content: center;
  position: relative;
  @media only Screen and (max-width: 48em) {
    height: 70vw;
    display: block;
  }
  @media only Screen and (max-width: 420px) {
    height: auto;
    padding-bottom: 2rem;
  }
`;

const MainContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70vw;
  @media only Screen and (max-width: 48em) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
  }
`;

const Mobile = styled.img`
  max-width: 100%;
  width: calc(30% + 20vw);
  height: auto;
  z-index: 7;
  border-radius: 50%;
  @media only Screen and (max-width: 48em) {
    align-self: flex-start;
    position: absolute;
    bottom: 0;
    width: calc(30% + 20vw);
    opacity: 0.5;
  }
  @media only Screen and (max-width: 40em) {
    display: none;
  }
`;

const Lb = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  line-height: 1.5;
  color: var(--white);
  position: relative;
  z-index: 15;
  @media only Screen and (max-width: 48em) {
    width: 80%;
    text-align: center;
    align-items: center;
    justify-content: space-around;
    margin-top: calc(2.5rem + 2.5vw);
    filter: drop-shadow(2px 4px 6px black);
  }
  @media only Screen and (max-width: 40em) {
    filter: none;
  }
`;

const Title = styled.h1`
  font-size: calc(2rem + 1vw);
  line-height: 1.2;
  padding: 0.5rem 0;
  font-family: Bleeding Cowboys, Comic Sans;
  color: var(--red);
`;

const SubText = styled.h5`
  font-size: calc(0.5rem + 0.5vw);
  color: var(--nav2);
`;

const index = () => {
  return (
    <>
      <HomeSection id="home">
        <MainContent id="home">
          <Lb id="leftBlock">
            <h2>Mi nombre es:</h2>
            <Title> RxOxMxA</Title>
            <br />
            <SubText>
              <p>
                Este espacio artístico fue creado para aquellos que, disfrutan
                del arte basado en historietas, creación de personajes y dibujo
                estilo libre.
              </p>
            </SubText>
          </Lb>
          <Mobile src={MoserviFoto} alt="Mobile png" width="400" height="400" />
        </MainContent>
      </HomeSection>
    </>
  );
};

export default index;
