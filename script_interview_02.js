
//BELOW: code for the hover state that reveals the images

$(".daniellepicshover").hover(function(details){ // adding an event listener to poster pics hover + recording event information in a variable called "details" (which we just created)

	console.log(details.clientY) //inside this details variable is the information about where this mouse is, and the console is spitting it out

	$(".daniellepics")
		.css({
			"top":details.clientY
		}) //

 $(".daniellepics")
        .css({
            "top": 40, "left": 40, "position":'absolute'});


}, function() { //when you are no longer hovering.
	$(".daniellepics").attr("style","") //clear out the "style" attribute by filling it with nothing + it then goes m=back to the css style / placement
})



// BELOW: Code for the scroll to top


$("#top").on("click", function() {
    $(".box.two").scrollTop(0);
});



//BELOW: code for the slideshow

$(".daniellepics > div:gt(0)").hide();

setInterval(function() { 
  $('.daniellepics > div:first')
    .fadeOut(0)
    .next(1000)
    .fadeIn(0)
    .end()
    .appendTo('.daniellepics');
},  1500);



