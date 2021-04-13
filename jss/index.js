window.onload = function() {
  setTimeout(fade_out, 10000);

  function fade_out() {
    $("#welcome")
    .fadeTo(1000,1)
    .delay(100)
    .fadeOut(3000);
    }
}