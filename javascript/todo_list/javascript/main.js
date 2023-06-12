const onclick = () => {
  const addText = window.document.getElementById('add-text').value;
  window.document.getElementById('add-text').value = '';
  alert(addText);

  //要素の作成
  const li = document.createElement('li');

  const div = document.createElement('div');
  div.className = 'li-wrapper';

  const p = document.createElement('p');
  p.innerText = addText;

  const completeButton = document.createElement('button');
  completeButton.className = 'complete-button';
  completeButton.innerText = '完了';
  console.log(completeButton);
  completeButton.addEventListener('click', () => {
    const deleteTarget = deleteButton.parentNode.parentNode;
    const comleteNode = deleteTarget;
    document.getElementById('incomplete-list').removeChild(deleteTarget);
    document.getElementById('complete-list').appendChild(comleteNode);
    console.log(comleteNode);
  });

  const deleteButton = document.createElement('button');
  deleteButton.className = 'delete-button';
  deleteButton.innerText = '削除';
  deleteButton.addEventListener('click', () => {
    const deleteTarget = deleteButton.parentNode.parentNode;
    document.getElementById('incomplete-list').removeChild(deleteTarget);
  });

  // const backButton = document.createElement('button');
  // backButton.className = 'back-button';
  // backButton.innerText = '戻る';
  // backButton.addEventListener('click', () => {
  //   const backTarget = backButton.parentNode.parentNode;
  //   document.getElementById('complete-list').removeChild(backTarget);

  // });
  // console.log(deleteButton);

  //要素を階層ごとに挿入
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  li.appendChild(div);

  document.getElementById('incomplete-list').appendChild(li);
};

window.document.getElementById('add-button').addEventListener('click', onclick);
