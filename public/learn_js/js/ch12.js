// values()가 호환이 잘 안된데.. Array.prototype.values()
const book = [
  'Twinkle, twinkle, little bat!',
  "How I wonder what you're at!",
  'Up above the world you fly,',
  'Like a tea tray in the sky.',
  'Twinkle, twinkle, little bat!',
  "How I wonder what you're at!",
];

// const it = book.values();
// console.log(it.next());

// value가 안먹혀서 이렇게 변경해봄
console.log(book.keys());
let it = book.keys();
let current = it.next();
while (!current.done) { // done이라는 property가 있네
  console.log(book[current.value]); // key값은 순서고, 결국 value에 index가 들어가있네. array index의 index 형태
  current = it.next();
}

// key와 map을 조합.. 근데 vals가 next가 안먹히네
const vals = Object.keys(book).map(key => book[key]);
vals.forEach((val) => { console.log('/', val); });
// for (val of vals) {
//   console.log(`// ${val}`);
// }


// current = vals.next();
// while (!current.done) {
//   console.log(current.value);
//   current = vals.next();
// }

class Log {
  constructor() {
    this.messages = [];
  }
  add(message) {
    this.messages.push({ message, timestamp: Date.now() });
  }
  [Symbol.iterator]() {
    // console.log('Object.keys: ', Object.keys(this.messages));
    return Object.keys(this.messages).map(key => this.messages[key]);
  }
}

const log = new Log();
log.add('first day at sea');
log.add('second day spotted whale');

// values()가 안써지니 힘드네
// for (const entry in log) {
//   console.log(`${entry.message} @ ${entry.timestamp}`);
// }

function* rainbow() { // the asterisk marks this as a generator
  yield 'red';
  yield 'orange';
  yield 'yellow';
  yield 'green';
  yield 'blue';
  yield 'indigo';
  yield 'violet';
}

it = rainbow();
it.next(); // { value: "red", done: false }
it.next(); // { value: "orange", done: false }
it.next(); // { value: "yellow", done: false }
it.next(); // { value: "green", done: false }
it.next(); // { value: "blue", done: false }
it.next(); // { value: "indigo", done: false }
console.log(it.next()); // { value: "violet", done: false }
console.log(it.next()); // { value: undefined, done: true }

for (const color of rainbow()) {
  console.log(color);
}

// rainbow().forEach((color, index) => {
//   console.log(color);
// });

function* interrogate() {
  const name = yield 'What is your name?';
  const color = yield 'What is your favorite color?';
  return `${name}'s favorite color is ${color}.`;
}

it = interrogate();
console.log(it.next()); // { value: "What is your name?", done: false }
console.log(it.next('Ethan')); // { value: "What is your favorite color?", done: false }
console.log(it.next('orange')); // { value: "Ethan's favorite color is orange.", done: true }
