let likePizza = false;

const Pizza = new Promise((resolve, reject) => {
  if (likePizza) resolve('피자를 주문합니다');
  else reject('피자를 주문하지 않습니다');
});

Pizza
  .then((result) => console.log(result)) //
  .catch((err) => console.log(err));
