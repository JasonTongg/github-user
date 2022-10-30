import React, {useState} from 'react';
import {Container} from './Style';
import {AiOutlineSearch} from 'react-icons/ai';
import {useRef} from 'react';
import {getUserList} from '../../Redux/Action';
import {useDispatch} from 'react-redux';
import {useEffect} from 'react';

export default function SearchBar() {
  let searchValue = useRef();
  let dispatch = useDispatch();
  let [limit, setLimit] = useState(60);

  let getData = async (user) => {
    try {
      let rawData = await window.fetch(`https://api.github.com/users/${user}`);
      let data = await rawData.json();
      dispatch(getUserList(data));
    } catch (error) {
      console.log(error.message);
    }
  };

  let getRate = async () => {
    try {
      let rawData = await window.fetch('https://api.github.com/rate_limit');
      let data = await rawData.json();
      setLimit(data.rate.remaining);
    } catch (error) {}
  };

  let submitHandle = (e) => {
    e.preventDefault();
    getData(searchValue.current.value);
    getRate();
  };

  useEffect(() => {
    getRate();
  }, []);

  return (
    <Container>
      <form onSubmit={submitHandle}>
        <AiOutlineSearch></AiOutlineSearch>
        <input type="text" placeholder="Enter Github User" ref={searchValue} />
        <button onClick={submitHandle}>Search</button>
      </form>
      <p>Request : {limit} / 60</p>
    </Container>
  );
}
