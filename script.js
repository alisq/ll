let w=$(window).width();
let eW = $(".floor").width()*2-40;
console.log(w/eW)

$("#everything").css({
    "transform":"scale("+w/eW+")"
})


$("#everything").css({

})

$("#everything .column").each(function(){
    for (i=0;i<15;i++) {
    
        $("<div class='tile'></div>")
            .appendTo($(this))
    }
})

$("#everything2 .column").each(function(){
    for (i=0;i<50;i++) {
    
        $("<div class='tile'></div>")
            .appendTo($(this))
    }
})

dupeFloor();
$("#toggle-grid").click(function(){
    $("#grid1").addClass("active")
})

$("#reverse-colors").click(function(){
    $(".tile").each(function(){
        $(this).toggleClass("white")
    })
})


$(document).on("mouseover",".tile",function(e){
    if(e.buttons == 1 || e.buttons == 3){
        //do some stuff
        $(this).toggleClass("white")
        dupeFloor()
    }        
})


$(document).on("click",".tile",function(e){
        $(this).toggleClass("white")

        dupeFloor()

})


function dupeFloor() {
    var c = $("#floor1").html();
    // console.log(c)
    $("#floor2").html(c)
    $("#floor3").html(c)
    $("#floor4").html(c)


} 