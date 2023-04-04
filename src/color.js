const styleRoot= document.styleSheets[0].cssRules[3].style;
const themeRoot= document.styleSheets[0].cssRules[4].style;
let buttonReset = document.getElementById('reset');
let pageBgInput = document.getElementById('page-bg');
let cellBgInput = document.getElementById('cell-bg');
let cellBordersInput = document.getElementById('cell-borders');
let baseTextInput = document.getElementById('unfocused-text');
let accent1Input = document.getElementById('accent1');
let accent2Input = document.getElementById('accent2');
let accent3Input = document.getElementById('accent3');

function resetTheme() {
  pageBgInput.value = themeRoot.getPropertyValue('--page-bg'); 
  cellBgInput.value = themeRoot.getPropertyValue('--cell-bg'); 
  cellBordersInput.value = themeRoot.getPropertyValue('--cell-borders'); 
  baseTextInput.value = themeRoot.getPropertyValue('--unfocused-text'); 
  accent1Input.value = themeRoot.getPropertyValue('--accent1'); 
  accent2Input.value = themeRoot.getPropertyValue('--accent2'); 
  accent3Input.value = themeRoot.getPropertyValue('--accent3'); 
  setTheme();
}

function setTheme() {
  styleRoot.setProperty('--page-bg', pageBgInput.value);
  styleRoot.setProperty('--cell-bg', cellBgInput.value); 
  styleRoot.setProperty('--cell-borders', cellBordersInput.value); 
  styleRoot.setProperty('--unfocused-text', baseTextInput.value); 
  styleRoot.setProperty('--accent1', accent1Input.value); 
  styleRoot.setProperty('--accent2', accent2Input.value); 
  styleRoot.setProperty('--accent3', accent3Input.value); 
}

function applyCustomTheme() {
  let customColors = JSON.parse(localStorage.getItem('customTheme')); 

  pageBgInput.value = customColors['page-background'];
  cellBgInput.value = customColors['cell-background'];
  cellBordersInput.value = customColors['cell-borders'];
  baseTextInput.value = customColors['base-text']; 
  accent1Input.value = customColors['accent1'];
  accent2Input.value = customColors['accent2'];
  accent3Input.value = customColors['accent3'];

  setTheme();
}

function setCustomTheme() {
  let customColors = 
    {
      'page-background': pageBgInput.value,
      'cell-background': cellBgInput.value,
      'cell-borders': cellBordersInput.value,
      'base-text': baseTextInput.value,
      'accent1': accent1Input.value,
      'accent2': accent2Input.value,
      'accent3': accent3Input.value
    }

  localStorage.setItem('customTheme', JSON.stringify(customColors));
  applyCustomTheme();
}

if (localStorage.getItem('customTheme') !== null) {
  applyCustomTheme();
} else {
  resetTheme();
}
