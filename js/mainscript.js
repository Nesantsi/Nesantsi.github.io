$(document).ready(function() {

    var kkeys = [], konami = "80,82,69,69,78,70,79,82,83,65,84,65,78";
    $(document).keydown(function(e) {
      kkeys.push( e.keyCode );
      if ( kkeys.toString().indexOf( konami ) >= 0 ) {
        $(document).unbind('keydown',arguments.callee);
        // do something funny
        alert("Into the fire, into the flames...");
        var url = "SB-129.html";
        $(location).attr('href',url);
      }
    });

});