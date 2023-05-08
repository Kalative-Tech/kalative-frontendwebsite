import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styled from "styled-components";
import Envelope from "../icons/envelope.svg";
import Phone from "../icons/phone.svg";
import Location from "../icons/location-pin.svg";
import Thumb from "../icons/thumbs-up.svg";
import Instagram from "../icons/instagram.svg";

const Contact = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Heading>Contact Us</Heading>
        <Para>
          Reach out to Fanatic Kalakaar by sending us a response or through our
          mobile and socials.
        </Para>
        <ContactForm>
          <Form>
            <InputLabel>First Name*</InputLabel>
            <Input placeholder="First Name" required />
            <InputLabel>Last Name*</InputLabel>
            <Input placeholder="Last Name" required />
            <InputLabel>Email*</InputLabel>
            <Input placeholder="abcd@gmail.com" required />
            <InputLabel>Message*</InputLabel>
            <TextArea />
            <SubmitBtn>Submit Form</SubmitBtn>
          </Form>
          <Map>
            <Iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3179.647153012549!2d78.41005414855817!3d17.429686524050126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1683522639743!5m2!1sen!2sin"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></Iframe>
            <Info>
              <Flex>
                <Details>
                  <Icon src={Location} />
                  <Title>Address</Title>
                  <Body>Kamkole, Sadasivpet, Hyderabad, Telangana, 502345</Body>
                </Details>
                <Details>
                  <Icon src={Phone} />
                  <Title>Phone</Title>
                  <Body>99630-36708</Body>
                </Details>
              </Flex>
              <Flex>
                <Details>
                  <Icon src={Envelope} />
                  <Title>E-mail</Title>
                  <Body>fanatickalakaar@gmail.com</Body>
                </Details>
                <Details>
                  <Icon src={Thumb} />
                  <Title>Social Media</Title>
                  <Body>
                    <Icon src={Instagram} />
                  </Body>
                </Details>
              </Flex>
            </Info>
          </Map>
        </ContactForm>
      </Container>
      <Footer />
    </>
  );
};

const Container = styled.div`
  width: 90%;
  margin: 2rem auto;
`;

const Heading = styled.p`
  font-size: 40px;
  font-weight: 500;
  line-height: 60px;
  letter-spacing: 0em;
  color: #54afbc;
  margin: 0;
`;
const Para = styled.p`
  font-size: 24px;
  font-weight: 500;
  margin: 0;
  line-height: 36px;
  color: #636363;
`;

const ContactForm = styled.div`
  display: flex;
  margin: 2rem 0;

  @media screen and (max-width: 850px) {
    flex-direction: column;
  }
`;
const Form = styled.div`
  background: #ffd8cf;
  flex: 50%;
  border: 2px solid #000;
  padding: 4rem 2rem;
`;
const Map = styled.div`
  background: #c8eaef;
  border: 2px solid #000000;
  flex: 50%;
`;

const InputLabel = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  margin: 0;
  align-self: baseline;
  color: #000;
`;
const Input = styled.input`
  background: #ffffff;
  border: 1px solid #000000;
  border-radius: 7px;
  outline: none;
  font-weight: 400;
  font-size: 18px;
  padding: 0.3rem 1rem;
  line-height: 27px;
  margin: 0.3rem auto 1rem;
  width: 95%;
  color: #636363;
`;

const TextArea = styled.textarea`
  background: #ffffff;
  border: 1px solid #000000;
  border-radius: 7px;
  outline: none;
  font-weight: 400;
  font-size: 18px;
  padding: 0.3rem 1rem;
  line-height: 27px;
  margin: 0.3rem auto 1rem;
  width: 95%;
  color: #636363;
  resize: none;
`;

const SubmitBtn = styled.button`
  background: #ffc066;
  border: 3px solid #1c1b1b;
  border-radius: 12px;
  padding: 0.4rem 1.4rem;
  font-weight: 500;
  margin-top: 1rem;
  font-size: 18px;
  line-height: 27px;
  color: #1c1b1b;
  cursor: pointer;
`;

const Iframe = styled.iframe`
  border: 0;
  border-bottom: 2px solid #000;
  width: 100%;
  height: 320px;
`;

const Info = styled.div`
  width: 80%;
  margin: 1rem auto;
`;

const Flex = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 4rem;
  margin-bottom: 1.3rem;

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    row-gap: 1.3rem;
  }
`;
const Details = styled.div``;
const Title = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 27px;
  margin: 0.4rem 0;
  letter-spacing: 0em;
  color: #000;
`;
const Body = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  color: #636363;
  letter-spacing: 0em;
  margin: 0;
`;
const Icon = styled.img``;

export default Contact;
