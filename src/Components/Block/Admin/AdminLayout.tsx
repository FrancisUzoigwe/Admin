// import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sider from './Sider'
import styled from "styled-components"

const AdminLayout = () => {
  return (
    <Main>
      <Sider/>
      <Container>
        <Header/>
        <Outlet/>
      </Container>
    </Main>
  )
}

export default AdminLayout

const Container = styled.div`
display: flex;
flex-direction: column;
width:90%;
`;


const Main = styled.div`
width: 100%;
display: flex;
`;
