const a = 1;

{
  const b = 2;
  console.log(b);
  console.log(a);
}
// ここからbは参照できなくてエラーになる
console.log(b);
console.log(a);
