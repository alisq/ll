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
    
        $("<div class='tile tile-"+i+"'></div>")
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


const parsedUrl = new URL(window.location.href);



generateFloor(parsedUrl.searchParams.get("cols"), parsedUrl.searchParams.get("rows"))
$("#generate").click(function(){

        cols = $("#cols").val();
        rows = $("#rows").val();
        generateFloor(cols, rows)
      
})


function dupeFloor() {
    var c = $("#floor1").html();
    // console.log(c)
    $("#floor2").html(c)
    $("#floor3").html(c)
    $("#floor4").html(c)


} 


function generateFloor(cols, rows) {
    url="index3.html?cols="+cols+"&rows="+rows;
    console.log(url)
    
    window.history.replaceState('page2', 'Title', url);
    if (cols > 100) { cols = 100}
    if (rows > 100) { rows = 100}
    for (i=0;i<cols;i++) {
        offset = "";
        if (i % 2 === 1) {
            offset = " offset"
        }
        $("<div class='column"+offset+" column-'"+i+"'></div>")
                .html(function(){
                    var tiles = "";
                    for (j=0;j<rows;j++) {
                        tiles+="<div class='tile'></div>";
                    }
                    j=0;
                    return tiles;
                    
                })
                .appendTo("#floor1");
                dupeFloor();

                $("#floor2").css({
                    top:$("#floor1").height()-40
                })

                $("#floor3").css({
                    left:$("#floor1").width()-30
                })

                $("#floor4").css({
                    top:rows*39,
                    left:$("#floor1").width()-30
                })
    }
}