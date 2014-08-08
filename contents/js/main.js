var $ = require('jquery');
var SM = require('scrollmagic')($, true);

function updateNav(section) {
  $('.home-nav li.active').removeClass('active');
  $('.home-nav li.'+ section).addClass('active');
}


$(function() {
  var controller = new SM();

  var scenes = {};

  scenes.nav = new ScrollScene({triggerElement: ".home-nav", triggerHook: 0})
                     .setPin(".home-nav")
                     .addTo(controller)
                     .addIndicators();

  scenes.preview = new ScrollScene({triggerElement: ".video-preview", triggerHook: 0})
                         .setPin(".video-preview")
                         .addTo(controller)
                         .addIndicators();

  scenes.customize = new ScrollScene({triggerElement: "#home", triggerHook: 0 })
                           .addTo(controller)
                           .on("enter", function(e) {
                             updateNav('home');
                           })
                           .addIndicators();

  scenes.customize = new ScrollScene({triggerElement: "#customize", duration: 500, triggerHook: 0 })
                           .setPin("#customize")
                           .addTo(controller)
                           .on("enter", function(e) {
                             updateNav('customize');
                           })
                           .addIndicators();

  scenes.responsive = new ScrollScene({triggerElement: "#responsive", duration: 500, triggerHook: 0 })
                            .setPin("#responsive")
                            .addTo(controller)
                            .on("enter", function(e) {
                              updateNav('responsive');
                            })
                            .addIndicators();

  scenes.extend = new ScrollScene({triggerElement: "#extend", duration: 500, triggerHook: 0 })
                        .setPin("#extend")
                        .addTo(controller)
                        .on("enter", function(e) {
                          updateNav('extend');
                        })
                        .addIndicators();

  scenes.extend = new ScrollScene({triggerElement: "#strengths", duration: 500, triggerHook: 0 })
                        .setPin("#strengths")
                        .addTo(controller)
                        .on("enter", function(e) {
                          updateNav('strengths');
                        })
                        .addIndicators();

});
