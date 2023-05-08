import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styled from "styled-components";
import Edit from "../icons/edit_icon.svg";

const Profile = () => {
  const [editMode, setEditMode] = useState(false);
  return (
    <>
      <Navbar />
      <Header>
        <Heading>Profile</Heading>
        <EditIcon
          src={Edit}
          style={{ opacity: editMode ? "0.3" : "1" }}
          onClick={() => setEditMode(true)}
        />
      </Header>
      <FormContainer>
        <Form>
          <Left>
            <InputLabel>Full Name*</InputLabel>
            <Input
              placeholder="Full Name"
              required
              disabled={editMode ? false : true}
            />
            <InputLabel>Mobile Number*</InputLabel>
            <Input
              placeholder="Mobile number"
              required
              disabled={editMode ? false : true}
            />
            <InputLabel>City*</InputLabel>
            <Input required disabled={editMode ? false : true} />
          </Left>
          <Right>
            <InputLabel>User Name*</InputLabel>
            <Input
              placeholder="User Name"
              required
              disabled={editMode ? false : true}
            />
            <InputLabel>Email*</InputLabel>
            <Input
              placeholder="abcd@gmail.com"
              required
              disabled={editMode ? false : true}
            />
            <InputLabel>School*</InputLabel>
            <Input required disabled={editMode ? false : true} />
          </Right>
        </Form>
        {editMode && (
          <SubmitBtn onClick={() => setEditMode(false)}>Save Changes</SubmitBtn>
        )}
      </FormContainer>
      <Footer />
    </>
  );
};

const Header = styled.div`
  display: flex;
  width: 80%;
  gap: 2rem;
  align-items: center;
  margin: auto;
`;
const Heading = styled.p`
  color: #fe5c36;
  font-size: 40px;
  font-weight: 500;
  line-height: 60px;
  margin: 2rem 0;
  letter-spacing: 0em;
`;
const EditIcon = styled.img`
  cursor: pointer;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Form = styled.div`
  display: flex;
  background: #ffe1b6;
  justify-content: space-around;
  /* width: 100%; */
  padding: 1rem 2rem;
  margin-bottom: 2rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
const Left = styled.div``;
const Right = styled.div``;

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
  max-width: 500px;
  min-width: 300px;
  color: #636363;

  :disabled {
    cursor: not-allowed;
  }

  @media screen and (min-width: 1150px) {
    width: 500px;
  }
`;

const SubmitBtn = styled.button`
  background: #ffc066;
  border: 3px solid #1c1b1b;
  border-radius: 12px;
  padding: 0.4rem 1.4rem;
  font-weight: 500;
  margin-top: 1rem;
  font-size: 18px;
  align-self: center;
  line-height: 27px;
  color: #1c1b1b;
  margin: 2rem 0;
  cursor: pointer;
`;

export default Profile;
