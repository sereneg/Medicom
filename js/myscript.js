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