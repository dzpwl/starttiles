const settingsButton = document.querySelector('#settings')
const settingsBar = document.querySelector('.settings')
const enginesList = document.querySelector('#engines')
const searchForm = document.querySelector('#web-search')

fetch('./src/data.json')
  .then(response => {
    return response.json();
  })
  .then(data => console.log(data));

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
    changeSearchEngine(event.target.innerHTML);
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

function changeSearchEngine(engine) {
  var engineUrl; 
  switch (engine) {
    case 'ddg':
      engineUrl = 'https://duckduckgo.com/';
      break;
    case 'qwant':
      engineUrl = 'https://qwant.com/'
      break;
    case 'searx':
      engineUrl = 'https://searx.info/'
      break;
  };
  searchForm.action = engineUrl; 
};
  
