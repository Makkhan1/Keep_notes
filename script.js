var example_note = document.getElementsByClassName('example_note')[0];
var close_btn = document.getElementById('close_btn');
example_note.onclick = function() {
  document.getElementsByClassName('background_change')[0].style.display = "block";
  document.getElementsByClassName('display_block')[0].style.display = "block";
  example_note.style.display="none";
}

close_btn.onclick = function() {
  document.getElementsByClassName('background_change')[0].style.display = "none";
  document.getElementsByClassName('display_block')[0].style.display = "none";
  example_note.style.display="block";
}