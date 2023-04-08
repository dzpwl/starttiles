window.onload = showTime();
clock24 = document.getElementById('clock24');

function checkLocalStorage() {
  if (localStorage.getItem("clock") === "24") {
    clock24.checked = true;
  }
}

function setClockStyle() {
  if (clock24.checked === true) {
    localStorage.setItem("clock","24");
  } else if (clock24.checked === false) {
    localStorage.setItem("clock","12");
  }
}

function showTime() {
  checkLocalStorage();

  var d = new Date();
  var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var weekday = days[d.getDay()];
  var date = d.getDate();
  var month = months[d.getMonth()];
  var minute = d.getMinutes().toString().padStart(2, '0');
  var hour = d.getHours();
  var meridiem = '';

  if (clock24.checked === false) {
    meridiem = hour >= 12  ? ' pm' : ' am';
    hour = hour % 12;
    hour = hour ? hour : 12;
  }

  document.getElementById('date-text').innerText = weekday + ', ' + month + ' ' + date;
  document.getElementById('time-text').innerText = hour + ':' + minute + meridiem; 
  setTimeout(showTime, 1000);
}
