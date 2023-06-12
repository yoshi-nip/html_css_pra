const onclick = () => {
  const addText = window.document.getElementById('add-text').value;
  window.document.getElementById('add-text').value = '';
  alert(addText);

  const div = document.createElement('div');
  div.className = 'テストネーム';
  console.log(div);
};

window.document.getElementById('add-button').addEventListener('click', onclick);
