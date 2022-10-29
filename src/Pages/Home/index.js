import React from 'react';
import {Container, Content, UserInfoContainer} from './style';
import Navbar from '../../Components/Navbar';
import SearchBar from '../../Components/SearchBar';
import Info from '../../Components/Info';
import User from '../../Components/User';
import Followers from '../../Components/Followers';
import Chart from '../../Components/Chart';

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
