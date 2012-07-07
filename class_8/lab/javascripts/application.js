$(document).ready( function() {

$("div.first_draggable").draggable({
snap: true,
appendTo: "body"})


$("div.second_draggable").draggable({
snap: true,
appendTo: "div.orange_background",
containment: "div.orange_background"
})


$("div.blue_box").droppable({
scope: "blue_box_scope",
tolerance: "touch",
drop: function( event, ui ) {
$( this ).addClass( "highlight" ).html( "Dropped!" );}	,
out: 
function( event, ui) { $( this ).removeClass("highlight").html("Drop it in here, just touching.") }			
})

$("div.third_draggable").draggable({
scope: "blue_box_scope"
})


$("div.blue_box").droppable({
scope: "blue_box_scope",
tolerance: "touch",
drop: function( event, ui ) {
$( this ).addClass( "highlight" ).html( "Dropped!" );}	,
out: 
function( event, ui) { $( this ).removeClass("highlight").html("Drop it in here, just touching.") }			
})

$("div.third_draggable").draggable({
appendTo: "div.blue_box",
scope: "blue_box_scope",
revert: "div.blue_box",
snap: true
})

$("div.red_box").droppable({
scope: "red_box_scope",
tolerance: "fit",
drop: function( event, ui ) {
$( this ).addClass( "highlight" ).html( "Dropped!" );}	,
out: 
function( event, ui) { $( this ).removeClass("highlight").html("Drop it in here, fully inside.") }			
})

$("div.fourth_draggable").draggable({
appendTo: "div.red_box",
scope: "red_box_scope",
revert: "div.red_box",
snap: true
})


$("ul.dates_sortable").sortable()


})