function dwarfRollCall(dwarves) {
  var numberedDwarves = [];
  for (let i=0; i < dwarves.length; i++){
    numberedDwarves.push(`${i+1}. ${dwarves[i]} `);
  }
  return `${numberedDwarves.join('')}`; //return a string with numbered dwarves
}

function summonCaptainPlanet(planeteerCalls){
   let yell = [];
  for (let i = 0; i < planeteerCalls.length; i++) {
    yell.push(`"${planeteerCalls[i]}!"`.toUpperCase())
}
return yell;
}

function longPlaneteerCalls(words) {
 if (words.find(function(word) { 
   return word.length > 4;
 })){
   return true
 } else {
   return false
 }}


function findTheCheese (foods) {
  var cheeses = ['cheddar', 'gouda', 'camembert'];
  for (let i = 0; i < foods.length; i++) {
    for (let j = 0; j < cheeses.length; j++){
      if (cheeses[j] === foods[i]) {
        return cheeses[j];
      }
    }
    } return "no cheese!";
  }
