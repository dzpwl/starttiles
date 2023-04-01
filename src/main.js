const settingsButton = document.querySelector('#settings');
const settingsBar = document.querySelector('.settings');
const enginesList = document.querySelector('#engines');
const searchForm = document.querySelector('#web-search');
const allVideos = document.querySelectorAll('video');
const autoplayCheckbox = document.querySelector('#autoplay');

/*Behavior: If setting button is clicked, open settings.
  If settings menu is open and an area outside is clicked, close settings.
  If settings menu is open and escape is pressed, close settings.*/

addEventListener('click', event => {
  const settingsOpen = settingsBar.classList.contains('settings-open');
  const selectedEngine = document.querySelector('.selected');

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

  if (autoplayCheckbox.contains(event.target)) {
    setAutoplay()
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

function setAutoplay() {
  if (autoplayCheckbox.checked) {
    allVideos.forEach((video) => {
      video.autoplay = true;
      video.play();
    });
  } else {
    allVideos.forEach((video) => {
      video.autoplay = false;
      video.pause();
      video.currentTime = 0;
    });
  };
};
