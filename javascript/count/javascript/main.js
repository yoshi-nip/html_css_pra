const downButton = document.getElementById('downButton');
const upButton = document.getElementById('upButton');
const numberId = document.getElementById('number');
downButton.addEventListener('click', function () {
  const number = Number(document.getElementById('number').textContent);
  const result = number - 1;
  numberId.innerText = result;
});
upButton.addEventListener('click', function () {
  const number = Number(document.getElementById('number').textContent);
  const result = number + 1;
  numberId.innerText = result;
});
console.log(number);
