//키로 사용될 수 있는 것
//키 -ㅡ 문자, '문자열', 숫자
//value - 원시값, 객체 (배열, 함수 등도 포함)

let apple = {
  name: '사과',
  이름: '사과',
};

const obj = {
  name: '개냥이',
  age: 2,
};

// console.log(obj.age);
// console.log(obj.name);

function getValue(obj, key) {
  return obj[key];
}
console.log(getValue(obj, 'name'));

function addkey(object, key, value) {
  object[key] = value;
}
addkey(obj, 'feel', '행복해');
console.log(obj);

//key:value 같으면 짧게 줄일 수 있다

const x = 0;
const y = 0;
// const coord = {x:x, y:y}; 일 경우 키와 변수명이 동일하여 아랫줄처럼 생략한다.
const coord = { x, y };
console.log(coord);

function makeObj(name, age) {
  return { name: name, age: age };
}
const person = makeObj('sony', 3);
console.log(person);
