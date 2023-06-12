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

  const deleteButton = document.createElement('button');
  deleteButton.className = 'delete-button';
  deleteButton.innerText = '削除';
  console.log(deleteButton);

  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  li.appendChild(div);
  console.log(li);

  document.getElementById('incomplete-list').appendChild(li);
  // <li>
  //         <div class="li-wrapper">
  //           <p>ToDoです</p>
  //           <button>完了</button>
  //           <button>削除</button>
  //         </div>
  //       </li>
};

window.document.getElementById('add-button').addEventListener('click', onclick);
