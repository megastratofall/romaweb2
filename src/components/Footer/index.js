import styled from "styled-components";
import logo from "../../assets/logo.png";

const FOOTER = styled.footer`
  color: var(--white);
  background-color: var(--nav2);
  padding: 1.2rem calc(2.5rem + 2.5vw);
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only Screen and (max-width: 48em) {
    flex-direction: column;
    align-items: center;
    div {
      &:first-child {
        margin-bottom: 0.5rem;
      }
    }
  }
`;

const RightText = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 1.5rem;
    height: 1.5rem;
    margin-left: 1rem;
    transition: all 0.2s ease-in-out;
  }
  img:hover {
    transform: Scale(2);
    border-radius: 50%;
  }
`;
const LeftText = styled.div`
  text-align: left;
`;
const Footer = () => {
  return (
    <FOOTER id="contact">
      <LeftText>© 2022 Contruido por{" Virginia Gutiérrez"}</LeftText>
      <RightText>
        &nbsp;
        <img src={logo} alt="logo" style={{ width: "30px", height: "30px" }} />
      </RightText>
    </FOOTER>
  );
};

export default Footer;
