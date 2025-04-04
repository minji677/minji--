/**
 * 데이터 타입의 종류
 * number 숫자
 * string 문자
 * boolean 불리안 참, 거짓
 * null 비어있음
 * undefined 정의되지 않음
 *
 * symbol
 * object객체
 * 원시타입(불변성이 있는 데이터 값을 가진것 위의 다섯개)/객체타입(함수 포함, 변경가능)
 */

const { log } = require('node:console');
let num = 1;
let name = '길동이';
let isFree = false;
let sample = '';
console.log('sample-', sample);
const obj1 = {
  a: 'test',
};

console.log(obj1.a);
