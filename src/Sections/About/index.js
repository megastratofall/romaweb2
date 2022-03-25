import ferni from "../../assets/ferni.jpg";
import styled, { keyframes } from "styled-components";
import "./back.css";

const move = keyframes`
0% { transform: translateY(-5px)         }
    50% { transform: translateY(10px) translateX(10px)        }
    100% { transform: translateY(-5px)         }
`;

const AboutSection = styled.div`
  width: 100vw;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Main = styled.div`
  margin: 0 15rem;
  margin-top: 15rem;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media only Screen and (max-width: 64em) {
    margin: 0 calc(5rem + 5vw);
    margin-top: 10rem;
  }
  @media only Screen and (max-width: 40em) {
    align-items: center;
    margin: 3rem calc(3rem + 3vw);
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only Screen and (max-width: 40em) {
    flex-direction: column;
  }
`;

const Fercho = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 40%;
  padding-bottom: 5rem;
  animation: ${move} 2.5s ease infinite;
  @media only Screen and (max-width: 40em) {
    width: 50vw;
    padding-bottom: 0;
  }
`;

const Text = styled.h4`
  font-size: calc(0.5rem + 1vw);
  line-height: 1.5;
  color: var(--nav2);
`;

const AboutText = styled.div`
  width: 50%;
  position: relative;
  @media only Screen and (max-width: 40em) {
    width: 100%;
  }
`;

const index = () => {
  return (
    <>
      <AboutSection className="home" id="about">
        <Main>
          <Content>
            <Fercho>
              <img
                src={ferni}
                alt=""
                width="400"
                height="400"
                style={{ borderRadius: "50%" }}
              />
            </Fercho>
            <AboutText>
              <Text>
                <p>
                  Mi nombre es Fernando Roma, soy un aficionado al dibujo, se
                  podría decir que dibujo desde que tengo uso de razón, pero
                  nunca me había dado cuenta de que el arte estuvo en mis venas
                  y del tiempo que había desperdiciado. Hoy a mis 41 años decidí
                  exponer todo lo que hago con respecto a lo que más amo, quiero
                  que el dibujo sea no solo parte de mí, si no toda mi vida.
                </p>
              </Text>
            </AboutText>
          </Content>
        </Main>
      </AboutSection>
    </>
  );
};

export default index;
