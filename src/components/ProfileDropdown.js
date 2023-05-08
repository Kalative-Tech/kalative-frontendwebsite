import React, { useState } from "react";
import styled from "styled-components";
import Profile from "../icons/profile.svg";
import Dropdownicon from "../icons/dropdown.svg";

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <Flex onClick={() => setIsOpen(!isOpen)}>
        <ProfileIcon src={Profile} />
        <Dropdown
          src={Dropdownicon}
          style={{ transform: isOpen ? "rotate(180deg)" : "" }}
        />
      </Flex>
      <DropdownContainer
        className={"animate__animated animate__fadeIn"}
        style={{ display: isOpen ? "flex" : "none" }}
      >
        <Item>
          <p>Profile</p>
        </Item>
        <Item>
          <p>Contact Us</p>
        </Item>
        <Button>Log Out</Button>
      </DropdownContainer>
    </Container>
  );
};

const Container = styled.div``;
const Flex = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  gap: 0.6rem;
`;
const ProfileIcon = styled.img``;
const Dropdown = styled.img`
  transition: 0.2s ease;
`;

const DropdownContainer = styled.div`
  position: absolute;
  background: #ffffff;
  border: 2px solid #000000;
  border-radius: 16px;
  margin-top: 1rem;
  flex-direction: column;
`;
const Item = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  border: 0;
  text-align: center;
  padding: 0.5rem;
  border-bottom: 2px solid #000000;

  p {
    margin: 0;
  }
`;
const Button = styled.button`
  background: #ffc066;
  border: 3px solid #1c1b1b;
  border-radius: 12px;
  padding: 0.4rem 1.4rem;
  font-weight: 500;
  margin-top: 1rem;
  font-size: 18px;
  align-self: center;
  line-height: 27px;
  background-color: #ff866a;
  margin: 0.5rem;
  cursor: pointer;
`;

export default ProfileDropdown;
