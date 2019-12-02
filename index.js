function passValue() 
{
	var artist = document.getElementById("artist").value;
	localStorage.setItem("artist",artist);
	var song = document.getElementById("song").value;
	localStorage.setItem("song",song);

	return false;

	
}