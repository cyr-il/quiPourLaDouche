var prenoms = ['Carla', 'Celia', 'Deanna','Joanna','Cyril','Barbara'];
var counter = 10;
var winner = document.getElementById("winner");
var picProfile = document.getElementById("picProfile");
var myTitle = document.getElementById("titre");
var winnerPrenom = [];
var intervalId = null;

function bip() {

    shuffleNames();
    counter--;
    if(counter == 0) finish();
}
function start(){
  intervalId = setInterval(bip, 1000);
}	
// Parcourir le tableau et afficher toutes les valeurs
function shuffleNames() {
    prenoms.sort(function(){return 0.5 - Math.random()});
    winnerPrenom.push(prenoms[5]);     
    for(var prenom of prenoms){
      myTitle.innerHTML = prenom;
    }
}

function finish() {
  clearInterval(intervalId);
  var vainqueur = winnerPrenom[9];
  myTitle.innerHTML = " ";
  winner.innerHTML = vainqueur;
  switch(vainqueur) {
    case 'Carla': picProfile.innerHTML = "<img src='images/Carlasmall.png'>"
    break;
    case 'Joanna': picProfile.innerHTML = "<img src='images/Josmall.png'>"
    break;
    case 'Deanna': picProfile.innerHTML = "<img src='images/Deannasmall.png'>"
    break;
    case 'Celia': picProfile.innerHTML = "<img src='images/Celiasmall.png'>"
    break;
    case 'Cyril': picProfile.innerHTML = "<img src='images/Cyrilsmall.png'>"
    break;
    case 'Barbara': picProfile.innerHTML = "<img src='images/Babssmall.png'>"
    break;
  }
  winnerPrenom.push(vainqueur)
  var winLi = document.getElementById("win");
  winnerPrenom.forEach(element => {
    winLi.innerHTML += "<li>"+vainqueur+"</li>"
  });
  confetti();

}
