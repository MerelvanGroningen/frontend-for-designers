var watchlist_total = 0;

var xmlHttpReq = new XMLHttpRequest();

xmlHttpReq.addEventListener("load", reqListener);
xmlHttpReq.open("GET", "https://merelvangroningen.github.io/frontend-for-designers/opdracht3/movies.json"); //  GET haalt iets van de site af
xmlHttpReq.send();

function reqListener () {
  var json_data = JSON.parse(this.responseText);
  console.log(json_data);

  json_data.forEach(function(obj) {
    console.log(obj);
    var ul = document.getElementById("movie_list");
    var li = document.createElement("li");
    var a = document.createElement("a");
    li.appendChild(a);

    var img_heart = document.createElement("img");
    img_heart.src = "img/heartwhite.png";
    img_heart.classList.add("heart");
    a.appendChild(img_heart);

    var img_2 = document.createElement("img");
    img_2.src = obj.cover;
    img_2.classList.add("cover");
    a.appendChild(img_2);

    var span = document.createElement("span");
    span.textContent = obj.title; //textContent ipv src, het is geen img
    a.appendChild(span);

    li.addEventListener('click', function(){
      var title = document.getElementById("title");
      title.textContent = obj.title;
      var text = document.getElementById("text");
      text.textContent = obj.simple_plot;
      var genres = document.getElementById("genres");
      genres.innerHTML="";
      obj.genres.forEach(function(item) {
        var li = document.createElement("li");
        li.textContent = item;
        genres.appendChild(li);
      });
      var actors = document.getElementById("actors");
      actors.innerHTML="";
      // obj.actors.forEach(function(item) {
      //   var li = document.createElement("li");
      //   li.textContent = item.actor_name;
      //   actors.appendChild(li);
      // });
      for (var x = 0; x < 3; x++) {
        var li = document.createElement("li");
        li.textContent = obj.actors[x].actor_name;
        actors.appendChild(li);
      }
      console.log(obj);
    });

    ul.appendChild(li); //  Eerst de li helemaal vullen en dan pas aan de ul toevoegen (injecteren)
  });

  addHeartSelector();
}

// functie gemaakt om het selecteren van de hartjes los aan te roepen
function addHeartSelector() {
  // forEach werkt wel, hij pakt hier in de fuctie alle elementen uit de array (je loopt door elke image heen en voegt overal apart die addEventListener toe)
  var images = document.querySelectorAll('.heart');
  images.forEach (function(image) {
    image.addEventListener('click', function(event){
      if (image.src.match("heartred")) {
          image.classList.remove("heart_selected");
          image.src = "img/heartwhite.png";
          watchlist_total--;
      } else {
          image.classList.add("heart_selected");
          image.src = "img/heartred.png";
          watchlist_total++;
      }
      document.getElementById('watchlist').innerHTML = "watchlist(<span class='watchlist_number'>" + watchlist_total + "</span>)";

      var watchlist_number = document.querySelector('.watchlist_number');
      watchlist_number.classList.add("watchlist_number_increase"); //voegt class toe om fontsize te vergroten van nummer watchlist
      setTimeout(function(){ watchlist_number.classList.remove("watchlist_number_increase"); }, 400); //haalt class weer weg --> verkleinen nummer van watchlist na bepaalde tijd
    });
  });
}

function nextCover() {
  var container = document.getElementById('scroll_container');
  container.scrollLeft += 350;
}
function previousCover() {
  var container = document.getElementById('scroll_container');
  container.scrollLeft -= 350;
}

var nextButton = document.querySelector('.arrowRight')
nextButton.addEventListener('click', function(){
  nextCover();
});

var previousButton = document.querySelector('.arrowLeft')
previousButton.addEventListener('click', function(){
  previousCover();
});

document.onkeydown = function() {
    switch (window.event.keyCode) {
        case 37:
        previousCover();
         break;
        case 39:
        nextCover();
         break;
    }
};
