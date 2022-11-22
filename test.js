var pattern = /a/;
cosole.log(pattern.exec('abcd'));  // a

var xi = /a/;
console.log("Abcd".match(xi)); // null

var oi = /a/i;
console.log("Abcd".match(oi)); // ["A"]

var xg = /a/;
console.log("abcd".match(xg)); // ["a"]

var og = /a/g;
console.log("abcd".match(xg)); // ["a","a"]

var ig = /a/ig;
console.log("AabcdAa".match(ig)); // ["A","a","A","a"]





