detect={},detect.currentQueue="",detect.setQueue=function(e){$(".person").removeClass("highlight"),detect.currentQueue=e,ui.changeQueueContents(detect.currentQueue)},detect.startDetection=function(){$(".person").click(function(e){var t=$(e.target.closest(".person")).attr("name");detect.setCurrentPersonByIn(t),detect.setQueue("")}),$(document).keyup(function(e){27==e.keyCode&&(detect.setQueue(""),$(".person").removeClass("highlight"))}),$(document).keypress(function(e){"Enter"==e.key?detect.processQueue():e.key&&detect.setQueue(detect.currentQueue+e.key);try{detect.highlightPerson($(".person-"+detect.currentQueue))}catch(t){}})},detect.highlightPerson=function(e){$(".person").removeClass("highlight"),e.addClass("highlight")},detect.setCurrentPersonByIn=function(e){$(".person").removeClass("speaking"),$(".person-"+e).addClass("speaking"),timekeeper.setCurrentPerson(e)},detect.processQueue=function(){try{var e=$(".person-"+detect.currentQueue);e.hasClass("person")&&detect.setCurrentPersonByIn(detect.currentQueue)}catch(t){console.log("no such person!")}detect.setQueue("")},detect.start=function(){detect.startDetection()};