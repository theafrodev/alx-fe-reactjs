import React, {useState} from 'react';
import Search from './Search';
import { fetchUserData } from '../services/githubService';

function HomePage() {

  return(
    <Search/>
  );
}

export default HomePage
