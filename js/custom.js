function updateoutput(){
    $("iframe" ).contents().find("html").html("<html><head><style type='text/css'>" 
    + $("#cssPanel").val() + "</style></head><body>" +
    $("#htmlPanel").val() + "</body></html>");
document.getElementById("outputPanel").contentWindow.eval
($("#javascriptPanel").val())
};



$(".togglebutton").hover(function(){
    $(this).addClass("highlighted");
},function(){
    $(this).removeClass("highlighted");
})
$(".togglebutton").click(function(){
     $(this).toggleClass("active");
     $(this).removeClass("highlighted");
    var panelid = $(this).attr('id') + "Panel";
   $("#" + panelid).toggleClass('hidden'); 
   var numofactive = 4- $(".hidden").length;
   $(".panel").width(($(window).width() /numofactive)-10);

})
$(".panel").height($(window).height() - $("#header").height()- 15);
$(".panel").width(($(window).width() /2)-10);

updateoutput();
$("textarea").on("change keyup paste", function(){
updateoutput();

});