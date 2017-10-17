console.log('Simple Tree');
drawTree(5);
console.log('Nice Tree');
drawNiceTree(5);

function drawTree(level) {
  'use strict';

  for (var i = 1; i <= level; i++) {
    var star = '';
    for (var j = 1; j <= i; j++) {
      star += '*';
    }
    console.log(star);
  }
}
function drawNiceTree(level) {
  'use strict';

  for (var i = 1; i <= level; i++) {
    var space = '';
    for (var j = 1; j <= level - i; j++) {
      space += ' ';
    }
    var star = '*';
    for (j = 1; j < i; j++) {
      star += '**';
    }
    console.log(space + star);
  }
}
