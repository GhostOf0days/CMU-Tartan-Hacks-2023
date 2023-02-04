import * as React from 'react';

import islandPic from '../img/island1.png'
import islandPic2 from '../img/island1.png'
import islandPic3 from '../img/island1.png'
import islandPic4 from '../img/island1.png'


  function Home() {

    return (
    <div className = "Home">


        island1
        <br />
        <br />
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={islandPic} width = {250} height = {250}></img>
        </a>

        Island 2
        <br />
        <br />
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={islandPic2} width = {250} height = {250}></img>
        </a>

        Island 3
        <br />
        <br />
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={islandPic3} width = {250} height = {250}></img>
        </a>

       Island 4
        <br />
        <br />
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={islandPic4} width = {250} height = {250}></img>
        </a>

        
        



      </div>
    );
  }

  
export default Home;
