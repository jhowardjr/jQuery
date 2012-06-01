$(document).ready( function() {
console.log($("input#flight_submit").attr("disabled",true));

console.log($("input#flight_name").blur(function(){ $("input#flight_submit").attr("disabled",false) }));

console.log($("ul li ul li").live('click',function(){ alert('Seat Selected'); }));

console.log($("ul#first_class li#row_1 ul").append("<li class=\"premium d\">D</li>"));
console.log($("ul#first_class li#row_2 ul").append("<li class=\"premium a\">A</li>"));
console.log($("ul#economy_class li#row_3 ul").append("<li class=\"f\">F</li>"));
console.log($("ul#economy_class li#row_4 ul").append("<li class=\"f\">F</li>"));
console.log($("ul#economy_class li#row_5 ul").append("<li class=\"f\">F</li>"));
console.log($("ul#economy_class li#row_6 ul").append("<li class=\"f\">F</li>"));

console.log($("ul li ul li").click(function(){ 
$("body").find("ul li ul li").removeClass("highlight");
$(this).toggleClass("highlight"); }));

console.log($("ul li ul li").mouseenter(function(){ $("div#seating_chart div div").html($(this).html()); }));

console.log($("ul li ul li").mouseleave(function(){ $("div#seating_chart div div").empty(); }));

});