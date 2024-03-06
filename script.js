var x = 5; //Column
var y = 4; //Row

//Tile generator
var tileRow = '<ul class=\'tileRow\'></ul>';
for (i = 1; i <= y; i++) {
  $('#playingBoard').append(tileRow);
}

var tileColumn = '<li><div class=\'tile\'><div class=\'tile-front\'></div><div class=\'tile-back\'></div></div></li>';
for (i = 1; i <= x; i++) {
  $('.tileRow').append(tileColumn);
}

var tileArray = [];
$('.tile').each(function() {
  tileArray.push($(this).children('.tile-back')[0]); //[0] converts jQuery object to DOM element
});

// Fisher-Yates shuffle
function shuffle(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
var colorArray = ["orange", "orange", "pink", "pink", "red", "red", "purple", "purple",
  "blue", "blue", "green", "green", "brown", "brown", "yellow", "yellow", "orange", "orange", "pink", "pink", "red", "red", "purple", "purple",
  "blue", "blue", "green", "green", "brown", "brown", "yellow", "yellow"
];

shuffle(colorArray);

while (tileArray.length > 0) {
  tileArray[0].style.backgroundColor = colorArray[i];
  colorArray.splice(i, 1);
  tileArray = [].slice.call(tileArray, 1);
}

//Click2flip
var tileActive = $('.tile').length;

function tileClickControl() {
  var tileActive = $('.active').length;
  if (tileActive < 2) {
    $(this).toggleClass('active');
    return tileActive;
  } else {
    $('.tile').removeClass('active');
    $(this).toggleClass('active');
    return tileActive;
  }
}

$('.tile').click(tileClickControl);