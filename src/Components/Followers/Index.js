import React, {useState} from 'react';
import {Container, Item} from './Style';
import {useSelector} from 'react-redux';
import {useEffect} from 'react';
import {useCallback} from 'react';

export default function Index() {
  let userData = useSelector((state) => state.items.list);
  let [followers, setFollowers] = useState();

  let getData = useCallback(async () => {
    try {
      let rawData = await window.fetch(
        userData.followers_url + '?per_page=100'
      );
      let data = await rawData.json();
      setFollowers(data);
    } catch (error) {
      console.log(error.message);
    }
  }, [userData]);

  useEffect(() => {
    getData();
  }, [getData, userData]);

  if (followers) {
    return (
      <Container>
        {followers.map((item, idx) => (
          <Item key={idx}>
            <img src={item.avatar_url} alt="profile" />
            <div>
              <p>{item.login}</p>
              <a href={item.html_url}>{item.html_url}</a>
            </div>
          </Item>
        ))}
      </Container>
    );
  } else {
    return null;
  }
}
