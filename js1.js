
       $(document).ready(function(){

        $("#header").hide();

        $("button").click(function(){
          $("#result").empty();
          $("#header").show();

          var url = "artist="+$("#artist").val()+"&track="+$("#song").val()+"&format=json";

          $.get("http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=469cc615f6bfc66a9099e461309d913f"+"&"+url, function(data){

          var x = data.track.album.image[3]["#text"];
          $(".main").append(x);
          $(".art").attr("src",x);


          });

          var artist="/"+$("#artist").val()+"/"+$("#song").val();
          
          
          $.get("https://api.lyrics.ovh/v1"+artist, function(data, status){
            var a=JSON.stringify(data);
            var b=JSON.parse(a);
            if(b==null)
            {
              document.write("No Lyric found");
              }
            else{

           b.lyrics.replace("\n", "&nbsp");
              
            $("#result").append(b.lyrics);
                       $("a[href^='#']").mouseleave(function(e) {
  e.preventDefault();
  
  var position = $($(this).attr("href")).offset().top;

  $("body, html").animate({
    scrollTop: position
  } /* speed */ );
});



            }


          
  });
});
});