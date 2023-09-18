"use strict";
/*
Surface Area of Cube, A = 6 * (s*s) or A = 6 * (s**2)
Volume of a cube, V = s**3 or V = s**3 
*/

//Surface Area of Cube, A = 6 * (s*s) or A = 6 * (s**2)

const cubeSideLength = Number(
  prompt(
    "To find the Surface Area of Cube, A, enter the length side of the cube, s"
  )
);
const cubeSurfaceArea = 6 * cubeSideLength ** 2;
console.log(
  `Surface Area of Cube, A, with ${cubeSideLength} length of side, s, is ${cubeSurfaceArea}`
);

//Volume of a cube, V = s**3 or V = s**3

const cubeVolume = cubeSideLength ** 3;

console.log(
  `Volume of a Cube with ${cubeSideLength} length of side,s, is ${cubeVolume}`
);
