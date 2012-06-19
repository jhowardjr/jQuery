$(document).ready( function() {
console.log($("li.premium"))
console.log($("div#seating_chart"));
console.log($("ul#economy_class"));
console.log($("li.a"));
console.log($("li.b, li.c"));
console.log($("ul li"));
console.log($("ul#first_class li"));
console.log($("div ul#first_class li ul li"));
console.log($("ul li ul li"));
console.log($("div ul li:first"));
console.log($("div ul li ul li:last"));
console.log($("div > ul#first_class, div > ul#economy_class"));
console.log($("ul#economy_class > li"));
console.log($("ul#economy_class > li:first, ul#first_class > li:first"));
console.log($("li.a, ul#first_class li.d, ul#economy_class li.f"));
console.log($("ul#first_class li.b, li.c, ul#economy_class li.d"));
});