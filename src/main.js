const settingsButton = document.querySelector('#settings')
const settingsBar = document.querySelector('.settings')

/*Behavior: If setting button is clicked, open settings.
  If settings menu is open and an area outside is clicked, close settings.
  If settings menu is open and escape is pressed, close settings.*/

addEventListener('click', event => {
  const settingsOpen = settingsBar.classList.contains('settings-open');

  if (settingsOpen && !settingsBar.contains(event.target)) {
    settingsBar.classList.remove('settings-open');
  };

  if (!settingsOpen && settingsButton.contains(event.target)) {
    settingsBar.classList.toggle('settings-open');
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
