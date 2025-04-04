//선언함수 function name() {},
// 익명함수 const name = function(){} ,
//  화살표함수 const name =()=>{},
// parameters, arguments, return에 대해 학습함

//생성자 함수 new Date() 객체를 생성
//즉시 실행함수 (function run(){})
//파라미터란?

function add(a = 0, b = 0, ...nums) {
  console.log(a);
  console.log(b);
  console.log(nums);
}
add(4, 3, 4, 5, 6);
//add하면 첫번째 값부터 추가됨 그리고 nums는 맨 마지막에만 올 수 있다

//점수를 입력하면
//입력된 정수가 60 이하 = 'f'출력하기
//입력된 점수가 60-80에 포함되면 = 'b'출력하기
//입력된 점수가 80-90에 포함되면 = 'a'출력하기
//입력된 점수가 90 이상 = 'A+'
//grade('이름', 90)

//콜백함수
console.clear();
const add3 = (a, b) => a + b;
const multiply = (a, b) => a * b;

const calclator = function (a, b, action) {
  if (a < 0 || b < 0) {
    return;
  }
  let result = action(a, b);
  console.log(result);
};
calclator(3, 4, add);
calclator(-3, -4, multiply);
