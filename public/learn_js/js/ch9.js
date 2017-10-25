const SYM = Symbol('설명이 필요해?');
console.log(SYM);
let o = {
  a: 1, b: 2, c: 3, [SYM]: 4,
};

for (const prop in o) { // 이건 for in 대신에 foreEach를 쓰고
//   if (!o.hasOwnProperty(prop)) continue;  // Object.. call 을 써서 갖다써라
  if (!Object.prototype.hasOwnProperty.call(o, prop)) continue;
  console.log(`${prop}: ${o[prop]}`);
}


// 이래서 아래는 hasOwnProperty가 필요없는건가?
Object.keys(o).forEach((prop) => {
//   if (!o.hasOwnProperty(prop)) continue;
  console.log(`${prop}: ${o[prop]}`);
});

// o = [1, 2, 3, 4, 5];  // 그냥 배열은 바로 forEach를 쓸 수 있다
// o.forEach((a, b, c) => {
//   console.log(a);
//   console.log(b);
//   console.log(c);
// });

o = {
  apple: 1, xochitl: 2, ballon: 3, guitar: 4, wylophone: 5,
};

// match는 먼가
Object.keys(o).filter(prop => prop.match(/^x/)).forEach(prop => console.log(`${prop}: ${o[prop]}`));

const Car = (function () {
  // weakMap은 머?
  const carProps = new WeakMap();

  class Car {
    constructor(make, model) {
      this.make = make;
      this.model = model;
      this._userGears = ['P', 'N', 'R', 'D'];
      this._userGear = this._userGears[0];
    }
    get userGear() { return carProps.get(this).userGear; }
    set userGear(value) {
      if (this._userGear.indexOf(value) < 0) { throw new Error(`Invalid gear: ${value}`); }
      carProps.get(this).userGear = value;
    }
    shift(gear) { this.userGear = gear; }
  }
  return Car;
}());

const car1 = new Car();
const car2 = new Car();
// car1.shift('D');
console.log(car1, car2);

class Vehicle {
  constructor() {
    this.passengers = [];
    console.log('Vehicle created');
  }
  addPassenger(p) {
    this.passengers.push(p);
  }
}

class NewCar extends Vehicle {
  constructor() {
    super();
    console.log('Car created');
  }
  deployAirbags() {
    console.log('BBang~');
  }
}

const v = new Vehicle();
const c = new NewCar();
v.addPassenger('Frank');
v.addPassenger('Judy');
console.log(v.passengers);
c.addPassenger('Alice');
c.addPassenger('Cameron');
console.log(c.passengers);
// v.deployAirbags(); //접근불가
c.deployAirbags();

console.log(c instanceof NewCar);
console.log(v instanceof Vehicle);

class Super {
  constructor() {
    this.name = 'Super';
    this.isSuper = true;
  }
}

Super.prototype.sneaky = 'not recommended';

class Sub extends Super {
  constructor() {
    super();
    this.name = 'Sub';
    this.isSub = true;
  }
}

const obj = new Sub();
// for (const p in obj) {
//   console.log(`${p}: ${obj[p]} ${
//     obj.hasOwnProperty(p) ? '' : '(inherited)'}`);
// }

// Object.key().forEach()를 쓰도록 하자
Object.keys(obj).forEach((p) => {
  console.log(`${p}: ${obj[p]} ${Object.prototype.hasOwnProperty.call(obj, p) ? '' : '(inherited)'}`);
});

class InsurancePolicy {}
function makeInsurable(o) {
  o.addInsurancePolicy = function (p) { this.InsurancePolicy = p; };
  o.getInsurancePolicy = function () { return this.InsurancePolicy; };
  o.isInsured = function () { return !!this.InsurancePolicy; };
}

// makeInsurable(car1);
makeInsurable(Car.prototype);
car1.addInsurancePolicy(new InsurancePolicy());
console.log(car1);

const ADD_POLICY = Symbol('Add');
const GET_POLICY = Symbol('GET');
const IS_INSURED = Symbol('INSURED');
const _POLICY = Symbol('POLICY');

// function makeInsurable2(o) {
//   o[ADD_POLICY] = function (p) { this[_POLICY] = p; };
//   o[GET_POLICY] = function () { return this; };
//   o[IS_INSURED] = function () { return !!this[_POLICY]; };
// }
