$(document).ready(function(){



	var x = localStorage.getItem("artist");
	
	var y = localStorage.getItem("song");

	var searchTerm = x;

	

	var searchUrl = "https://api.genius.com/search?q="+searchTerm+"&access_token=xztg_g4AR_huDggN5U2gTRe-Qpt-4eOpGLYRDW9JfbdH6zwXDMmbRM8rpm4WsXCa";

	

	$.getJSON(searchUrl,function(data)
	{
		
		var artistUrl = data.response.hits[0].result.primary_artist.url;

		$("#genius").attr("href",artistUrl);

			

  		var artId = data.response.hits[0].result.primary_artist.id;

  		var socialUrl = "https://api.genius.com/artists/"+artId+"?access_token=xztg_g4AR_huDggN5U2gTRe-Qpt-4eOpGLYRDW9JfbdH6zwXDMmbRM8rpm4WsXCa";
  		
  		$.getJSON(socialUrl,function(data)
  		{
  			var fb = data.response.artist.facebook_name;
  			var ig =  data.response.artist.instagram_name;
  			var tw =  data.response.artist.twitter_name;

  			var urlFb = "https://www.facebook.com/"+fb;
  			var urlIg = "https://www.instagram.com/"+ig;
  			var urlTw = "https://twitter.com/"+tw;

  			$(".fb").attr("href",urlFb);
  			$(".ig").attr("href",urlIg);
  			$(".tw").attr("href",urlTw);



  		});
		
		(function(w, d){
   var id='embedly-platform', n = 'script';
   if (!d.getElementById(id)){
     w.embedly = w.embedly || function() {(w.embedly.q = w.embedly.q || []).push(arguments);};
     var e = d.createElement(n); e.id = id; e.async=1;
     e.src = ('https:' === document.location.protocol ? 'https' : 'http') + '://cdn.embedly.com/widgets/platform.js';
     var s = d.getElementsByTagName(n)[0];
     s.parentNode.insertBefore(e, s);
   }
  })(window, document);


		

	});

});
