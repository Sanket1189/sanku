$(".block.black").on("click",function(){
$("#title").addClass("title2");
$("#academic").addClass("title2");
$("#skills").addClass("title3");
$(".contact-div").addClass("title3");
// $(".footer").addClass("footer2");
$(".table").addClass("table-dark");
$(".na-it").addClass("na-it2");
$(".pag").attr("src","image/building5.png");
$(".profile").attr("src","image/profile2.png");
$(".groom").attr("src","image/groom2.png");
$(".horizon").attr("src","image/blackhr5.png");
$(".c-button").removeClass("btn1");
$(".c-button").addClass("btn btn-outline-light");

$(".laptop").attr("src","image/blaptop.png");
$(".brain").attr("src","image/bbrain.png");
$(".pallet").attr("src","image/bpallet.png");
$(".thumb").attr("src","image/bthumb.png");
$(".game").attr("src","image/bgame.png");
});

$(".block.blue").on("click",function(){
$("#title").removeClass("title2");
$("#academic").removeClass("title2");
$("#skills").removeClass("title3");
$(".contact-div").removeClass("title3");
// $(".footer").removeClass("footer2");
$(".table").removeClass("table-dark");
$(".na-it").removeClass("na-it2");
$(".profile").attr("src","image/profile9.png");
$(".pag").attr("src","image/pahad.png");
$(".groom").attr("src","image/groom.png");
$(".horizon").attr("src","image/bluehr3.png");
$(".c-button").removeClass("btn btn-outline-light");
$(".c-button").addClass("btn1");

$(".laptop").attr("src","image/code.png");
$(".brain").attr("src","image/brain.png");
$(".pallet").attr("src","image/painting.png");
$(".thumb").attr("src","image/thumps.png");
$(".game").attr("src","image/game.png");
});
