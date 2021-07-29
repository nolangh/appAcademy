/* --------------------------------- STEP 1 --------------------------------- */

// ANCHOR make constructor function.
function NBAPlayer(name, team, position) {
  //"this. assigns & creats attributes"
  this.name = name;
  this.team = team;
  this.postion = position;
}

/* --------------------------------- STEP 2 --------------------------------- */
//ANCHOR make a player
//use "new" to pass the new player through constructor function and assign attributs.
let curry = new NBAPlayer("Steph Curry", "GS Warriors", "Point Gaurd");

//using ".prototype" allows you to add to the constructor function.
// we use '.prototype' to add dunks to the original constructor function. we also assigned a function to NBAPlayers.dunk which returns ('this.name' + dunks!)
NBAPlayer.prototype.dunk = function () {
  return `${this.name} dunks!`;
};

//will return the dunk function output that was assigned to NBAPlayer
console.log(curry.dunk());

/* NOTE
the below code will log '{dunk:[function]}' that was assigned to NBAPLayer.
NBAPlayer.prototype;
console.log(NBAPlayer.prototype)
*/

/*to change a property calue of a player or object just re-assign it.
 curry.name = "Steph" will change his name from curry to steph
*/
