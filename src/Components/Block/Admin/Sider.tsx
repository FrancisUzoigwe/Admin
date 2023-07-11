import React from "react";
import styled from "styled-components";
import {AiFillDashboard, AiFillHome, AiOutlineStock,} from "react-icons/ai"
import {MdTrackChanges, MdSecurity, MdLogout,} from "react-icons/md"
const Sider = () => {
  return (
    <Container>
      <Main>
        <Wrap>Francis</Wrap>
        <Wrapped>
        <Wrapper>
          <Img1/>
          <Text>DashBoard</Text>
        </Wrapper>
        <Wrapper>
          <Img2/>
          <Text>Home</Text>
        </Wrapper>
        <Wrapper>
          <Img3/>
          <Text>Promo</Text>
        </Wrapper>
        <Wrapper>
          <Img4/>
          <Text>Tracker</Text>
        </Wrapper>
        <Wrapper>
          <Img5/>
          <Text>Security</Text>
        </Wrapper>
        <Wrapper>
          <Img6/>
          <Text>Stock</Text>
        </Wrapper>
        </Wrapped>
        <Wrap>
          <Image/>
          Logout
        </Wrap>
      </Main>
    </Container>
  );
};

export default Sider;

const Image = styled(MdLogout)``;

const Wrapped = styled.div`
height: 350px;
display: flex;
flex-direction: column;
justify-content: center;
width: 130px;
`;

const Wrap = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 80px;
margin: 60px 0px;
transition: all 350ms;;

:hover{
transform: scale(1.20);
color: black;
cursor: pointer;
}
`;

const Img6 = styled(AiOutlineStock)`

`;
const Img5 = styled(MdSecurity)`

`;
const Img4 = styled(MdTrackChanges)`

`;
const Img3 = styled.div`

`;
const Img2 = styled(AiFillHome)`

`;
const Img1 = styled(AiFillDashboard)`
font-size: 18px;
`;

const Text = styled.div`

`;

const Wrapper = styled.div`
margin: 20px 0;
display: flex;
justify-content: space-evenly;
align-items: center;
height: 500px;
transition: all 650ms;

:hover{
  border-radius: 8px 0px 0px 8px;
  background-color: white;
  cursor: pointer;
  width: 140px;
  transform: scale(1.12);
  color: black;
  height: 10%;
}
`;

const Main = styled.div`
  width: 140px;
  height: 97%;
  background-color: purple;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  color: white;
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d6d6d6;
`;
