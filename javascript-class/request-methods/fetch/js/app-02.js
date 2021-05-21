const getJSONBtn = document.querySelector('#getJSON');
getJSONBtn.addEventListener('click', getData);

function getData() {
  const url = 'data/item.json';

  fetch(url)
    .then(response => response.json())
    .then( data => showInHTML(data))
    .catch(e => console.log('Error=>', e))
}

function showInHTML({ name, details: { color, model, release_date } }) {
  const content = document.querySelector('.content');

  content.innerHTML = `
    <p>Product: ${name} </p>
    <p>Model: ${model} </p>
    <p>Color: ${color} </p>
    <p>Release: ${release_date.slice(0, 4)} </p>
  `
}