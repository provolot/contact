table={},table.makeJsPlumb=function(){jsPlumb.ready(function(){var a=jsPlumb.getInstance({PaintStyle:{lineWidth:3,strokeStyle:"#ffa500",dashstyle:"2 4"},Endpoint:["Dot",{radius:5}],EndpointStyle:{fillStyle:"#ffa500"},Container:"persondiv"}),t=jsPlumb.getSelector(".person");a.draggable(t),a.batch(function(){for(var e=0;e<t.length;e++)for(var n=e+1;n<t.length;n++)a.connect({source:t[e],target:t[n],anchor:"Center",endpoint:"Rectangle"})})})},table.makeTable=function(){_.forEach(people,function(a,t){var e=$("<div class='person'></div>"),n=$("<div class='person-inner'></div>"),o=$("<div class='initials'></div>");o.html(t.toUpperCase());var s=$("<div class='firstname'></div>");s.html(t),s.html(a.name.split(" ")[0]),o.appendTo(n),s.appendTo(n),n.appendTo(e),e.attr("name",t.toUpperCase()),e.addClass("person-"+t.toUpperCase()),e.appendTo("#persondiv"),e.addClass("draggable")})},table.updateDurations=function(a,t,e){console.log(t+" spoke to "+a+" for "+e/1e3+" seconds")},table.promptSaveLocations=function(){var a={};$(".person").each(function(t,e){var n=$(e).offset(),o=$(e).attr("name");a[o]=n}),alert(JSON.stringify(a))},table.promptLoadLocations=function(){var a=prompt("input Location String?");table.loadLocations(a)},table.loadLocations=function(a){locations=JSON.parse(a),console.log(locations),_.forEach(locations,function(a,t){$(".person-"+t).offset(a)})},table.start=function(){table.makeTable(),table.makeJsPlumb()};