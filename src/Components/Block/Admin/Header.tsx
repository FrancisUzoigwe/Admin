import React from "react";
import styled from "styled-components";
import { IoMdNotifications } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import {} from "react-icons/io";
import {RiArrowDropDownFill} from "react-icons/ri"
// import { useState } from "react";
import flower from "../../../Assets/flower.jpg"





const Header = () => {
  return (
    <div>
      <Container>
        <Logo>Francis</Logo>
        <SearchHold>
          <SearchIcon />
          <Search placeholder="Search" />
        </SearchHold>

        <Profile>
          <Not />
          <NameHold>
            <Image src= {flower}/>
            <Names>
            <Name>Francis</Name>
            <Pos>Admin</Pos>
            </Names>
            <IconHold>
            </IconHold>
          </NameHold>
        </Profile>
      </Container>
    </div>
  );
};

export default Header;

const Logo = styled.div`
  font-family: poppins;
  font-weight: 800;
  font-size: 18px;
`;

const SearchHold = styled.div`
  width: 130px;
  height: 30px;
  display: flex;
  justify-content: space-between;
  background-color: white;
  align-items: center;
  border-radius: 20px;
`;

const SearchIcon = styled(FiSearch)`
  font-size: 20px;
`;

const Search = styled.input`
  width: 105px;
  height: 23px;
  background-color: white;
  border-radius: 20px;
  border: none;
`;

const Not = styled(IoMdNotifications)`
  color: black;
  font-size: 25px;
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
  background-color: white;
  border-radius: 50%;
  object-fit: cover;
`;

const Names = styled.div`
  font-family: poppins;
  display: flex;
  flex-direction: column;
  margin: 2px;
`;

const Name = styled.div`
  font-family: poppins;
  font-weight: 900;
  margin: 0 10px;
`;

const Pos = styled.div`
  font-family: poppins;
  font-size: 12px;
  margin: 0 10px;
  color: #2f2f2f;
`;


const IconHold = styled(RiArrowDropDownFill)`
font-size: 30px;
transition: all 450ms;

:hover{
    transform: scale(1.05);
    color: #595959;
}
`;


const NameHold = styled.div`
display: flex;
`;

const Profile = styled.div`
  display: flex;
  width: 20%;
  background-color: #D6D6D6;
  justify-content: space-evenly;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  height: 60px;
  background-color: #D6D6D6;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
