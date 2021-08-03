// Class Example.
class NbaPlayer {
  // you need a constructor function.
  constructor(name, position, team) {
    this.name = name;
    this.position = position;
    this.team = team;
  }
}

let curry = new NbaPlayer("Steph Curry", "Point Gaurd", "GS Warriors");
console.log(curry.team);
