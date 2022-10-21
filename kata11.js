const PI = 3.14159 ;

const sphereVolume = function (radius) {
  let s = 4/3 * PI * Math.pow(radius, 3);
  return s;
}
console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function (radius, height) {
  let c = 1/3 * PI * Math.pow(radius, 2) * height;
  return c;
}
console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function (height, width, depth) {
  let p = height * width * depth;
  return p;
}
console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function (solids) {
  let t = 0;
  for (let solid of solids) {
    if (solid.type === 'sphere') {
      t += sphereVolume(solid.radius);
    } else if (solid.type === 'cone') {
      t += coneVolume(solid.radius, solid.height);
    } else if (solid.type === 'prism') {
      t += prismVolume(solid.height, solid.width, solid.depth);
    }
  }
  return t;
}

const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);