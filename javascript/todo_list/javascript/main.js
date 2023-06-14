const onclick = () => {
  const addText = window.document.getElementById('add-text').value;
  window.document.getElementById('add-text').value = '';
  alert(addText);
  createIncompleteList(addText);
};

// 未完了から消す挙動
const deleteFromIncompleteList = (target) => {
  document.getElementById('incomplete-list').removeChild(target);
};
// 完了から消す挙動
const backFromIncompleteList = (target) => {
  document.getElementById('complete-list').removeChild(target);
};

// 未完了リスト作成の動きを共通化
const createIncompleteList = (text) => {
  //要素の作成
  const li = document.createElement('li');
  const div = document.createElement('div');
  div.className = 'li-wrapper';
  const p = document.createElement('p');
  p.innerText = text;
  const completeButton = document.createElement('button');
  completeButton.className = 'complete-button';
  completeButton.innerText = '完了';
  const deleteButton = document.createElement('button');
  deleteButton.className = 'delete-button';
  deleteButton.innerText = '削除';

  //要素を階層ごとに挿入
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  li.appendChild(div);

  document.getElementById('incomplete-list').appendChild(li);

  //完了ボタンを押した時
  completeButton.addEventListener('click', () => {
    // 追加するターゲットを追うのと、削除
    const addTarget = completeButton.parentNode.parentNode;
    const addTargetDiv = addTarget.firstElementChild;
    const addText = addTarget.firstElementChild.firstElementChild.innerText;
    deleteFromIncompleteList(completeButton.parentNode.parentNode);

    //初期化して要素を再度作成
    addTargetDiv.textContent = null;

    const p = document.createElement('p');
    const backButton = document.createElement('button');
    backButton.className = 'back-button';

    p.innerText = addText;
    backButton.innerText = '戻す';
    addTargetDiv.appendChild(p);
    addTargetDiv.appendChild(backButton);

    //完了リストに入れる
    document.getElementById('complete-list').appendChild(addTarget);

    //戻すボタンを押した時
    backButton.addEventListener('click', () => {
      const backTarget = backButton.parentNode.parentNode;
      const addText = backTarget.firstElementChild.firstElementChild.innerText;
      backFromIncompleteList(backTarget);
      createIncompleteList(addText);
    });
  });

  //削除ボタンを押したとき
  deleteButton.addEventListener('click', () => {
    deleteFromIncompleteList(deleteButton.parentNode.parentNode);
  });
};

window.document.getElementById('add-button').addEventListener('click', onclick);
