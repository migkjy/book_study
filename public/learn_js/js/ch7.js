const name = 1;
console.log(name);

let var1;
// const var2;
console.log(var1);
// console.log(var2);
// console.log(undefinedVar);

// x;    //let 으로 선언전에 먼전 사용 불가
// let x = 3;

if (x !== 3) {
  console.log(y);
  var y = 5;
  if (y === 5) {
    var x = 3;
  }
  console.log(y);
}
if (x === 3) {
  console.log(y);
}

var x2 = 3;
if (x2 === 3) {
  var x2 = 2;
  console.log(x2);
}
console.log(x2);

f();
function f() {
  // f() is hoisted
  console.log('f');
}

if (typeof x3 === 'undefined') {
  console.log("x3 doesn't exist or is undefined");
} else {
  // x3 is ok to use
}
// let x3 = 5; // x3 정의시 위 if문 사용 불가

(function () {
  // 'use strict';  // no-need라고 하네
  console.log('strict이고 동작함');
  // 코드를 이곳에 작성
  // 이 코드는 strict 모드로 동작
  // 이 단락 외에서는 상관이 없음
}());
