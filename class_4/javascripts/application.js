$(document).ready( function() {

$("div.ask-a-question").click(function(){
$("div.ask-a-question-form-container").slideToggle()
});

$("img.information").mouseenter(function(){
$("span.information_text").fadeIn();
});

$("img.information").mouseleave(function(){
$("span.information_text").fadeOut();
});

$("button#left").click(
function(){
$("div.blue_box").animate(
{width: 50})});

$("button#right").click(
function(){
$("div.blue_box").animate(
{width: 100})});

$("div.red_box").animate(
{width: 500, height: 500},2000, function(){
$("div.red_box").animate(
{width: 100, height: 19},2000);
});








});
