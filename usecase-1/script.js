// Deze code werkt alleen voor het eerste element .heart
//
// function clickImage() {
//   var image = document.querySelector('.heart');
//   if (image.src.match("heartred")) {
//       image.src = "img/heartwhite.png";
//   } else {
//       image.src = "img/heartred.png";
//   }
// }
//
// var image = document.querySelector('.heart');
// image.addEventListener('click', clickImage, false);

var watchlist_total = 0;
// forEach werkt wel, hij pakt hier in de fuctie alle elementen uit de array (je loopt door elke image heen en voegt overal apart die addEventListener toe)
var images = document.querySelectorAll('.heart');
images.forEach (function(image) {
  image.addEventListener('click', function(){
    if (image.src.match("heartred")) {
        image.src = "img/heartwhite.png";
        watchlist_total--;
    } else {
        image.src = "img/heartred.png";
        watchlist_total++;
    }
    document.getElementById('watchlist').innerHTML = "watchlist(" + watchlist_total + ")";
  });
});



// loop geprobeerd, click werkte wel overal. Alleen de laatste werd aangepast op een of andere manier..
//
// var images = document.querySelectorAll('.heart')
// for (var x = 0; x < images.length; x++) {
//   var image = images[x]
//   image.addEventListener('click', function(){
//     alert("click: " + image);
//   if (image.getAttribute("src").match("heartred")) {
//       image.src = "img/heartwhite.png";
//   } else {
//       image.src = "img/heartred.png";
//   }
//
//   });
// }



// eerste keer proberen querySelectorAll, li.heart klopte niet, want het is img.heart
//
// function changeImage() {        //declareren van functie
//   var hearts = document.querySelectorAll("li.heart"); // haal alle hearts
//   if (hearts.src.match("heartred")) {               // if afbeelding is rood
//     hearts.src = "img/heartwhite.png";              // maak wit
//   } else {                                          // anders
//     hearts.src = "img/heartred.png";                // maak wit
//   }
// }
//
//
//image.addEventListener('click', changeImage, false);
