const onclick = () => {
  const addText = window.document.getElementById('add-text').value;
  window.document.getElementById('add-text').value = '';
  alert(addText);
};

window.document.getElementById('add-button').addEventListener('click', onclick);
