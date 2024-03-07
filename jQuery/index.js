
//$("h1").text("Bye")

$("button").html("<em>pls click me</em>")

$("h1").hasClass("margin-50")

//attributes

$("img").attr("src")

$("a").attr("href", "htt")

//eventListeners

$("h1").click(function() {
    $("h1").css("color", "purple")
})

$(document).keypress(function(event){
    $("h1").text(event.key);
})

$(document).on("mouseover", function() {
    $("h1").css("color", "purple")
})

//add and remove with jquery
