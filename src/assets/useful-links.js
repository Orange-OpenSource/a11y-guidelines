function fetchAndDisplay(url, listId) {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const urlList = document.getElementById(listId);
      data.urls.forEach(url => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.innerHTML = `<a href="${url.url}" class="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">${url.name}</a>`;
        urlList.appendChild(listItem);
      });
    })
    .catch(error => console.error('Error fetching data:', error));
}

fetchAndDisplay('/assets/resources/norms-and-legal-obligations.json', 'urlList-norms')
fetchAndDisplay('/assets/resources/standard-html.json', 'urlList-standard');
fetchAndDisplay('/assets/resources/w3c-wcag.json', 'urlList-w3c');
fetchAndDisplay('/assets/resources/aria.json', 'urlList-aria');
fetchAndDisplay('/assets/resources/referentiels-audit.json', 'urlList-audit');
fetchAndDisplay('/assets/resources/how-to-test.json', 'urlList-howtotest');
fetchAndDisplay('/assets/resources/mobiles.json', 'urlList-mobiles');
fetchAndDisplay('/assets/resources/colors.json', 'urlList-colors');
fetchAndDisplay('/assets/resources/tables.json', 'urlList-tables');
fetchAndDisplay('/assets/resources/target-size.json', 'urlList-target-size');
fetchAndDisplay('/assets/resources/links.json', 'urlList-links');
fetchAndDisplay('/assets/resources/forms.json', 'urlList-forms');
fetchAndDisplay('/assets/resources/graphics.json', 'urlList-graphics');
fetchAndDisplay('/assets/resources/keyboard.json', 'urlList-keyboard');
fetchAndDisplay('/assets/resources/drag-drop.json', 'urlList-dragdrop');