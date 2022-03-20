$(document).ready(function(){

  //oppen navber
  $(".navbar-toggler").click(function(){
    $(".navbar-collapse").css({"right":"0%"})
  })



  // close navber

  $("#btnClose").click(function(){
    $(".navbar-collapse").css({"right":"-100%"})
    $(".navbar-collapse").removeClass("show");
  })






















})