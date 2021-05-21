const getJSONArrayBtn = document.querySelector('#getJSONArray');
getJSONArrayBtn.addEventListener('click', getData);

function getData() {
  const url = 'data/items.json';

  fetch(url)
    .then(response => response.json())
    .then( data => showInHTML(data))
    .catch(e => console.log('Error=>', e))
}

function showInHTML(items) {
  const content = document.querySelector('.content');

  let html = '';

  items.forEach(item => {
    const { name, details: { color, model, release_date } } = item;
    
    html += `
        <p>Product: ${name} </p>
        <p>Model: ${model} </p>
        <p>Color: ${color} </p>
        <p>Release: ${release_date.slice(0, 4)} </p>
        </br>
    `
  });

  content.innerHTML = html;
}