var $          = require('jquery');
var videojs    = require('video.js');
var prism      = require('./vendor/prism');
var tm         = require('./vendor/tweenmax');
var SM         = require('scrollmagic')($, true);

// Stuff that isn't playing nice with Browserify
// Until we get Foundation playing nice with browserify, export jQuery as a global.
window.jQuery = $;
// var vjsYoutube = require('./vendor/vjs-youtube');

function updateNav(section) {
  $('.home-nav li.active').removeClass('active');
  $('.home-nav li.'+ section).addClass('active');
}


$(function() {
  // We'll need a reference to the video preview pretty mcuh the entire time.
  var preview = videojs('example-player', { techOrder: ['youtube', 'html5', 'flash']});

  var controller = new SM({
    globalSceneOptions: {
      triggerHook: "onLeave"
    }
  });

  var homeNav = new ScrollScene({triggerElement: ".home-nav"})
    .setPin(".home-nav")
    .addTo(controller)
    .addIndicators();

  var playerScene = new ScrollScene({triggerElement: ".video-preview"})
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

  // Extend
  function addYoutubeSrc() {
    preview.src({ src: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', type: 'video/youtube' });
    preview.volume(0); // If we're going to autoplay, let's at least be nice about it :)
    preview.play();

    // if someone hasn't paused by now, do it for them
    setTimeout(function() {
      preview.pause();
    }, 5000);
  }
  function removeYoutubeSrc() {
    preview.src([
      { src: 'http://vjs.zencdn.net/v/oceans.mp4', type: 'video/mp4'},
      { src: 'http://vjs.zencdn.net/v/oceans.webm', type: 'video/webm'}
    ]);
  }

  var extendTimeline = new TimelineMax();
  extendTimeline.add(TweenMax.to("#extend .techs", 1, {opacity: 1, onStart: addYoutubeSrc, onReverseComplete: removeYoutubeSrc}));
  extendTimeline.add(TweenMax.to("#extend .custom", 1, {opacity: 1}));

  var extend = new ScrollScene({triggerElement: "#extend", duration: 2000 })
    .setPin("#extend")
    .on("enter", function(e) {
      updateNav('extend');
    })
    .setTween(extendTimeline)
    .addTo(controller)
    .addIndicators();

  // Strengths
  var strengthsTimeline = new TimelineMax();
  strengthsTimeline.add(TweenMax.to("#strengths .bulb", 1, {opacity: 1}));
  strengthsTimeline.add(TweenMax.to("#strengths .access", 1, {opacity: 1}));
  strengthsTimeline.add(function() { playerScene.removePin(); });

  var strengths = new ScrollScene({triggerElement: "#strengths", duration: 1000 })
    .setPin("#strengths")
    .on("enter", function(e) {
      updateNav('strengths');
    })
    .setTween(strengthsTimeline)
    .addTo(controller)
    .addIndicators();
});
