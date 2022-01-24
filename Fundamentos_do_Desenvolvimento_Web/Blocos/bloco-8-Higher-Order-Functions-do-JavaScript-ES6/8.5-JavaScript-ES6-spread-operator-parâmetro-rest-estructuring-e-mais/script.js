const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

rectangles.forEach((rectangle) => {
  rectangleArea(...rectangles)
  console.log(rectangle[0] * rectangle[1]);
});
console.log("------------------------------------------------------------------");

// escreva sum abaixo
const sum = (...params) => params.reduce((acc, crr) => acc += crr, 0);
console.log(sum(3,2,5,8,4,6,7,5,5));
console.log("------------------------------------------------------------------");
