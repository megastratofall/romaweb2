import styled from "styled-components";
import Faneo from "../../assets/faneoicon.png";
import Devianart from "../../assets/devianarticon.png";
import emailjs from "@emailjs/browser";
import "./back.css";

const ContactSection = styled.section`
  width: 100vw;
  padding: calc(2.5rem + 2.5vw) 0;
  background-color: #050505;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Icons = styled.div`
  display: flex;
  margin-bottom: 3rem;
  a {
    &:hover {
      img {
        filter: invert(20%) sepia(100%) saturate(500%) hue-rotate(580deg)
          brightness(100%) contrast(97%);
      }
    }
    &:not(:last-child) {
      margin-right: 2rem;
    }
    img {
      width: 3rem;
      height: 3rem;
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  input {
    padding: 1rem calc(0.5rem + 1vw);
    margin-bottom: 1rem;
    background-color: var(--nav2);
    border: none;
    border-radius: 4px;
    color: #eff7f8;
    &:active,
    &:focus {
      border: none;
      outline: none;
      background-color: var(--nav);
    }
    &::placeholder {
      color: #eff7f8;
      opacity: 0.6;
    }
    &[name="name"] {
      margin-right: 2rem;
    }
  }
  textarea {
    padding: 1rem calc(0.5rem + 1vw);
    margin-bottom: 1rem;
    background-color: var(--nav2);
    border: none;
    border-radius: 4px;
    color: #eff7f8;
    margin-bottom: 2rem;
    &:focus,
    &:active {
      background-color: var(--nav);
    }
    &::placeholder {
      color: #eff7f8;
      opacity: 0.6;
    }
  }
  button {
    padding: 0.8rem 2rem;
    background-color: var(--red);
    border-radius: 20px;
    font-size: 1.2rem;
    color: var(--white);
    cursor: pointer;
    transition: transform 0.3s;
    &:hover {
      transform: scale(1.1);
    }
    &:active {
      transform: scale(0.9);
    }
  }
`;

const Row = styled.div`
  @media only Screen and (max-width: 40em) {
    display: flex;
    flex-direction: column;
    input {
      &[name="name"] {
        margin-right: 0;
      }
    }
  }
`;

const index = () => {
  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_38ynf98",
        "template_y6yf9w2",
        event.target,
        "yo3R-CvLjNcl_1xqc"
      )
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <ContactSection className="back" id="backc">
        <Icons>
          <a
            href="https://www.faneo.es/users/RxOxMxA/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Faneo} alt="Faneo Icon" />
          </a>
          <a
            href="https://www.deviantart.com/fernandoroma"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Devianart} alt="Devianart Icon" />
          </a>
        </Icons>
        <Form onSubmit={sendEmail}>
          <Row>
            <input
              name="user_name"
              type="text"
              placeholder="Ingresa tu nombre"
              style={{ marginRight: ".2rem" }}
            />
            <input
              name="user_email"
              type="email"
              placeholder="Ingresa tu email"
              style={{ marginRight: ".2rem" }}
            />
          </Row>
          <textarea
            name="user_message"
            cols="30"
            rows="2"
            placeholder="Tu mensaje"
          ></textarea>
          <div style={{ margin: "0 auto" }}>
            <button onSubmit={sendEmail}>Enviar</button>
          </div>
        </Form>
      </ContactSection>
    </>
  );
};

export default index;
