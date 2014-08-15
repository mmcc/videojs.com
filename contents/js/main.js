var $ = require('jquery');
var videojs = require('video.js');
var tm = require('./vendor/tweenmax');
var SM = require('scrollmagic')($, true);

function updateNav(section) {
  $('.home-nav li.active').removeClass('active');
  $('.home-nav li.'+ section).addClass('active');
}

function resetPlayer() {
  $('.video-js').removeClass('pink alt-bg large-font');
}


$(function() {
  // We'll need a reference to the video preview pretty mcuh the entire time.
  var preview = videojs('example-player');

  var controller = new SM({
    globalSceneOptions: {
      triggerHook: "onLeave"
    }
  });

  var homeNav = new ScrollScene({triggerElement: ".home-nav"})
    .setPin(".home-nav")
    .addTo(controller)
    .addIndicators();

  var player = new ScrollScene({triggerElement: ".video-preview"})
    .setPin(".video-preview")
    .addTo(controller)
    .addIndicators();

  // Now it's time for the actual feature panels!
  // We need a home panel just for the navigation switcher, but we might add
  // tween fanciness to it eventually anyway.
  var home = new ScrollScene({triggerElement: "#home" })
    .on("enter", function(e) {
      updateNav('home');
    })
    .addTo(controller)
    .addIndicators();

  // Customize
  var customizeTimeline = new TimelineMax();
  customizeTimeline.add(TweenMax.to("#customize .color, .vjs-default-skin", 1, {className: "+=pink"}));
  customizeTimeline.add(TweenMax.to("#customize .bg-color, .vjs-default-skin", 1, {className: "+=alt-bg"}));
  customizeTimeline.add(TweenMax.to("#customize .size, .vjs-default-skin", 1, {className: "+=large-font"}));

  var customize = new ScrollScene({triggerElement: "#customize", duration: 1000 })
    .setPin("#customize")
    .on("enter", function(e) {
      updateNav('customize');
    })
    .on("leave", function(e) {
      resetPlayer();
    })
    .setTween(customizeTimeline)
    .addTo(controller)
    .addIndicators();

  // Responsive
  var responsiveTimeline = new TimelineMax();

  var responsive = new ScrollScene({triggerElement: "#responsive", duration: 1000 })
    .setPin("#responsive")
    .on("enter", function(e) {
      updateNav('responsive');
    })
    .setTween(responsiveTimeline)
    .addTo(controller)
    .addIndicators();

  // Extend
  var extend = new ScrollScene({triggerElement: "#extend", duration: 1000 })
    .setPin("#extend")
    .on("enter", function(e) {
      updateNav('extend');
    })
    .addTo(controller)
    .addIndicators();

  // Strengths
  var strengths = new ScrollScene({triggerElement: "#strengths", duration: 1000 })
    .setPin("#strengths")
    .on("enter", function(e) {
      updateNav('strengths');
    })
    .addTo(controller)
    .addIndicators();

});
