// li 요소를 클릭하면 모든 li에 .active 삭제한다.
// li 요소를 클릭하면 클릭된 대상에 .active 붙는다

const $lists = document.querySelectorAll('.con>li');
const $con = document.querySelector('.con');

//------- forEach를 중첩해서 적용하니 가독이 불편함
// $lists.forEach((el, i) => {
//   el.addEventListener('click', (e) => {
//     // console.log('this', this);

//     $lists.forEach((elm) => {
//       elm.classList.remove('active');
//     });

//     console.log('리스트가 클릭됨', i);
//     console.log('이벤트객체 target', e.target);
//     console.log('이벤트객체 currentTarget', e.currentTarget);
//     el.classList.add('active');
//   });
// });

//------- ()=>{ this } / function(){ this} 에서 this의 차이
// $lists.forEach((el, i) => {
//   el.addEventListener('click', function (e) {
//     console.log('this', this);

//     $lists.forEach((elm) => {
//       elm.classList.remove('active');
//     });

//     this.classList.add('active');
//   });
// });

//------- 이벤트 위임방식이 장점이 많음 (메모리최적화, 성능향상, 코드 간소화 등)
$con.addEventListener('click', (e) => {
  // p 태그나 그 하위 요소를 클릭했을 때 가장 가까운 li를 찾음
  const closestLi = e.target.closest('li');

  // 클릭한 요소가 li 내부에 있는지 확인
  if (closestLi && $con.contains(closestLi)) {
    $con.querySelectorAll('li').forEach((li) => {
      li.classList.remove('active');
    });
    closestLi.classList.add('active');
  }
});

// --------- 이벤트 종류 찾아볼 것
// https://ko.javascript.info/events
// https://ko.javascript.info/event-details
$con.addEventListener('mouseenter', () => {
  console.log('마우스가 진입했다');
});
$con.addEventListener('mouseleave', () => {
  console.log('마우스가 빠져나갔다');
});
$con.addEventListener('mousemove', () => {
  console.log('마우스가 빠져나갔다');
});
