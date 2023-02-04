import './Home.css';
import React from 'react';

import islandPic from '../img/island1.png'
import islandPic2 from '../img/island1.png'
import islandPic3 from '../img/island1.png'
import islandPic4 from '../img/island1.png'
//import styled from "styled-components";


// const img1 = document.querySelector("img"); 
// img1.src = {islandPic};

// const img2 = document.querySelector("img");
// img2.src = {islandPic2}

// const img3 = document.querySelector("img");
// img3.src = {islandPic3}

// const img4 = document.querySelector("img");
// img4.src = {islandPic4}
// function islandCollision(boxA, boxB) {
//   if (boxA.x + boxA.width >= boxB.x && boxA.x <= boxB.x + boxB.width) {
//     return true;
//   }

// }

//   // Create the collision system
// const system = new Collisions();
// const island1 = require('../img/island1.png');

// // Create a Result object for collecting information about the collisions
// const result = system.createResult();

// // Create the player (represented by a Circle)
// const player = system.createCircle(island1.x, island1.y, island1.radius);

// // Create some walls (represented by Polygons)
// const wall1 = system.createPolygon(island1.x, island1.y, [[-60, -20], [60, -20], [60, 20], [-60, 20]], 1.7);
// const wall2 = system.createPolygon(island1.x, island1.y, [[-60, -20], [60, -20], [60, 20], [-60, 20]], 2.2);
// const wall3 = system.createPolygon(island1.x, island1.y, [[-60, -20], [60, -20], [60, 20], [-60, 20]], 0.7);

// // Update the collision system
// system.update();

// // Get any potential collisions (this quickly rules out walls that have no chance of colliding with the player)
// const potentials = player.potentials();

// // Loop through the potential wall collisions
// for(const wall of potentials) {
//     // Test if the player collides with the wall
//     if(player.collides(wall, result)) {
//         // Push the player out of the wall
//         player.x -= result.overlap * result.overlap_x;
//         player.y -= result.overlap * result.overlap_y;
//     }
// }





function Home() {
  return (
    <div className="Home">
      <div className='islandContainer'>
        <div className="islandImg x1">
          <a href="https://reactjs.org" target="_blank" rel="noreferrer">
            <img className="island" src={islandPic} />
          </a>
        </div>

        <div className="x2">
          <a href="https://reactjs.org" target="_blank" rel="noreferrer">
            <img className="island" src={islandPic2} />
          </a>
        </div>

        <div class="x3">
          <a href="https://reactjs.org" target="_blank" rel="noreferrer">
            <img className="island" src={islandPic3} />
          </a>
        </div>

        <div class="x4">
          <a href="https://reactjs.org" target="_blank" rel="noreferrer">
            <img className="island" src={islandPic4} />
          </a>
        </div>

      </div>

      <div className='buttonContainer'>
        <button className="button" onClick={() => alert("hello")}> + </button>
      </div>

    </div>
  );
}


export default Home;
