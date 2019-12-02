$(document).ready(function(){

	var x = localStorage.getItem("artist");
	
	var y = localStorage.getItem("song");

  var query = x+" "+y;



  var mainUrl = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q="+query+"&type=video&videoDefinition=any&videoEmbeddable=true&key=AIzaSyCNhgP9oit2XHLiYbRWVX860Y7riCryRbU";

  $.getJSON(mainUrl,function(data)
  {
    
    var vid = data.items[0].id.videoId;
    var embedVideo = "https://www.youtube-nocookie.com/embed/"+vid;
    $(".vid").attr("src",embedVideo);
    
  });


	var url = "artist="+x+"&track="+y+"&format=json";
	var artist="/"+x+"/"+y;
  var appleMusic = "https://itunes.apple.com/search?term="+x+"+"+y+"&explicit=yes&limit=2";
 
 
  $.getJSON(appleMusic,function(data)
  {
      var trackUrl = data.results[1].trackViewUrl;
      var alName = trackUrl.split("/");

      var embedUrl = "https://embed.music.apple.com/us/album/"+alName[5]+"/"+data.results[1].collectionId+"?i="+data.results[1].trackId+"&app=music";
      console.log(embedUrl);
      $(".embed").attr("src",embedUrl);
  });

	$.get("https://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=469cc615f6bfc66a9099e461309d913f"+"&"+url, function(data){

          var x = data.track.album.image[3]["#text"];
          var name = data.track.name;

          //$(".main").append(x);
          $(".art").attr("src",x);
          $("#artName").append(name).append("<br>&nbsp"+data.track.artist.name);



          });
	$.get("https://api.lyrics.ovh/v1"+artist, function(data, status){
            var a=JSON.stringify(data);
            var b=JSON.parse(a);
            if(b==null)
            {
              alert("No Lyric found");
              }
            else{

              b.lyrics = lyrics = b.lyrics.replace(/\n/g, "<br />");
              
            $("#lyric").append(b.lyrics);
        }
        
    });
});

