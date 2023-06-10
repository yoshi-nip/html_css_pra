// ES6で追加された文法について

function plus1(number) {
  const result = number + 1;
  return result;
}

// アロー関数へ書き換え
// const plus1(number) =>{
//   const result = number + 1;
//   return result;
// }

// アロー関数の省略
// const plus1(number) => number + 1;
console.log(plus1(1));

// オブジェクトの省略形について
// const user = {
//   name: 'yoshi',
//   sayMyName: function () {
//     console.log(`my name ${this.name}`);
//   },
// };

//アロー関数
// const user = {
//   name: 'yoshi',
//   sayMyName: () => {
//     console.log(`my name ${this.name}`);
//   },
// };

// さらに省略(オブジェクトのメソッドの省略形)
const user = {
  name: 'yoshi',
  sayMyName() {
    console.log(`my name ${this.name}`);
  },
};
// この挙動はアロー関数だとうまく動かない。thisの挙動が関係している。functionとアロー関数は厳密に一緒でない。
user.sayMyName();

// オブジェクトの分割代入

const user2 = {
  name: 'hogehoge',
  sayMyName() {
    console.log(`my name ${this.name}`);
  },
};

const { name, sayMyName } = user2;
console.log(name);
console.log(sayMyName);
// thisがうまく動いていない。
sayMyName();

const name3 = 'hogehoge';
const email = 'hogehoge@hoge.com';
// const user3 = { name3: name3, email: email };
//省略できる
const user3 = { name3, email };
console.log(user3);
