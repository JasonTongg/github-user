import React from 'react';
import {Container} from './Style';
import {AiOutlineSearch} from 'react-icons/ai';

export default function Index() {
  return (
    <Container>
      <form>
        <AiOutlineSearch></AiOutlineSearch>
        <input type="text" placeholder="Enter Github User" />
        <button>Search</button>
      </form>
      <p>Request : 60 / 60</p>
    </Container>
  );
}
