$(document).ready(function(){

  var nightMode = false;


  $("#acceptBtn").click(function(){

      $("#cookieBanner").animate({
        bottom: "-=300px"
      },1500, function(){
        $("#cookieBanner").hide();
      });

    });

  $("#nightMode").click(function(){
    if(nightMode == false){

      $("body").css("background-color", "black");
      $(".pNight").css("color", "white");
      $("#night").css("filter", "invert()");
      $("img").css("filter", "brightness(85%)");
      $("#nightMode").css("opacity", "1");
      $("#nightMode").css("filter", "invert()");
      nightMode = true;
    }
    else{
      $("body").css("background-color", "white");
      $(".pNight").css("color", "black");
      $("#night").css("filter", "none");
      $("img").css("filter", "brightness(100%)");
      $("#nightMode").css("filter", "invert()");
      $("#nightMode").css("opacity", ".5");
      nightMode = false;
    }

  });

  $("#donateSuccess").click(function(){

      $("#donateTitle").html("<em>Thank You for Donating!<em>");

    });


});
