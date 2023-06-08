function plus1(number) {
  const result = number + 1;
  return result;
}

const number = 10;
const result = plus1(number);
console.log(result);

// 無形関数にして変数に関数を代入
const plus2 = function (number) {
  const result = number + 2;
  return result;
};
console.log(plus2(number));

//コールバック関数
//実行結果じゃなくて関数を引数に渡すことに注意
function doTwice(fn) {
  fn();
  fn();
}

const sayHello = function () {
  console.log('Hello');
  return 'Hello';
};
doTwice(sayHello);
