const onclick = () => {
  const addText = window.document.getElementById('add-text').value;
  window.document.getElementById('add-text').value = '';
  alert(addText);

  const li = document.createElement('li');

  const div = document.createElement('div');
  div.className = 'li-wrapper';
  console.log(div);

  const p = document.createElement('p');
  p.innerText = addText;

  const completeButton = document.createElement('button');
  completeButton.className = 'complete-button';
  completeButton.innerText = '完了';
  console.log(completeButton);
  completeButton.addEventListener('click', () => {
    alert('完了');
  });

  const deleteButton = document.createElement('button');
  deleteButton.className = 'delete-button';
  deleteButton.innerText = '削除';
  deleteButton.addEventListener('click', () => {
    const deleteTarget = deleteButton.parentNode.parentNode;
    document.getElementById('incomplete-list').removeChild(deleteTarget);
  });
  console.log(deleteButton);

  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  li.appendChild(div);
  console.log(li);

  document.getElementById('incomplete-list').appendChild(li);
};

window.document.getElementById('add-button').addEventListener('click', onclick);
