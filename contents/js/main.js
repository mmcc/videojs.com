var $ = require('jquery');
var SM = require('scrollmagic')($, true);

var controller = new SM();

var scene = new ScrollScene({triggerElement: ".video-preview", triggerHook: 0})
                  .setPin(".video-preview")
                  .addTo(controller);

scene.addIndicators();
