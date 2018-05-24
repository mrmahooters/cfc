// (function($) {
//     function startTrigger(e) {
//         var $elem = $(this);
//         $elem.data('mouseheld_timeout', setTimeout(function() {
//             $elem.trigger('mouseheld');
//         }, e.data));
//     }
//
//     function stopTrigger() {
//         var $elem = $(this);
//         clearTimeout($elem.data('mouseheld_timeout'));
//     }
//
//
//     var mouseheld = $.event.special.mouseheld = {
//         setup: function(data) {
//             // the first binding of a mouseheld event on an element will trigger this
//             // lets bind our event handlers
//             var $this = $(this);
//             $this.bind('mousedown', +data || mouseheld.time, startTrigger);
//             $this.bind('mouseleave mouseup', stopTrigger);
//         },
//         teardown: function() {
//             var $this = $(this);
//             $this.unbind('mousedown', startTrigger);
//             $this.unbind('mouseleave mouseup', stopTrigger);
//         },
//         time: 750 // default to 750ms
//     };
// })(jQuery);
//
// // usage
// $("div").bind('mouseheld', function(e) {
//     console.log('Held', e);
// })


// function randomFortune(){
//   $(".locationList").addClass("hidden");
//   $(".lootList").addClass("hidden");
//   $(".deathList").addClass("hidden");
//
//   var randomNumber1 = Math.floor(Math.random()*4+1)
//   var randomNumber2 = Math.floor(Math.random()*3+1)
//   var randomNumber3 = Math.floor(Math.random()*3+1)
//
// $("#location" + randomNumber1).removeClass("hidden");
// $("#loot" + randomNumber2).removeClass("hidden");
// $("#death" + randomNumber3).removeClass("hidden");
// }
//
// $("#button").click(randomFortune);
//
//
// function fortuneMode(){
//   $("#menu").removeClass("hidden");
// }
// $("#button").click(fortuneMode);


var loca = ["tilted towers", "snobby shores", "retail row", "risky reels", "wailing woods",
"the stacks", "vermont", "lucky landing", "loot lake", "lonely lodge", "flush factory", "moisty mire",
"prison", "haunted hills", "junk junction", "soccer field", "dusty divot",
"tomato town", "greasy grove", "motel"];
var loot = ["scar", "mini", "port-a-fort"];
var death = ["win", "die in wailing", "die from the storm"];

function randomText() {
  $(".hidden").removeClass("hidden");

  var locaIndex = Math.floor(Math.random()*loca.length);
  var locaValue = loca[locaIndex];
  $("#result1").html(locaValue);

  var lootIndex = Math.floor(Math.random()*loot.length);
  var lootValue = loot[lootIndex];
  $("#result2").html(lootValue);

  var deathIndex = Math.floor(Math.random()*death.length);
  var deathValue = death[deathIndex];
  $("#result3").html(deathValue);
}
$("#button").click(randomText);

function getFortune() {
  $("#button").removeClass("smol");
}
$("#button").click(getFortune);


var isFullscreen = 0;
function fullImage(){
  isFullscreen = isFullscreen + 1;
  if (isFullscreen == 1){
    $(this).addClass("fullScreen");
  }
  if (isFullscreen == 2){
    $(this).removeClass("fullScreen");
    isFullscreen = 0;
  }
}
$("#map").click(fullImage);
