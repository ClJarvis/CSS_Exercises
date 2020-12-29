// Populate the star field
const uglyStars = 10;

//
for (let i = 0; i < uglyStars; i++) {
  let star = document.createElement("div");
    star.className = "star";
    var xy = getRandomPosition();
      star.style.top = xy[0] +'px';
      star.style.left = xy[1] + 'px';
    document.getElementById("torsojs").innerHTML += "X";
}

function getRandomPosition() {
  var y = window.innerWidth;
  var x = window.innerHeight;
    var randomX = Math.floor(Math.random()*x);
    var randomY = Math.floor(Math.random()*y);

    return [randomX,randomY];
    document.getElementById("torsojs").innerHTML += "oo";
}