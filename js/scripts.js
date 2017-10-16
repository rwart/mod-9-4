function drawTree(level) {
  'use strict';
  var i = 1;
  var j = 1;
  var star = '';

  for (i = 1; i <= level; i++) {
    star = '';
    for (j = 1; j <= i; j++) {
      star += '*';
    }
    console.log(star);
  }
}
function drawNiceTree(level) {
  'use strict';
  var i = 1;
  var j = 1;
  var star = '*';
  var space = '';

  for (i = 1; i <= level; i++) {
    space = '';
    for (j = 1; j <= level - i; j++) {
      space += ' ';
    }
    star = '*';
    for (j = 1; j < i; j++) {
      star += '**';
    }
    console.log(space + star);
  }
}
