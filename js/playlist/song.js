function Song(title, artist, duration) {
  this.title = title;
  this.artist = artist;
  this.duration = duration;
  this.isPlaying = false;
}

Song.prototype.play = function() {
  this.isPlaying = true;
};

Song.prototype.stop = function() {
  this.isPlaying = false;
};

Song.prototype.toHTML = function() {
  var htmlString = '';
  if (this.isPlaying) {
    htmlString = '<tr class="active">';
	}
    htmlString += '<td>' + this.title + '</td>';
    htmlString += '<td>' + this.artist + '</td>';
    htmlString += '<td>' + this.duration + '</td>';
    htmlString += '</tr>';
		
  return htmlString;
};
