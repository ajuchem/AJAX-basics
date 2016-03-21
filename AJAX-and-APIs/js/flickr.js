$(document).ready(function(){
  $("button").click(function(){
    $("button").removeClass("selected");
    $(this).addClass("selected");
    var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    var animal = $(this).text();
    var flickrOptions = {
      tags: animal,
      format: "json"
    } // end flickrOptions
    function displayPhotos(data){

    } // end displayPhotos
    $.getJSON(flickerAPI, flickrOptions, displayPhotos);
  }); // end click
}); // end ready
