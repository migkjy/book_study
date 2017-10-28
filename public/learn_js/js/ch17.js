let input = 'As I was going to Saint Ives';
input.startsWith('As'); // true
input.endsWith('Ives'); // true
input.startsWith('going', 9); // true -- start at index 9
input.endsWith('going', 14); // true -- treat index 14 as the end of the string
input.includes('going'); // true
input.includes('going', 10); // false -- starting at index 10
input.indexOf('going'); // 9
input.indexOf('going', 10); // -1
input.indexOf('nope'); // -1
input.toLocaleLowerCase().startsWith('as');
const output = input.replace('going', 'walking');
console.log(output);

// 정규식 만들기
const re1 = /going/;
const re2 = new RegExp('going');

const re = /\w{3,}/ig; // i는 대소문자 모두, g는 global(전체- 하나찾고 끝이 아니다, 다 찾아서 배열로)
input.match(re); // ["was", "going", "Saint", "Ives"]
input.search(re); // 5 (the first three-letter word starts at index 5)

// starting with the regex (re)
re.test(input); // true (input contains at least one three-letter word)
re.exec(input); // ["was"] (first match)
re.exec(input); // ["going"] (exec "remembers" where it is)
re.exec(input); // ["Saint"]
re.exec(input); // ["Ives"]
re.exec(input); // null -- no more matches

console.log(input.match(/\w{3,}/ig));
console.log(input.search(/\w{3,}/ig));
console.log(/\w{3,}/ig.test(input)); // true
console.log(/\w{3,}/ig.exec(input)); // ["was", index: 5, input: "As I was going to Saint Ives"]

const html = 'HTML with <a href="/one">one link</a>, and some JavaScript.' +
'<script src="stuff.js"></script>';
let matches = html.match(/area|a|link|script|source/ig); // first attempt, area가 a보다 먼저 써야함, |는 or
console.log(matches);

const beer99 = '99 bottles of beer on the wall ' +
'take 1 down and pass it around -- ' +
'98 bottles of beer on the wall.';
matches = beer99.match(/0|1|2|3|4|5|6|7|8|9/g);
const m1 = beer99.match(/[0123456789]/g); // okay
const m2 = beer99.match(/[0-9]/g); // better!
let match = beer99.match(/[\-0-9a-z.]/ig); // 전부를 반환, 공백 빼고 모두 검색, '-'은 이스케이프 해야 함
match = beer99.match(/[^\-0-9a-z.]/);

const stuff =
'hight: 9\n' +
'medium: 5\n' +
'low: 2\n';
const levels = stuff.match(/:\s*[0-9]/g); // : 뒤에 특수기호(스페이스포함) *(여러개), 그담 [0-9], /globaly
console.log(levels); // [": 9", ": 5", ": 2"]

const messyPhone = '(505) 555-1515';
const neatPhone = messyPhone.replace(/\D/g, ''); // \D로 숫자 제외 모든걸 "" 공백으로 replace
console.log(neatPhone); // 5055551515

const field = ' something ';
const valid = /\S/.test(field); // 특수문자 말고 실제 문자나 숫자를 확인하는 방법
console.log(valid); // true  -> 문자나 숫자 있음


match = beer99.match(/[0-9][0-9][0-9]|[0-9][0-9]|[0-9]/);
match = beer99.match(/[0-9]+/); // 한개 이상

input = 'Address: 333 Main St., Anywhere, NY, 55532. Phone: 555-555-2525.';
match = input.match(/\d{5}.*/); // 숫자 5개 다음은 .(아무 문자)가 *(몇개있던) 상관없음
console.log(match); // ["55532. Phone: 555-555-2525.",
// index: 37, input: "Address: 333 Main St., Anywhere, NY, 55532. Phone: 555-555-2525."]

const text = 'Visit oreilly.com today!';
match = text.match(/[a-z]+(?:\.com|\.org|\.edu)/i); // grouping, (?: [subexpression]), +가 한개이상
console.log(match); // ["oreilly.com", index: 6, input: "Visit oreilly.com today!"] 

const html = '<link rel="stylesheet" href="http://insecure.com/stuff.css">\n' +
'<link rel="stylesheet" href="https://secure.com/securestuff.css">\n' +
'<link rel="stylesheet" href="//anything.com/flexible.css">';
const matches = html.match(/(?:https?)?\/\/[a-z][a-z0-9-]+[a-z0-9]+/ig);
// 이게 이제 이해가네.. 
// 1) (?:https?)이게 그룹, s는 0~1개, 1개 있거나 없거나, 문자 s가 한개 있거나 없거나, 그룹전체가 있거나 없거나
// \/\/  -> // (이스케이핑한거)
// [a-z] 문자한개
// [a-z0-9-]+  한개 이상
// [a-z0-9]+ 한개 이상
// ig  대소문자 구분없고, 전부 찾아서 반환

const input = "Regex pros know the difference between\n" +
"<i>greedy</i> and <i>lazy</i> matching.";
input.replace(/<i>(.*)<\/i>/ig, '<strong>$1</strong>'); // 적극적 일치, 발견해도 끝까지 감봄
// 결과물
// "Regex pros know the difference between
// <strong>greedy</i> and <i>lazy</strong> matching."   // 두개가 다 바껴야는데 하나만 바뀜
input.replace(/<i>(.*?)<\/i>/ig, '<strong>$1</strong>');  // 이게 제대로 작동, 소극적 일치 (발견하자마자 끝)

//
// 나머지는 나중에 하자..  너무 깊게 나가네
