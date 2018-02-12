function changeImage() {
    // var image = document.getElementById('heart');
    // if (image.src.match("heartred")) {
    //     image.src = "img/heartwhite.png";
    // } else {
    //     image.src = "img/heartred.png";
    // }
}

$(document).ready(function() {
  $(".heart").on("click", function() {
      if ($(this).attr("src") == "img/heartred.png") {
          $(this).attr("src", "img/heartwhite.png");
      } else {
          $(this).attr("src", "img/heartred.png");
      }
  });
});
