import React from 'react';
import {Container, Item, Icon} from './Style';
import {useSelector} from 'react-redux';
import {VscRepo} from 'react-icons/vsc';
import {BsPeople, BsPersonPlus, BsCodeSquare} from 'react-icons/bs';
import {useEffect} from 'react';
import useState from 'react-usestateref';

export default function Info() {
  let getList = useSelector((state) => state.items.list);
  let [, setUser, userRef] = useState(getList);
  let [infoList, setInfoList] = useState([]);

  useEffect(() => {
    setUser(getList);
  }, [getList, setUser]);

  useEffect(() => {
    if (userRef.current) {
      setInfoList([
        {
          value: userRef.current.public_repos,
          text: 'Repos',
          icon: <VscRepo></VscRepo>,
          color: 'pink',
        },
        {
          value: userRef.current.followers,
          text: 'Followers',
          icon: <BsPeople></BsPeople>,
          color: 'blue',
        },
        {
          value: userRef.current.following,
          text: 'Following',
          icon: <BsPersonPlus></BsPersonPlus>,
          color: 'purple',
        },
        {
          value: userRef.current.public_gists,
          text: 'Gists',
          icon: <BsCodeSquare></BsCodeSquare>,
          color: 'yellow',
        },
      ]);
    }
  }, [userRef, getList]);

  if (infoList) {
    return (
      <Container>
        {infoList.map((item, index) => (
          <Item key={index}>
            <Icon className={item.color}>{item.icon}</Icon>
            <div className="text">
              <h2>{item.value}</h2>
              <p>{item.text}</p>
            </div>
          </Item>
        ))}
      </Container>
    );
  } else {
    return null;
  }
}
