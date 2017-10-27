function printLeapYearStatus() {
  const year = new Date().getFullYear();
  if (year % 4 !== 0) console.log(`${year} is NOT a leap year.`);
  else if (year % 100 !== 0) console.log(`${year} IS a lear year`);
  else if (year % 400 !== 0) console.log(`${year} is NOT a leap year.`);
  else console.log(`${year} IS a leap year`);
}

// change function to return result
function isCurrentYearLeapYear() {
  const year = new Date().getFullYear();
  if (year % 4 !== 0) return false;
  else if (year % 100 !== 0) return true;
  else if (year % 400 !== 0) return false;
  return true;
}

// change function to return same result always
function isLeapYear(year) {
  if (year % 4 !== 0) return false;
  else if (year % 100 !== 0) return true;
  else if (year % 400 !== 0) return false;
  return true;
}

const daysInMonth = [
  31, (isCurrentYearLeapYear() ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31,
];

// const colors = [
//   'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet',
// ];
// let colorIndex = -1;
// function getNextRainbowColor1() {
//   if (colorIndex + 1 >= colors.length) colorIndex = 0;
//   return colors[colorIndex];
// }

const getNextRainbowColor = (function () {
  const colors = [
    'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet',
  ];
  let colorIndex = -1;
  return function () {
    if (colorIndex + 1 >= colors.length) colorIndex = 0;
    return colors[colorIndex];
  };
});

function getRainbowIterator() {
  const colors = [
    'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet',
  ];
  let colorIndex = -1;
  return {
    next() {
      if (colorIndex + 1 >= colors.length) colorIndex = 0;
      return { value: colors[colorIndex], done: false };
    },
  };
}

const rainbowIterator = getRainbowIterator();
setInterval(() => {
//   document.querySelector('.rainbow').style['background-color'] = rainbowIterator.next().value;
}, 500);

// setTimeout 사용법
// setTimeout(() => {
//   console.log('hello');
// }, 1500);

// 아래함수는 작동이 제대로 안됨. 비동기적 실행..
// let i;
// for (i = 5; i > 0; i -= 1) {
//   setTimeout(() => {
//     console.log(i === 0 ? 'go!' : i);
//   }, (5 - i) * 1000);
// }

let i;
function loopBody(i) {
  setTimeout(() => {
    console.log(i === 0 ? 'go!' : i);
  }, (5 - i) * 1000);
}
for (i = 5; i >= 0; i -= 1) {
  loopBody(i);
}

// 위를 아래와 같이 수정, for 내부에서 function을 5번 호출
for (i = 5; i >= 0; i -= 1) {
  (function (i) {
    setTimeout(() => {
      console.log(i === 0 ? 'go!' : i);
    }, (5 - i) * 1000);
  }(i));
}

// 블록 스코프 변수를 사용하면 매우 단순화 가능, let이 이를 만든다
for (let i2 = 5; i2 >= 0; i2 -= 1) {
  setTimeout(() => {
    console.log(i2 === 0 ? 'go!' : i2);
  }, (5 - i2) * 1000);
}

// require가 안된다네;;
// const Money = require('math-money');

// const oneDolor = Money.Dollor(1);
// const twoDolor = Money.Dollor(2);

// 배열내 함수
const sin = Math.sin;
const cos = Math.cos;
const theta = Math.PI / 4;
const zoom = 2;
const offset = [1, -3];
const pipeline = [
  function rotate(p) {
    return {
      x: p.x * cos(theta) - p.y * sin(theta),
      y: p.x * sin(theta) + p.y * cos(theta),
    };
  },
  function scale(p) {
    return { x: p.x * zoom, y: p.y * zoom };
  },
  function translate(p) {
    return { x: p.x + offset[0], y: p.y + offset[1] };
  },
];
// pipeline is now an array of functions for a specific 2D transform
// we can now transform a point:
const p = { x: 1, y: 1 };
let p2 = p;
for (let i = 0; i < pipeline.length; i++) {
  p2 = pipeline[i](p2);
}
// p2 is now p1 rotated 45 degrees (pi/4 radians) around the origin,
// moved 2 units farther from the origin, and translated 1 unit to the
// right and 3 units down

function sum(arr, f) {
  if (typeof f !== 'function') f = x => x;
  return arr.reduce((a, x) => a += f(x), 0);
}
console.log(sum([1, 2, 3])); // returns 6
console.log(sum([1, 2, 3], x => x * x)); // returns 14
console.log(sum([1, 2, 3], x => x ** 3)); // Math.pow(x, 3) returns 36

function findNeedle(haystack) {
  if (haystack.length === 0) return console.log('no haystack here!');
  //   if (haystack.shift() !== 'needle') return console.log('still looking!');
  //   이건 안됨.. return 한번으로 재귀가 모두 끝난다
  if (haystack.shift() === 'needle') return console.log('found it!');
  return findNeedle(haystack); // haystack has one fewer element
}
findNeedle(['hay', 'hay', 'hay', 'hay', 'needle', 'hay', 'hay']);
