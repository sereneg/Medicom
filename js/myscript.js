var playing = true;
var shownText = false;
var shownChoices = false;
function showReplay(){
	$( "#playVideo" ).attr( "src", "glyphicons-86-repeat.png" );
	//$("#playVideo").text("Replay");
	playing = false;
}
function showChoices() {
	$(".overlay").fadeIn('slow');
	$( "#slideToggle" ).attr( "src", "glyphicons-213-arrow-down.png" );
	$("#showText").prop("disabled", false);
	shownChoices = true;
	
}

$("#slideToggle").click(function () {
   $(".overlay").slideToggle( "slow", function() {
    // Animation complete.
	if(shownChoices){  //open choices
		$( "#slideToggle" ).attr( "src", "glyphicons-214-arrow-up.png" );
		$("#showText").prop('disabled', true);
		shownChoices = false;
	}
	else{
		$( "#slideToggle" ).attr( "src", "glyphicons-213-arrow-down.png" );
		$("#showText").prop("disabled", false);
		shownChoices = true;
	}
	
  });
});
$("#playVideo").click(function (){
	if(playing){
		$("#video1").get(0).pause();
	//	$("#playVideo").text("Play!");
		$( "#playVideo" ).attr( "src", "glyphicons-174-play.png" );
		playing = false;
	}
	else{
		$("#video1").get(0).play();
		$( "#playVideo" ).attr( "src", "glyphicons-175-pause.png" );
		//$("#playVideo").text("Stop");
		playing = true;
	}
	
//	alert("clicked");
});
$("#showText").click(function (){
	if(!shownText){
		$("#transcript").show();
		$("#showText").text("hide texts");
		shownText = true;
	}
	else{
		$("#transcript").hide();
		$("#showText").text("show texts");
		shownText = false;
	}
});
function getAttention(elementClass, elementID,initialDistance, times, damping) {
	$('#'+elementID).show();
	for(var i=1;i<=times;i++){
		var an = Math.pow(-1,i)*initialDistance/(i*damping)+100;
		$('.'+elementClass).animate({'top':an},100);
	}
	  $('.'+elementClass).animate({'top':100},{
		duration: 1000,
		specialEasing: {
		  width: "linear",
		  height: "easeOutBounce"
		},
		complete: function() {
		$('#'+elementID).hide();
		}
	  });
  //
}


window.onload = function(){ 

	var addr = window.location;
	var pos = "?number=";
	var prefix_local = "http://localhost:8080/";
	var prefix_online = "http://medicom-demoag.rhcloud.com/";
	var page = addr.toString().substring(35,36);
	if(page == 2 || page == 5 || page == 8){
		getAttention("floatdiv","effectUp", 50, 10, 1.2);
	}
	if(page == 3 || page == 4 || page == 6){
		getAttention("floatdiv","effectDown", 50, 10, 1.2);
	}


	
}



$( "#test").click(function() {
	
	getAttention("floatdiv","effectUp", 50, 10, 1.2);
	
});
