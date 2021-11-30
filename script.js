$(".column").each(function(){
    for (i=0;i<100;i++) {
        $("<div class='tile'></div>")
            .appendTo($(this))
    }
})

$(document).on("mouseover",".tile",function(e){
    if(e.buttons == 1 || e.buttons == 3){
        //do some stuff
        $(this).toggleClass("white")
    }        
})


$(document).on("click",".tile",function(e){
        $(this).toggleClass("white")
      
})