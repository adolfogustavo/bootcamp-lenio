const getAPIBtn = document.querySelector('#getAPI');
getAPIBtn.addEventListener('click', getData);


function getData() {
  const url = 'https://picsum.photos/list';

  fetch(url)
      .then( response => response.json() )
      .then( data => showInHTML(data) )
      .catch( error => {
          console.log('Error=>', error);
      })
}

function showInHTML(data) {
  const content = document.querySelector('.content');

  let html = '';

  data.forEach(profile => {
    const { author, post_url } = profile;

    html += `
        <p>Autor: ${author}</p>
        <a href="${post_url}" target="_blank">Click to see image</a>
    `
  });

  content.innerHTML = html;
}