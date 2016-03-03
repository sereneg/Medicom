/**
 * add selected sequence on the log.html page
 * 
 */

// intro
$( ".selectintro" ).click(function() {

	
	var page = $(this).attr('value');
	
	var oldlog = "0";
	var newlog = "0";

	if(readCookie("logintro") != null) { //has cookie
		oldlog = readCookie("logintro");
		newlog = oldlog + ":"+page;
	
	}
	else {
		newlog = page;
	}

	createCookie("logintro",newlog,1);
	
	if(page == 11){   // go to history taking  seq1
		window.location="/seq";
	}
	else if (page == 12){   // go to history taking  seq2
			window.location="/seq?number=2";
	}

	else{
		window.location="/intro?number="+page;
	}
});
// history taking
$( ".selectseq" ).click(function() {

		
	var page = $(this).attr('value');
	var oldlog = "0";
	var newlog = "0";

	if(readCookie("log") != null) { //has cookie
		oldlog = readCookie("log");
		newlog = oldlog + ":"+page;
	
	}
	else {
		newlog = page;
	}

	createCookie("log",newlog,1);
	//window.location ="s"+page+".html";
	if (page == 16){   // go to treatment plan
			window.location="/plan";
	}
	else{
		window.location="/seq?number="+page;
	}
});
//treatment plan 


$( ".selectplan" ).click(function() {
		
	var page = $(this).attr('value');
	var oldlog = "0";
	var newlog = "0";

	if(readCookie("logpt") != null) { //has cookie
		oldlog = readCookie("logpt");
		newlog = oldlog + ":"+page;
	
	}
	else {
		newlog = page;
	}

	createCookie("logpt",newlog,1);
	if (page == 8){   // go to begining page  or LOGPAGE TODO
			window.location="/";
	}
	else{
		window.location="/plan?number="+page;
	}
	
});
