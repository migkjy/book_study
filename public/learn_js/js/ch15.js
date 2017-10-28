let d = new Date();
console.log(d); // Fri Oct 27 2017 19:00:17 GMT+0900 (대한민국 표준시)
console.log(d.valueOf()); // 1509098417694

// to use in webbrowser, need script src moment.js, same to require.js
console.log(moment());

d = new Date(Date.UTC(2016, 4, 27));
d = moment.tz([2016, 3, 27, 9, 19], 'America/Los_Angeles').toDate();
const s = moment.tz([2016, 3, 27, 9, 19], 'Asia/Seoul').toDate();
console.log(d, s);

// JSON으로 stringify사용
const before = { d: new Date() }; // or new Date().valueOf()  -> Number
console.log(before.d instanceof Date);
const json = JSON.stringify(before);
const after = JSON.parse(json);
console.log(after.d instanceof Date); // false
console.log(typeof after.d); // string

after.d = new Date(after.d);
console.log(after.d instanceof Date); // true

d = new Date(Date.UTC(1930, 4, 10));
console.log(d.toLocaleDateString());
console.log(d.toLocaleTimeString());
console.log(d.toTimeString());
console.log(d.toUTCString());

moment(d).format('YYY-MM-DD');
moment(d).format('YYYY-MM-DD'); // "1930-05-09"
moment(d).format('YYYY-MM-DD HH:mm'); // "1930-05-09 17:00
moment(d).format('YYYY-MM-DD HH:mm Z'); // "1930-05-09 17:00 -07:00
moment(d).format('YYYY-MM-DD HH:mm [UTC]Z'); // "1930-05-09 17:00 UTC-07:00
moment(d).format('dddd, MMMM [the] Do, YYYY'); // "Friday, May the 9th, 1930"
moment(d).format('h:mm a'); // "5:00 pm"


d = new Date(Date.UTC(1815, 9, 10));
// these are the results someone would see in Los Angeles
d.getFullYear(); // 1815
d.getMonth(); // 9 - October
d.getDate(); // 9
d.getDay(); // 1 - Monday
d.getHours(); // 17
d.getMinutes(); // 0
d.getSeconds(); // 0
d.getMilliseconds(); // 0
// there are allso UTC equivalents to the above:
d.getUTCFullYear(); // 1815
d.getUTCMonth(); // 9 - October
d.getUTCDate(); // 10

const d1 = new Date(1996, 2, 1);
const d2 = new Date(2009, 4, 27);
const msDiff = d2 - d1;
const daysDiff = msDiff / 1000 / 60 / 60 / 24;
console.log(msDiff);
console.log(daysDiff);

// rest... look for moment.js
