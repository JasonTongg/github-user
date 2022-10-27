import React from 'react';
import {Container} from './Style';
import {AiOutlineSearch} from 'react-icons/ai';
import {useRef} from 'react';
import {getUserList} from '../../Redux/Action';
import {useDispatch} from 'react-redux';

export default function Index() {
  let searchValue = useRef();
  let dispatch = useDispatch();

  let getData = async (user) => {
    let rawData = await window.fetch(`https://api.github.com/users/${user}`);
    let data = await rawData.json();
    dispatch(getUserList(data));
  };

  let submitHandle = (e) => {
    e.preventDefault();
    getData(searchValue.current.value);
  };

  return (
    <Container>
      <form onSubmit={submitHandle}>
        <AiOutlineSearch></AiOutlineSearch>
        <input type="text" placeholder="Enter Github User" ref={searchValue} />
        <button onClick={submitHandle}>Search</button>
      </form>
      <p>Request : 60 / 60</p>
    </Container>
  );
}
