import React from 'react';
import {Container, Content, UserInfoContainer} from './style';
import Navbar from '../../Components/Navbar/index.js';
import SearchBar from '../../Components/SearchBar/index.js';
import Info from '../../Components/Info/index.js';
import User from '../../Components/User/index';
import Followers from '../../Components/Followers/index.js';
import Chart from '../../Components/Chart/index.js';

export default function Home() {
  return (
    <Container>
      <Navbar />
      <Content>
        <SearchBar />
        <Info />
        <UserInfoContainer>
          <User></User>
          <Followers></Followers>
        </UserInfoContainer>
        <Chart></Chart>
      </Content>
    </Container>
  );
}
