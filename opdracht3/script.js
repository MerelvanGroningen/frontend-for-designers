var watchlist_total = 0;

var xmlHttpReq = new XMLHttpRequest();

xmlHttpReq.addEventListener("load", reqListener);
xmlHttpReq.open("GET", "http://dennistel.nl/movies"); //  GET haalt iets van de site af
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
    a.appendChild(img_2);

    var span = document.createElement("span");
    span.textContent = obj.title;
    a.appendChild(span);

    ul.appendChild(li); //  Eerst de li helemaal vullen en dan pas aan de ul toevoegen
  });

  addHeartSelector();
}

// functie gemaakt om het selecteren van de hartjes los aan te roepen
function addHeartSelector() {
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
}
