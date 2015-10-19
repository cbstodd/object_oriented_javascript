var playlist = new Playlist();

var twilite = new Song("Dead City Radio", "Earthtone", "2:30");
var newManhattan = new Song("New Manhattan", "Earthtone", "4:36");
var theCold = new Song("The Cold", "Earthtone", "4:27");
var sadTimes = new Song("Sad Times", "Earthtone", "8:05");
var deathInTheAfternoon = new Song("Death In The Afternoon", "Earthtone", "3:09");

playlist.add(twilite);
playlist.add(newManhattan);
playlist.add(theCold);
playlist.add(sadTimes);
playlist.add(deathInTheAfternoon);

var playlistElement = document.getElementById('playlist');
playlist.renderInElement(playlistElement);

var playButton = document.getElementById('play');
var nextButton = document.getElementById('next');
var stopButton = document.getElementById('stop');

playButton.onclick = function () {
  playlist.play();
  playlist.renderInElement(playlistElement);
  //Updates the que after clicking button.
};

nextButton.onclick = function () {
  playlist.next();
  playlist.renderInElement(playlistElement);
};

stopButton.onclick = function () {
  playlist.stop();
  playlist.renderInElement(playlistElement);
};
