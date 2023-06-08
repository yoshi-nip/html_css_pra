window.console.log('windowのconsoleのlog関数');
window.alert('windowのalert関数');

window.console.log(window.document);

const elements = window.document.getElementsByClassName('test');
console.log(elements);

const element = window.document.getElementById('test');
console.log(element);

element.innerText = 'テストの書き換え';

const newDiv = window.document.createElement('div');
newDiv.innerText = '新たなdiv要素';

element.appendChild(newDiv);

const alertButton = document.getElementById('alertButton');
console.log(alertButton);
const alertFunc = function () {
  alert('ボタン押したから警告！！');
};
alertButton.addEventListener('click', alertFunc);
// alertButton.addEventListener('click', function () {
//   alert('ボタン押したから警告！！');
// });
