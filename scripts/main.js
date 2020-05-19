setInterval(relogio, 1000);

function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function relogio() {
  var d = new Date();
  var x = document.getElementById("demo");
  var h = addZero(d.getHours());
  var m = addZero(d.getMinutes());
  var s = addZero(d.getSeconds());
  var day = addZero(d.getDay());
  var month = addZero(d.getMonth());
  var year = addZero(d.getFullYear());
  $('#timer').text(h + ":" + m + ":" + s);
  $('#day').text(day + "/" + month + "/" + year);

}