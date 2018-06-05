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


var loca = ["tilted towers Ls", "tilted towers clocktower", "tilted towers basketball court",
"snobby shores", "retail row black tops", "retail row houses", "risky reels houses",
"risky reels billboard", "wailing woods maze", "the stacks", "vermont", "lucky landing",
"center loot lake", "loot lake factories", "loot lake modern house", "lonely lodge",
"flush factory", "moisty mire", "prison", "haunted hills", "junk junction", "soccer field",
"dusty divot", "tomato town", "greasy grove", "motel", "vermont", "prof x's", "mountain lair",
"mountain lair", "castle rock"];
// var loot = ["scar", "mini", "port-a-fort"];
var death = ["win with 0 kills", "get carried by an 11 year old", "get your pr in the first 5 minutes",
"die within 20 seconds", "die in a tac-off", "get ramp rushed", "take the L hard",
"win late game tilted. die at loot lake", "consume 7 crack rocks", "die", "die",
"die", "die", "die", "take the L in the storm"];
var images = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png",
 "9.png", "10.png", "11.png", "12.png", "13.png", "14.png", "15.png", "16.png",
 "17.png", "18.png", "19.png", "20.png", "21.png", "22.png", "23.png", "24.png",
 "25.png", "26.png", "27.png", "28.png", "29.png", "30.png", "31.png", "32.png",
 "33.png", "34.png", "35.png", "36.png", "37.png", "38.png", "39.png", "40.png",
 "41.png", "42.png", "43.png", "44.png", "45.png", "46.png", "47.png", "48.png",
 "49.png", "50.png", "51.png", "52.png", "53.png", "54.png", "55.png", "56.png",
 "57.png", "58.png", "59.png", "60.png", "61.png", "62.png", "63.png", "64.png",
 "65.png", "66.png", "67.png", "68.png", "69.png", "70.png", "71.png", "72.png",
 "73.png", "74.png", "75.png", "76.png", "77.png"];

function randomText() {
  $(".hidden").removeClass("hidden");

  var locaIndex = Math.floor(Math.random()*loca.length);
  var locaValue = loca[locaIndex];
  $("#result1").html(locaValue);

  // var lootIndex = Math.floor(Math.random()*loot.length);
  // var lootValue = loot[lootIndex];
  // $("#result2").html(lootValue);

  var deathIndex = Math.floor(Math.random()*death.length);
  var deathValue = death[deathIndex];
  $("#result3").html(deathValue);

  var imagesIndex = Math.floor(Math.random()*images.length);
  var imagesValue = images[imagesIndex];
  $("#img1").attr("src", imagesValue);

  var imagesIndex = Math.floor(Math.random()*images.length);
  var imagesValue = images[imagesIndex];
  $("#img2").attr("src", imagesValue);

  var imagesIndex = Math.floor(Math.random()*images.length);
  var imagesValue = images[imagesIndex];
  $("#img3").attr("src", imagesValue);

  var imagesIndex = Math.floor(Math.random()*images.length);
  var imagesValue = images[imagesIndex];
  $("#img4").attr("src", imagesValue);

  var imagesIndex = Math.floor(Math.random()*images.length);
  var imagesValue = images[imagesIndex];
  $("#img5").attr("src", imagesValue);
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
