
//BELOW: code for the hover state that reveals the images

$(".posterpicshover").hover(function(details){ // adding an event listener to poster pics hover + recording event information in a variable called "details" (which we just created)

	console.log(details.clientY) //inside this details variable is the information about where this mouse is, and the console is spitting it out

	$(".posterpic")
		.css({
			"top":details.clientY
		}) //

 $(".posterpic")
        .css({
            "top": 30, "left": 30, "position":'absolute'});

}, function() { //when you are no longer hovering.
	$(".posterpic").attr("style","") //clear out the "style" attribute by filling it with nothing + it then goes m=back to the css style / placement
})



// BELOW: Code for the scroll to top


$("#top").on("click", function() {
    $(".box.one").scrollTop(0);
});



//BELOW: code for the slideshow

$(".posterpic > div:gt(0)").hide();

setInterval(function() { 
  $('.posterpic > div:first')
    .fadeOut(0)
    .next(1000)
    .fadeIn(0)
    .end()
    .appendTo('.posterpic');
},  1200);



