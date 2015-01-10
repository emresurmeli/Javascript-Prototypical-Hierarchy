function Person(personality) {
  this.personality = personality;
}

function SuperHero(power, weakness) {
  this.power = power;
  this.weakness = weakness;
}
SuperHero.prototype = new Person ("idealistic");

function SuperVillian(power, weakness) {
  this.power = power;
  this.weakness = weakness;
}
SuperVillian.prototype = new Person ("evil");

function RealisticHero(identity, job) {
  this.identity = identity;
  this.job = job;
}
RealisticHero.prototype = new SuperHero ("technology", "fatal wounds");

function MagicalHero(magic, type) {
  this.magic = magic;
  this.type = type;
}
MagicalHero.prototype = new SuperHero ("sorcery", "old age");

function EvilGenius(problem, IQ) {
  this.problem = problem;
  this.IQ = IQ;
}
EvilGenius.prototype = new SuperVillian ("lightning", "stone");

var superman = new SuperHero ("flight", "kryptonite");
var batman = new RealisticHero ("Bruce Wayne", "Millionare Playboy");
var gandalf = new MagicalHero ("sorcery", "light");