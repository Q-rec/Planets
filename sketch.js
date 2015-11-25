var planets;
function preload(){
planets = loadJSON("planets.json");
}

function setup() {
createCanvas (500,500);

//console.log(planets);

var planets=[];
var name=[];
var moons=[];

for (var key in planets){
  name.push(planets[key].name)
  moons.push(planets[key].moons)
  console.log(moons)
}
var x= 0
var step = width/name.length;
for(var i = 0; i < moons.length; i++){
  text(moons[i],x,(height/2) - 10);
  //rect(x,height/2 ,tiles[i],tiles[i]);
  //ellipse(x,height/2 ,values[i],values[i]);
x+=step
}

}
function draw() {

}
