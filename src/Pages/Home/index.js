import React from 'react';
import {Container, Content} from './style';
import Navbar from '../../Components/Navbar';
import SearchBar from '../../Components/SearchBar';
import Info from '../../Components/Info';

export default function Home() {
  return (
    <Container>
      <Navbar />
      <Content>
        <SearchBar />
        <Info />
      </Content>
    </Container>
  );
}
