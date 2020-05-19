var checkbox = $("#checkbox");

checkbox.change(function (event) {
  var checkbox = event.target;
  if (checkbox.checked) {
    dark()
  } else {
    light()
  }
})
function light(){
  $('html').css('background', 'white')
  $('html').css('color', 'black')
  $(".clock img").attr("src","./img/clock.gif");
}

function dark(){
  $('html').css('background', 'black')
  $('html').css('color', 'white')
  $(".clock img").attr("src","./img/white-clock.gif");
}
