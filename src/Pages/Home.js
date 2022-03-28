import HomeSection from "../Sections/Main/index";
import About from "../Sections/About/index";
import Contact from "../Sections/Contact/index";
import Portfolio from "../Sections/Portfolio/index";
import Works from "../Sections/Works/index";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Home = () => {
  return (
    <Container>
      <HomeSection />
      <About />
      <Portfolio />
      <Works />
      <Contact />
    </Container>
  );
};

export default Home;
