window.onload = showTime();
function showTime() {
  var d = new Date();
  var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var weekday = days[d.getDay()];
  var date = d.getDate();
  var month = months[d.getMonth()];
  var minute = d.getMinutes();
  var hour = d.getHours();
  var meridiem = '';

  if (document.getElementById('clock-style').checked) {
    meridiem = hour >= 12  ? ' pm' : ' am';
    hour = hour % 12;
    hour = hour ? hour : 12;
  }

  document.getElementById('date').innerText = weekday + ', ' + month + ' ' + date;
  document.getElementById('time').innerText = hour + ':' + minute + meridiem; 
  setTimeout(showTime, 1000);
}
