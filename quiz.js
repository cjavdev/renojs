// var primitive1 = 'abc';
// var primitive2 = 'abc    ';
// console.log('prim1 == prim2 false', primitive1 == primitive2);
//
// var primitive1 = 'abc';
// var primitive2 = 'abc    ';
// console.log('prim1 === prim2 false', primitive1 === primitive2);
//
// var primitive1 = 123;
// var primitive2 = 123.0;
// primitive1 === primitive2;
// console.log('prim1 === prim2 true', primitive1 === primitive2);
//
// console.log('"a" > "B" && "B" > "A" true/false', "a" > "B" && "B" > "A");
//
//
// var obj1 = {a:1, b:2};
// var obj2 = {a:1, b:2};
// var obj3 = obj2;
// console.log('obj1 === obj2 && obj2 === obj3 false, 1true', obj1 === obj2 && obj2 === obj3);
// console.log('obj1 == obj2 && obj2 == obj3 false', obj1 == obj2 && obj2 == obj3);
//
// var obj1 = { a: 1 };
// var array1 = [obj1];
// obj1.a = 9;
// console.log('{a:1} - 2 votes { a:9 } - 2 votes', JSON.stringify(array1[0]));
//
// var obj1 = { a: 1 };
// var obj2 = { b: obj1.a };
// obj1.a = 9;
// console.log('{b: 9 } - 2 votes, {b:1} 4 vote', obj2);
//
//
// var x = y = Number("abc");
// console.log(x);
// console.log('false', x === y);
// var a = null;
//
// console.log('false false true stax');
// console.log('false true true cj');
// console.log(a > 0, a >= 0, a == 0);
//
var bar = function whoa() { console.log('vbar'); };
console.log(bar);
bar();
function bar() { console.log('fbar'); }
