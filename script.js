$(document).ready(function () {

  $(".map-holder>div").click(function () {
    if ($(this).hasClass("active")) {
      $(".map-holder>div").removeClass("active");
    }
    else {
      $(".map-holder>div").removeClass("active");
      $(this).addClass("active");
      var city = $(this).attr('data-city')
      var continent = $(this).attr('data-continent')
      $.get("http://worldtimeapi.org/api/timezone/" + continent + "/" + city)
        .done(function (data) {
          var time = data.datetime;
          var position = time.indexOf("T") + 1;
          var getTime = time.substring(position, position + 5);
          $(".time").html(getTime);
        });
    }



  })
});