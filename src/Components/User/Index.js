import React from 'react';
import {Container, Profile, Address} from './Style';
import {useSelector} from 'react-redux';
import {BiBuildings} from 'react-icons/bi';
import {HiLocationMarker} from 'react-icons/hi';
import {BsLink} from 'react-icons/bs';

export default function Index() {
  let userData = useSelector((state) => state.items.list);

  if (userData) {
    return (
      <Container>
        <Profile>
          <img src={userData.avatar_url} alt="Profile" />
          <div>
            <p>{userData.name || userData.login}</p>
            <p>@{userData.twitter_username || 'Dont have twitter account'}</p>
          </div>
          <a href={userData.html_url}>Follow</a>
        </Profile>
        <p className="bio">{userData.bio || 'Dont have bio'}</p>
        <Address>
          <p>
            <BiBuildings />
            {userData.company || 'Anonymous Company'}
          </p>
          <p>
            <HiLocationMarker />
            {userData.location || 'Secret Location'}
          </p>
          <p>
            <BsLink />
            {userData.email || 'Dont have Email'}
          </p>
        </Address>
      </Container>
    );
  } else {
    return null;
  }
}
