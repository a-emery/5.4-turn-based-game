//Create a constructor --prototype for the enemies and something to generate //them.  a prototype that does an attack  name health and damage, winning tag //line.

// Pick a Random enemy using a the damage value and a random number generator
//var enemy-array =[sedated-jake, pithy-jake, wu-tang-jake]
var pick-enemy = _.filter([sedated-jake, pithy-jake, wu-tang-jake],
    function(person){
      return person _.random(1, 3) === this.damage;
});




function Enemy(options){
  this.name = options.name;
  this.greeting = options.greeting;
  this.damage = options.damage;
  this.brag = options.brag;
}


var wu-tang-jake = new Enemy({
  name = "Wu-Tang Jake",
  greeting="May the Wu be with you.",
  damage = 3,
  brag = "Wu Tang Jake ain't nothing to mess with!",
  currentHealth = ,
  maxHealth = ,
  currentPower = ,
  startingPower = ,
});


var pithy-jake = new Enemy({
  name = "Pithy Jake",
  greeting = "No judgements here",
  damage = 2,
  brag = "I told you to follow your heart...not lose your head!"
  currentHealth = ,
  maxHealth = ,
  currentPower = ,
  startingPower = ,
});

var sedated-jake = new Enemy({
  name = "Sedated Jake"
  greeting = "Sorry I'm late, I just woke up.  Prepare to die."
  damage = 1,
  brag = "I can't believe I got out of bed for this."
  currentHealth = ,
  maxHealth = ,
  currentPower = ,
  startingPower = ,
});









// var models = require('models');
// var views = require('views');
//
// $(document).ready(function(){
//   $('body').prepend(JST.application());
//
//   var view = new PostsView();
//
//   $(document).on('posts:fetched', function(event, posts){
//     view.showPosts(posts);
//   });
//
//   Post.fetch();
// });
