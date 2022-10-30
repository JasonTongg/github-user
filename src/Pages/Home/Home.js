import React from 'react';
import {Container, Content, UserInfoContainer} from './style';
import Navbar from '../../Components/Navbar/Navbar.js';
import SearchBar from '../../Components/SearchBar/SearchBar.js';
import Info from '../../Components/Info/Info.js';
import User from '../../Components/User/User.js';
import Followers from '../../Components/Followers/Followers.js';
import Chart from '../../Components/Chart/Chart.js';

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
