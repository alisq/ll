let w=$(window).width();
let eW = $(".floor").width()*2-40;


$("#everything").css({
    "transform":"scale("+w/eW+")"
})



$("#everything .column").each(function(){
    for (i=0;i<15;i++) {
        $("<div class='tile'></div>")
            .appendTo($(this))
    }
})

$("#toggle-grid").click(function(){
    $("#grid1").toggleClass("active")
})

$("#everything2 .column").each(function(){
    for (i=0;i<55;i++) {
        $("<div class='tile'></div>")
            .appendTo($(this))
    }
})
dupeFloor();

$("#generate").click(function(){
    cols=$("#cols").val()
    rows=$("#rows").val()
    for (i=0;i<cols.length;i++) {
        offset="";
        if (i%2===0) {
            offset="";
        } else {
            offset="offset"
        }
        $("<div class='column "+offset+"'></div>")
        .appendTo("#everything3")
            
    }
    
})


$(document).on("mouseover",".tile",function(e){
    if(e.buttons == 1 || e.buttons == 3){
        //do some stuff
        $(this).toggleClass("white")
        dupeFloor()
    }        
})


$(document).on("click",".tile",function(e){
    
        $(this).toggleClass("white");
        dupeFloor()
      
})


function dupeFloor() {
    var c = $("#everything #floor1").html();
    // console.log(c)
    $("#everything #floor2").html(c)
    $("#everything #floor3").html(c)
    $("#everything #floor4").html(c)


}