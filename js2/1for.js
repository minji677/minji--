//제어문 반복문 for

// let i = 0;
// i < 5;
// i++;
// 중첩반복문
for (let i = 0; i < 5; i++) {
  console.log(i);
  for (let j = 0; j < 5; j++) {
    console.log('--', j);
  }
}

//for(;;){}무한반복
//반복문 제어 -continue (건너뛴다), break(코드 종료)
//continue는 건너뛴다 , break는 빠져나온다
for (let a = 0; a < 20; a++) {
  if (a === 10) {
    continue;
    console.log('10입니다');
    //break;
  }
  console.log(a);
}

//반복문은 배열과 객체데이터를 다룰 때 많이 사용됨
console.clear();

let fruits = ['사과', '바나나', '체리', '포도'];
// console.log(fruits[0]);
console.log(fruits.length);

for (let i = 0; i < fruits.length; i++) {
  console.log('------');
  console.log(fruits[i]);
}

//forEach
fruits.forEach((fruit, i, arr) => {
  //   console.log('foreach');
  console.log(fruits);
  //   console.log(i);
  //   console.log(arr);
  console.log('-----');
});

for (let fruit of fruits) {
  console.log(fruit);
}
//객체를 반복문으로 출력
let members = {
  manager: '한식이',
  designer: '두식이',
  developer: '세식이',
};

for (let m in members) {
  console.log(members[m]);
}
console.log(members.manager);
