// One Person class to rule them all
function Person(personality) {
  this.personality = personality;
}

// SuperHero is a child of Person as well as the parent
// of RealisticHero and MagicalHero
function SuperHero(power, weakness) {
  this.power = power;
  this.weakness = weakness;
}
SuperHero.prototype = new Person ("idealistic");

// SuperVillian is a child of Person as well as the 
// parent of EvilGenius 
function SuperVillian(power, weakness) {
  this.power = power;
  this.weakness = weakness;
}
SuperVillian.prototype = new Person ("evil");

// RealisticHero is a child of SuperHero and the sibiling
// of RealisticHero
function RealisticHero(identity, job) {
  this.identity = identity;
  this.job = job;
}
RealisticHero.prototype = new SuperHero ("technology", "fatal wounds");

// MagicalHero is the child of SuperHero and the sibiling 
// of RealisticHero
function MagicalHero(magic, type) {
  this.magic = magic;
  this.type = type;
}
MagicalHero.prototype = new SuperHero ("sorcery", "old age");

// EvilGenius is a child of SuperVillian
function EvilGenius(problem, IQ) {
  // Here the power attribute which is inherited from 
  // SuperVillian is overridden 
  this.power = "intelligence"
  this.problem = problem;
  this.IQ = IQ;
}
EvilGenius.prototype = new SuperVillian ("lightning", "stone");

// Three instances 
var superman = new SuperHero ("flight", "kryptonite");
var batman = new RealisticHero ("Bruce Wayne", "Millionare Playboy");
var gandalf = new MagicalHero ("sorcery", "light");