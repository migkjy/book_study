const arr1 = [1, 2, 3];
const arr2 = ['one', 2, 'three'];
// const arr3 = [[1, 2, 3], ['one', 2, 'three']];
const arr4 = [
  {
    name: 'Fred',
    type: 'object',
    luckyNumber: [5, 7, 13],
  },
  [
    {
      name: 'Susan',
      type: 'object',
    },
    {
      name: 'Anthony',
      type: 'object',
    },
  ],
  1,
  function () { return 'arrays can contain functions too'; },
  'three',
];

// qo배열 요소에 접근하기
console.log(arr1[0]);
console.log(arr2[2]);
console.log(arr4[1][0]);
console.log(arr2[10]);
console.log(arr2.length);

// const arr5 = new Array();
// const arr6 = new Array(1, 2, 3);
// const arr7 = new Array(2);
// const arr8 = new Array('2');

let arr = ['b', 'c', 'd'];
arr.push('e');
console.log(arr);
console.log(arr.pop()); // e
console.log(arr); // b, c, d
arr.unshift('a');
console.log(arr);
console.log(arr.shift());
console.log(arr);

let arr6 = [1, 2, 3];
console.log(arr6.concat([4, 5, 6])); // arr6는 바뀌지 않음
console.log(arr6); // arr6는 바뀌지 않음
console.log(arr6.slice(2, 4));

arr6 = [1, 5, 7];
arr6.splice(1, 0, 2, 34); // 동시에 넣고 빼기, 첫번째에서 0개를 빼고, 뒤에 배열 [2,34] 넣기, return값은 없네
console.log('이거인데: ', arr6); // 동시에 넣고 빼기, 첫번째에서 0개를 빼고, 뒤에 배열 [2,34] 넣기

arr = new Array(5).fill(1); // [1,1,1,1,1]
arr.fill('a'); // ['a','a','a','a','a']
arr.fill('b', 1); // ['a','b','b','b','b'], 1번째 배열부터 'b' 로 변경
arr.fill('c', 2, 4); // 2-4번째를 'c'로 변경
console.log(arr);

arr.reverse(); // 역순
arr.sort(); // 정렬

arr = [
  { name: 'Suzanne' },
  { name: 'Jim' },
  { name: 'Trevor' },
  { name: 'Amanda' },
];

arr.sort(); // 변경안됨
arr.sort((a, b) => a.name > b.name);
console.log(arr);
arr.sort((a, b) => a.name[3] < b.name[3]); // name property의 4번째 글자의 역순 정렬

console.log(arr.find(o => o.name === 'Jim')); // find는 함수를 넣어야 하네

class Person {
  constructor(name) {
    this.name = name;
    // this.id = Person.nextId++;
    this.id = Person.nextId;
    Person.nextId += 1;
  }
}
Person.nextId = 0;
const jamie = new Person('Jamie'),
  juliet = new Person('Juliet'),
  peter = new Person('Peter'),
  jay = new Person('Jay');
arr = [jamie, juliet, peter, jay];

// ID를 직접비교
console.log(jay.name);
console.log(arr.find(p => p.id === juliet.id));

arr = [5, 7, 12, 15, 17];
arr.some(x => x % 2 === 0); // 결과가 있으면 바로 true 반환, 없으면 false;
arr.some(x => Number.isInteger(Math.sqrt(x)));
arr.every(x => x % 2 === 0); // 전부 맞아야 true;

const cart = [
  { name: 'Widget', price: 9.95 },
  { name: 'Gadget', price: 22.95 },
];
const names = cart.map(x => x.name); // map은 배열을 자유롭게 조작해준다, 원본은 변경하지 않음. 사본반환..
let prices = cart.map(x => x.price);
const discountPrices = prices.map(x => x * 0.8);
console.log(names, '/', prices, '/', discountPrices);
const items = ['Widget', 'Gadget'];
prices = [10, 20];
const newCart = items.map((x, i) => ({ name: x, prices: prices[i] })); // ()을 사용해야 {}가 블록처리 안된다.
console.log(newCart);

const cards = [];
// for (const suit of ['H', 'C', 'D', 'S']) {  of 안에 for를 쓰지 말라네
//   for (let value = 1; value <= 13; value += 1) {
//     cards.push({ suit, value });
//   }
// }
// console.log(cards);

let suits = ['H', 'C', 'D', 'S'];
suits.forEach((suit) => {
  for (let value = 1; value <= 13; value += 1) {
    cards.push({ suit, value });
  }
});

console.log(cards.filter(c => c.value === 2));
cards.filter(c => c.value > 10); // cards 자체는 안바뀜. 해당하는 내역만 보내줌

function cardToString(c) {
  suits = {
    H: '\u2665', C: '\u2663', D: '\u2666', S: '\u2660',
  };
  const values = {
    1: 'A', 11: 'J', 12: 'Q', 13: 'K',
  };
  for (let i = 2; i <= 10; i++) { values[i] = i; }
  return values[c.value] + suits[c.suit];
}

console.log(cards.filter(c => c.value === 2).map(cardToString));
