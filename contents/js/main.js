var $ = require('jquery');
var videojs = require('video.js');
var tm = require('./vendor/tweenmax');
var SM = require('scrollmagic')($, true);

function updateNav(section) {
  $('.home-nav li.active').removeClass('active');
  $('.home-nav li.'+ section).addClass('active');
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

  // Tear everything down
  customizeTimeline.add(TweenMax.to("#customize .size, .vjs-default-skin", 0.2, {className: "-=large-font"}), "+=2");
  customizeTimeline.add(TweenMax.to("#customize .size, .vjs-default-skin", 0.2, {className: "-=alt-bg"}));
  customizeTimeline.add(TweenMax.to("#customize .size, .vjs-default-skin", 0.2, {className: "-=pink"}));

  var customize = new ScrollScene({triggerElement: "#customize", duration: 3000 })
    .setPin("#customize")
    .on("enter", function(e) {
      updateNav('customize');
    })
    .setTween(customizeTimeline)
    .addTo(controller)
    .addIndicators();

  // Responsive
  var responsiveTimeline = new TimelineMax();
  responsiveTimeline.add([
    TweenMax.to("#responsive .desktop", 1, {opacity: 1}),
    TweenMax.to(".video-preview .video-wrapper", 1, {className: "+=desktop-browser"})
  ]);
  // Quickly remove the browser class so we can add the mobile styles
  responsiveTimeline.add(TweenMax.to(".video-wrapper", 0.5, {className: "-=desktop-browser"}), "+=2");
  responsiveTimeline.add([
    TweenMax.to("#responsive .mobile", 1, {opacity: 1}),
    TweenMax.to(".video-preview .video-wrapper", 1, {className: "+=mobile-device"})
  ]);
  // Tear down the mobile styles so we can get back to normal
  responsiveTimeline.add(TweenMax.to(".video-wrapper", 0.5, {className: "-=mobile-device"}), "+=2");

  var responsive = new ScrollScene({triggerElement: "#responsive", duration: 3000 })
    .setPin("#responsive")
    .on("enter", function(e) {
      updateNav('responsive');
    })
    .setTween(responsiveTimeline)
    .addTo(controller)
    .addIndicators();

  var extendTimeline = new TimelineMax();


  // Extend
  var extend = new ScrollScene({triggerElement: "#extend", duration: 1000 })
    .setPin("#extend")
    .on("enter", function(e) {
      updateNav('extend');
    })
    .setTween(extendTimeline)
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
