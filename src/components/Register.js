import React, { useState } from "react";
import Back from "../icons/back_btn.svg";
import styled from "styled-components";

const Register = () => {
  const [form, setForm] = useState(0);

  const FormNum = [<Form1 setForm={setForm} />, <Form2 setForm={setForm} />];

  return (
    <RegisterContainer>
      <Left></Left>
      <Right>{FormNum[form]}</Right>
    </RegisterContainer>
  );
};

const Form1 = ({ setForm }) => {
  return (
    <Form>
      <Heading>Let us know some details about you</Heading>
      <InputLabel>Full Name*</InputLabel>
      <Input placeholder="First Name" required />
      <InputLabel>User Name*</InputLabel>
      <Input placeholder="User Name" required />
      <InputLabel>Mobile Number*</InputLabel>
      <Input placeholder="Mobile Number" required />
      <Button onClick={() => setForm((prev) => prev + 1)} type="submit">
        Next
      </Button>
    </Form>
  );
};

const Form2 = ({ setForm }) => {
  return (
    <Form>
      <BackButton src={Back} onClick={() => setForm((prev) => prev - 1)} />
      <InputLabel>Pick your city*</InputLabel>
      <Input placeholder="City" />
      <InputLabel>School Name*</InputLabel>
      <Input placeholder="School Name" />
      <Button>Next</Button>
    </Form>
  );
};

const RegisterContainer = styled.div`
  min-height: 450px;
  width: 100%;
  display: flex;
  width: 90%;
  margin: 4rem auto;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const Left = styled.div`
  background-color: #ffc066;
  flex: 50%;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const Right = styled.div`
  background: #ffffff;
  border: 1px solid #000000;
  flex: 50%;
  padding: 2rem 0;
`;
const Heading = styled.h1`
  font-weight: 500;
  font-size: 24px;
  color: #000;
  line-height: 36px;
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
  width: 90%;
  color: #636363;
`;

const Button = styled.button`
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 75%;
  margin: 0 auto;
`;

const BackButton = styled.img`
  cursor: pointer;
  align-self: flex-start;
  margin-bottom: 3rem;
`;

export default Register;
