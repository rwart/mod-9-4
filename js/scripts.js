var a = 0;
var b = 0;
var value = 0;
a = prompt('wprowadź a');
b = prompt('wprowadź b');
value = a * a - b * b;
if (value > 0) {
  console.log('wynik dodatni = ' + value);
} else if (value < 0) {
  console.log('wynik ujemny = ' + value);
} else {
  console.log('wynik równy zero');
}
