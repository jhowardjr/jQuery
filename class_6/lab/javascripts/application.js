$(document).ready( function() {


$("img.information").qtip({
content: "This is an example", 
show: "mouseover",
hide: "mouseout"
});

$("table.tablesorter").tablesorter({});



$("select.football_team").chosen({allow_single_deselect: true});

$("").sayHello();

	
})