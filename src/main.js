const settingsButton = document.querySelector('#settings')
const settingsBar = document.querySelector('.settings')
const enginesList = document.querySelector('#engines')
const searchForm = document.querySelector('#web-search')

fetch('./src/data.json')
  .then(response => {
    return response.json();
  })
  .then(data => { 
    const bookmarkCells = data.bookmarkContainer; 
    for (const cell of bookmarkCells) {
      buildBookmarkCell(cell.id.toLowerCase(), cell);
    }
  });

/*Behavior: If setting button is clicked, open settings.
  If settings menu is open and an area outside is clicked, close settings.
  If settings menu is open and escape is pressed, close settings.*/

addEventListener('click', event => {
  const settingsOpen = settingsBar.classList.contains('settings-open');
  const selectedEngine = document.querySelector('.selected')

  if (settingsOpen && !settingsBar.contains(event.target)) {
    settingsBar.classList.remove('settings-open');
  };

  if (!settingsOpen && settingsButton.contains(event.target)) {
    settingsBar.classList.toggle('settings-open');
  };

  if (enginesList.contains(event.target) && selectedEngine != event.target) {
    selectedEngine.classList.remove('selected');
    event.target.classList.add('selected');
    setSearchEngine(event.target.innerHTML);
  };

});

addEventListener('keyup', e => {
  const settingsOpen = settingsBar.classList.contains('settings-open');

  if (e.key === 'Escape') { 
    if (settingsOpen) {
      settingsBar.classList.remove('settings-open');
    };
  };
});

function setSearchEngine(engine) {
  var searchUrl; 
  switch (engine) {
    case 'ddg':
      searchUrl = 'https://duckduckgo.com/';
      break;
    case 'qwant':
      searchUrl = 'https://qwant.com/'
      break;
    case 'searx':
      searchUrl = 'https://searx.info/'
      break;
  };
  searchForm.action = searchUrl; 
};

function buildBookmarkCell(cellId, obj) {
  const cell = document.getElementById(cellId);
  const span = document.createElement('span'); 
  const list = document.createElement('ul');
  const listItems = obj.urls;

  span.textContent = obj.id;

  for (const item of listItems) {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.target = "_blank";
    link.rel = "noopener";
    link.href = item.url;
    link.textContent = item.name;
    listItem.appendChild(link);
    list.appendChild(listItem);
  };

  cell.appendChild(span);
  cell.appendChild(list);
};
