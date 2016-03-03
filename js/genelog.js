/**
 * 
 */
function unique(list) {
    var result = [];
    $.each(list, function(i, e) {
        if ($.inArray(e, result) == -1) result.push(e);
    });
    return result;
}
function readCookie(name) {
    var nameEQ = encodeURIComponent(name) + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
    }
    return null;
}
function generateLogpageIntro(){
	var logia = readCookie("logintro");
	if(logia != null){ 
		var ci = logia.split(':');
		var logsi = unique(ci);
		$("#logli").append("<li><mark>seq1:</mark>"
			+"<ul><li>Medecin: Bonjour Mr Dupont</li>"
 			   +" <li>Patient: Bonjour docteur. </li>"
 				+"<li>Medecin:</mark>Suivez-moi.</li>"
	   		
 		  + " </ul></li> ");
		
		for(var i = 0; i < logsi.length; i++){
			var c = parseInt(logsi[i]);
		//	alert("i="+i+"; c="+c);
			switch (c){
	
			
				case 2:
					 
				$("#logli").append("<li><mark>seq2</mark>: <em> vous lancez la consultation avec animation et amicalité.</em>"
						+"<ul><li>Medecin:Asseyez-vous, monsieur Dupont.  </li>"
 	   	 		+"<li>Patient :Ah merci, c'est que j'attends depuis plus d'une heure....                     </li>"
 	   	 		+"<li>Medecin:Et oui j'ai dû passer plus de temps que prévu avec le patient précédent et en plus j'ai eu une urgence en début d'après-midi…</li>"
 	   		    +"<li>Patient:Oui, oui, bien sûr, je comprends.</li>"
 	   		 +"</ul></li>");
					 
				break;
				case 3:
					 
					$("#logli").append("<li><mark>seq3</mark>:<em>vous maintenez une distance cordiale, comme avec tous vos patients. </em>"
 	   	 		+"<ul><li>Medecin:Vous pouvez vous asseoir .</li>"
 	   	 		+"<li>Patient :Ah merci, vous savez ça fait plus d'une heure que j'attends et... enfin... bon... maintenant que je suis là...</li>"
 	   	 		+"<li>Medecin: Certains patients ont besoin qu'on leur consacre plus de temps que d'autres... </li>"
 	   		  + " <li>Patient:Oui bien sûr, je comprends... </li>"
	 	   	 		+"<li>Medecin: Et vous serez content d'apprendre que quand c'est nécessaire on prend le temps qu'il faut. </li>"
 	   		  + " <li>Patient:Oui oui... </li>"		   	 		
 	   	 	+"</ul></li");
				break;
				case 4:
					 
					$("#logli").append("<li><mark>seq4</mark>:<em>Vous prenez des nouvelles de votre patient</em>"
 	   	 		+"<ul><li>Medecin:Comment allez-vous monsieur Dupont ? </li>"
 	   	 	+	"<li>Patient :Ça va, ça va… cela faisait longtemps que je n'étais pas venu alors...</li>"
			 	   	 		+"<<li>Medecin:Ah bon ? c'était quand la dernière fois, voyons....</li>"
 	   	 	+	"<li>Patient :Oh… c'était il y a deux mois environ.</li>"
			 	   	 		+"<li>Medecin: (trouvant l'info dans le dossier) : Oui voilà, le 20 novembre...</li>"
 	   	 	+	"<li>Patient :C'est ça. </li>"
			 	   	 		+"<li>Medecin:Comment allez-vous aujourd’hui ?  </li>"
 	   	 	+	"<li>Patient :Oh, rien de particulier. </li>"
			 	   	 		+"<li>Medecin:Sinon vous continuez à jardiner ? Vous jardinez, c’est bien ça ?</li>"
 	   	 	+	"<li>Patient :Oui, autant que possible…</li>"
 	   	 		
 	   	 	+"</ul></li");
				break;
				case 5:
					 
					$("#logli").append("<li><mark>seq5</mark>:<em>Vous laissez votre patient préciser la raison de sa venue.</em>"
 	   	 		+"<ul><li>Medecin: Je vous écoute </li>"
 	   	 		+"<li>Patient: Bon... euh.... je me suis dit que ça faisait longtemps que j'étais pas venu....  </li>"
				+"<li>Medecin: oui?</li>"
 	   	 	+	"<li>Patient: Et donc, comme vous m'aviez dit de revenir de temps en temps...</li>"
			+"<li>Medecin:Rien de particulier depuis la dernière fois ?</li>"
 	   	 	+	"<li>Patient :Non pas grand-chose, attendez que je me souvienne....</li>"
			+"<li>Medecin:...</li>"
 	   	 	+	"<li>Patient :Bah non rien de spécial, le train-train quoi. </li>"
					+"<li>Medecin:Donc on fait juste un petit bilan ? </li>"
 	   	 	+	"<li>Patient : Voilà, oui ! </li>"
 	   	 		
 	   	 	+"</ul></li");
				break;
				case 6:
					$("#logli").append("<li><mark>seq6</mark>:<em>Vous consultez le dossier de votre patient</em>"
							+"<ul><li>Medecin: Vous me dites donc qu’il n’y a rien de particulier depuis la dernière fois ? </li>"
			 	   	 		+"<li>Patient:Non pas grand-chose. Attendez que je me souvienne.... J’ai des trous de mémoire parfois !</li>"
							+"<li>Medecin: (il parcourt le dossier) : ...</li>"
 	   	 	+	"<li>Patient :Bah non, rien de spécial…</li>"
			+"<li>Medecin:Je vois que vous avez des ordonnances qui arrivent à expiration, il faut peut-être les renouveler...  </li>"
 	   	 	+	"<li>Patient:  Ah oui, voilà ! C’est bien ça ! </li>"
			+"<li>Medecin: Vous avez votre carnet de glycémie avec vous pour que nous puissions voir ça ensemble ? </li>"
 	   	 	+	"<li>Patient :Oh non, mince, je l’ai oublié ! </li>"
							+"</ul></li>");
				break;
				case 7:
					 
					$("#logli").append("<li><mark>seq7</mark>: <em>Vous lui demandez son carnet de glycémie </em>"
 	   	 	
 	   	 				+"<ul><li>Medecin: Vous avez votre carnet de glycémie avec vous pour que nous puissions voir ça ensemble ? </li>"
 	   	 	+	"<li>Patient :Oh non, mince, je l’ai oublié ! </li>"
 	   	 		
 	   	 	+"</ul></li");
				break;
				case 8:
					 
					$("#logli").append("<li><mark>seq8</mark>:<em>Vous orientez votre patient vers des examens sanguins.</em>"
 	   	 		+"<ul><li><mark>Medecin:</mark> C'est embétant cela, Mr Dupont. Il est plus facile pour moi d’évaluer l’évolution de votre diabète avec des données précises…</li> " 	 	 	   	 	
 	   	 		+"<li>Patient: Vous savez, je ne suis pas sur que cela vous aiderait beaucoup. Je ne suis pas très régulier dans mes notes…</li>"
 	   	 		+"<li><mark>Medecin:</mark>Bon, ce que je vous propose, en attendant notre prochaine rencontre, je vous prescris quelques analyses, afin de voir où vous en êtes. D’accord ? </li>"
 	   		   +"<li>Patient: D'accord, on fait comme ça. </li>"
 	   		  + " <li><mark>Medecin:</mark>Mais je compte sur vous. Je veux voir votre carnet la prochaine fois. Meme s'il n'est pas bien rempli, ce n’est pas grave. Cela nous aidera à mieux vous suivre. </li>"
 	   	 		
 	   	 	+"</ul></li");
				break;
				case 9:
					 
					$("#logli").append("<li><mark>seq9</mark>:<em>Vous manifestez votre ennui face à cette absence d’informations.</em>"
				+"<ul><li><mark>Medecin:</mark> C'est embétant cela, Mr Dupont. Je vous avais pourtant de ne pas l'oublier. C’est important de pouvoir suivre l’évolution de votre diabète.</li>"  	 	 	   	 	
 	   	 		+"<li>Patient: Vous savez, je ne suis pas sur que cela vous aiderait beaucoup. Je ne suis pas très régulier dans mes notes…</li>"
 	   	 		+"<li><mark>Medecin:</mark>Ça aussi, je vous ai déjà expliqué qu'il était important de l'être. Du coup je vais devoir vous prescrire quelques analyses, afin de voir où vous en êtes.</li>"
 	   		    +"<li>Patient: D'accord, on fait comme ça. Je suis désolé.</li>"
 	   		   + "<li><mark>Medecin:</mark>La prochaine fois, pensez bien à amener votre carnet et veillez à le tenir à jour ! </li>"
 	   	 		
 	   	 	+"</ul></li");
				break;
				case 10:
					 
					$("#logli").append("<li><mark>seq11</mark>:<em>Vous essayez de savoir pourquoi il ne l’a pas amené.</em>"
 	   	 		+"<ul><li><mark>Medecin: </mark>Ce n’est pas la première fois que vous l’oubliez, si je me souviens bien… </li>"
			    +"<li>Patient: Oui, je sais.</li>"
				+"<li><mark>Medecin: </mark>Pourquoi vous n’y pensez pas ? </li>"
			    +"<li>Patient: Je ne sais pas, j’y ai pensé hier mais là, ce matin, ça m’est sorti de la tête !</li>"
				+"<mark>Medecin: </mark>Mais, à la maison, vous pensez à le remplir au moins ? Vous vous souvenez un peu de ce que vous y avez noté ?</li>"
			   + "<li>Patient: Heu… pas vraiment…</li>"
 	   	 		
 	   	 	+"</ul></li");
				break;
					
						
				default:
					$("#testdiv").html("<button class=\"btn btn-warning\">Error!</button>");
					
				break;
			}
		}
	}
	else
	{
		$(".testdiv").append("<button class=\"btn btn-info\">No session played.</button>");
	}
}
function generateLogpage(){
	
	
	var logib = readCookie("log");
			
	if(logib != null){ 
		var ck = logib.split(':');
		var logs = unique(ck);
		$("#logli").append("<li><mark>seq1</mark>"
			+"<ul><li>Medecin:Qu’est-ce qui vous amène, mr Dupont </li>"
 			   +" <li>Patient :Je viens pour l’ordonnance.</li>"
 				+"<li>Medecin:</mark>Votre ordonnance pour votre diabète…</li>"
	   			+"<li>Patient:Oui, c’est ça</li>"
 		  + " </ul></li> ");
		
		for(var i = 0; i < logs.length; i++){
			var c = parseInt(logs[i]);
		//	alert("i="+i+"; c="+c);
			switch (c){
			
				case 2:
					 
				$("#logli").append("<li><mark>seq2</mark>"
						+"<ul><li>Medecin:Depuis combien de temps souffrez-vous ? </li>"
 	   	 		+"<li>Patient :Oh, depuis une dizaine d’années…</li>"
 	   	 		+"<li>Medecin:Rappelez-moi, à combien était votre taux de glycémie est à combien ?</li>"
 	   		    +"<li>Patient:La dernière fois, il y a deux mois, elle était à 7 %.</li>"
 	   		    +"<li>Medecin:Bon, d’accord. De toute façon, on revérifiera ça. </li>"
 	   	 		+"<li>Patient :</li></ul></li>");
					 
				break;
				case 3:
					 
					$("#logli").append("<li><mark>seq3</mark>"
 	   	 		+"<ul><li>Medecin:Comment le vivez-vous ce diabète en ce moment</li>"
 	   	 		+"<li>Patient :Ben, ça va, mais je me sens fatigué tout le temps…</li>"
 	   	 		+"<li>Medecin:Ça vous gêne dans la journée, mr Dupont ?</li>"
 	   		  + " <li>Patient:Oui, beaucoup. J’ai du mal à me concentrer. Quand je suis au jardin, je peux pas rester longtemps à faire la même chose. </li>"
 	   	 		
 	   	 	+"</ul></li");
				break;
				case 4:
					 
					$("#logli").append("<li><mark>seq4</mark>"
 	   	 		+"<ul><li>Medecin:Et sinon, vous êtes fatigué ?</li>"
 	   	 	+	"<li>Patient :Ah ça oui alors ! Tenez, quand je suis au jardin, a peine je commence que je suis déjà essoufflé.</li>"
 	   	 		
 	   	 	+"</ul></li");
				break;
				case 5:
					 
					$("#logli").append("<li><mark>seq5</mark>"
 	   	 		+"<ul><li>Medecin: Vous avez des difficultés particulières ? </li>"
 	   	 		+"<li>Patient: Euh... c'est-à-dire ?</li>"
 	   	 		
 	   	 	+"</ul></li");
				break;
				case 6:
					$("#logli").append("<li><mark>seq6</mark>"
							+"<ul><li>Medecin: Et sinon, comment dormez-vous la nuit ?</li>"
			 	   	 		+"<li>Patient:Ben… pas très bien. Je me lève plusieurs fois pour aller faire pipi. .</li></ul></li>");
				break;
				case 7:
					 
					$("#logli").append("<li><mark>seq7</mark>: <em>Vous laissez votre patient continuer à parler </em>"
 	   	 	
 	   	 		+"<li>Patient :J’ai des tomates à planter, vous comprenez. Je dois me pencher et franchement, c’est dur…</li>"
 	   	 	+"	<li>Medecin: Ça vous fait mal quelque part ?</li>"
 	   		+  "  <li>Patient:Oui, c 'est les pieds et le genou un peu aussi, surtout quand je monte les escaliers.</li>"
 	   		+  "  <li>Medecin:Ah, c’est gênant… Je comprends. Sinon, vous dormez bien ? </li>"
 	   		+  "  <li>Patient: Non, pas très bien. Je me lève souvent. </li>"
 	   	 		
 	   	 	+"</ul></li");
				break;
				case 8:
					 
					$("#logli").append("<li><mark>seq8</mark>:<em>Vous interrogez votre patient sur son sommeil.</em>"
 	   	 		+"<ul><li>Medecin: Comment décririez-vous votre sommeil ? </li>"
 	   	 		+"<li>Patient: Ben.... Mon sommeil.... Je dors pas trop mal mais, je me lève plusieurs fois pour aller faire pipi.</li>"
 	   	 		
 	   	 	+"</ul></li");
				break;
				case 9:
					 
					$("#logli").append("<li><mark>seq9</mark>"
 	   	 		+"<ul><li>Medecin:Pour aller faire pipi ?</li>"
 	   	 	+	"<li>Patient : Oui pour aller aux toilettes …</li>"
 	   	 		
 	   	 	+"</ul></li");
				break;
				case 10:
					 
					$("#logli").append("<li><mark>seq10</mark>"
 	   	 		+"<ul><li>Medecin: Combien de fois y allez-vous par nuit ?</li>"
 	   	 		+"<li>Patient: trois, parfois quatre.</li>"
 	   	 		
 	   	 	+"</ul></li");
				break;
	
				case 11:
					 
					$("#logli").append("<li><mark>seq11</mark>:<em>Vous invitez votre patient à entrer un peu plus dans les détails.</em>"
 	   	 		+"<ul><li>Medecin: Vous pouvez m’en dire plus ?  </li>"
 	   	 		+"<li>Patient :: Ben faut que je pousse quand même.…</li>"
 	   	 		
 	   	 	+"</ul></li");
				break;
					
				case 12:
					$("#logli").append("<li><mark>seq12</mark>:<em>Vous changez de sujet pour vous intéresser à la vue de votre patient. </em>"
					+		"<ul><li>Medecin: Très bien, je prends note. Et sinon, et votre vue ? </li>"
 	   	 +	"	<li>Patient: Oh ça va, c'est comme la dernière fois, quoi....</li>"
 	   	 		+"</ul></li>");
				break;
				case 13:
					$("#logli").append("<li><mark>seq13</mark>:<em>Vous changez de sujet et abordez la question de son appétit. </em>"
					+		"<ul><li>Medecin:Je note ça aussi… Autrement, mangez-vous avec appétit ? </li>"
 	   	 +	"	<li>Patient: Je sais pas, je fais pas trop attention à ça.</li>"
 	   	 +		"<li>Medecin:Disons-le autrement. Avez-vous l’impression de manger moins qu'avant ? Plus qu’avant ? Pareillement ?</li>"
 	   	+	   " <li>Patient: Franchement, je ne saurais pas vous dire. J’aime bien manger. </li></ul></li>");
				break;
				case 14:
					$("#logli").append("<li><mark>seq14</mark>:<em>Vous poussez l’interrogatoire sur sa vue.</em> "
				+			"<ul>	<li>Medecin: Vous voulez dire que votre vue est stable ou qu'elle a encore baissé ?  </li>"
 	   	 +	"	<li>Patient: Ben oui elle a encore baissé, comme l'autre fois quoi..</li>"
 	   	 	+	"<li>Medecin: C'est embêtant ça ; il faut que nous suivions ça de près. Nous allons voir ça ensemble.   </li>"
 	   	 +		"<li>Patient: Oui, mais bon, je suis tellement fatigué....</li> 	" 
 	   	 	+	"<li><Medecin: Je note ça aussi… </li>" 
 	   	 		+		"  </ul></li>");
				break;
				case 15:
					$("#logli").append("<li><mark>seq15</mark>:<em>Vous interrogez votre patient sur ses habitudes culinaires. </em>"
				+			"<ul><li>Medecin:C'est vous qui cuisinez à la maison ? </li>"
 	   	 	+	"<li>Patient: Non c'est ma femme.…</li>"
 	   	 		+"<li>Medecin:Qu'est-ce qu'elle vous dit sur votre appétit ? ?</li>"
 	   		  + "<li>Patient: Elle me dit rien de spécial.</li>"
 	   		  +  "<li>Medecin:Si vous mangiez moins, elle vous le dirait non ? </li>"
 	   		   + "<li>Patient: Oui je pense...</li>" 
 	   		  +  "</ul></li>");
				break;
				case 16:
					$("#logli").append("<li><mark>seq16</mark>:<em>Vous clôturez l’anamnèse</em>"
				+			"<ul><li>Medecin:Très bien, nous allons voir tout ça. Allons de l’autre côté ; je vais vous examiner.  </li>"
 	   	 	+	"<li>Patient: D’accord.</li>"
							+"</ul></li>");
				break;

			
				default:
					$("#testdiv").html("<button class=\"btn btn-warning\">Error!</button>");
					
				break;
			}
		}
		
			
	}
	
	else{
		$(".testdiv").append("<button class=\"btn btn-info\">No session played.</button>");
		
	}
	
	
}
//log PT
function generateLogpagePT(){
	var logic = readCookie("logpt");
	if(logic != null){ 
		var ci = logic.split(':');
		var logsi = unique(ci);
		$("#logli").append("<li><mark>seq1:</mark>"
			+"<ul><li><mark>Medecin: </mark>Donc, mr Dupont, je vous renouvelle votre ordonnance. On repart sur XXXXX, YYYYY, et ZZZZ. </li>"
 			   +" <li>Patient: Oui, d’accord… </li>"
 			
	   		
 		  + " </ul></li> ");
		
		for(var i = 0; i < logsi.length; i++){
			var c = parseInt(logsi[i]);
		//	alert("i="+i+"; c="+c);
			switch (c){
	
			
				case 2:
					 
				$("#logli").append("<li><mark>seq2</mark>: <em> Vous expliquez au patient comment suivre son traitement</em>"
						+"<ul><li><mark>Medecin:</mark> Je vous prescris XXX pour traiter….  </li>"
 	   	 		+"<li>Patient: Oui, je connais XXX. J’ai l’habitude de le prendre.</li>"
 				+"<li><mark>Medecin:</mark> C’est vrai, vous le prenez depuis longtemps mais j’ai fait quelques petits ajustements. </li>"
 	   	 		+"<li>Patient: Un homme avertit en vaut deux ! </li>	   	 	"
 				+"<li><mark>Medecin:</mark> C’est ça ! Vous savez à quoi sert YYYY. Il servira à … </li>"
 	   	 		+"<li>Patient:Humm</li>	"
				+"<li><mark>Medecin:</mark>Je vous rajoute ZZZZZ pour vos troubles érectiles. </li>"
 	   	 		+"<li>Patient:’accord, d’accord. </li>"	
 	   		 +"</ul></li>");
					 
				break;
				case 3:
					 
					$("#logli").append("<li><mark>seq3</mark>:<em>Vous ne donnez pas plus d’explications à votre patient  . </em>"
 	   	 		+	"<ul><li><mark>Medecin:</mark> Je vous prescrits les mêmes médicaments que la dernière fois… </li>"
 	   	 		+"<li>Patient: D'accord</li>"
 				+"<li><mark>Medecin:</mark> Vous savez comment les prendre, n’est-ce pas ? </li>"
 	   	 		+"<li>Patient: Euh, oui, oui… j’ai l’habitude.  </li>	   "	 	
 				+"<li><mark>Medecin:</mark> Bon, très bien. Et puis, je vous rajoute ZZZZZZ pour vos troubles érectiles, à prendre une fois par jour. </li>"
 	   	 		+"<li>Patient: D’accord, d’accord. </li>	  " 	 		
 	   	 	+"</ul></li");
				break;
				case 4:
					 
					$("#logli").append("<li><mark>seq4</mark>:<em>Vous conseillez à votre patient d’aller chez le cardiologue. </em>"
 	   	 		+"<ul><li><mark>Medecin:</mark> Oui, c’est bien, mais j’aimerais que vous alliez voir un cardiologue, quand même.</li>"
 	   	 		+"<li>Patient: Un cardiologue parce que, euh, je n’arrive pas à … ?!</li>"
 				+"<li><mark>Medecin:</mark> Non, ce n’est pas seulement pour ça. Ce que vous me dites m’inquiète un peu. Vous vous réveillez la nuit avec des fourmis dans les mains, et là vous me dites que vous avez du mal à avoir une érection. Je voudrais simplement vérifier que vous n’avez pas de problèmes cardio-vasculaires. </li>"
 	   	 		+"<li>Patient: Ah, euh, d’accord… mais je dois faire ça quand ?  </li>	   	 "
 	   	 		
 	   	 	+"</ul></li");
				break;
				case 5:
					 
					$("#logli").append("<li><mark>seq5</mark>:<em>Vous expliquez vos craintes quant à sa santé cardio-vasculaire.</em>"
 	   	 		+"<ul><li><mark>Medecin:</mark> On va essayer ZZZZ pendant quinze jours mais il faudra qu’on en rediscute… Vous vous réveillez la nuit avec des fourmis dans les mains, et là vous me dites que vous avez du mal à avoir une érection. Cela pourrait être les signes d’un problème cardio-vasculaire… Il faut qu’on suive ça. </li>"
 	   	 		+"<li>Patient: Ah d’accord, je comprends…</li>"
 	   	 		
 	   	 	+"</ul></li");
				break;
				case 6:
					$("#logli").append("<li><mark>seq6</mark>:<em>Vous interrogez votre patient sur sa compréhension de l’ordonnance.</em>"
							+"<ul><li><mark>Medecin:</mark>Tout est clair pour vous, mr Dupont ?  </li>"
 	   	 		+"<li>Patient: Oui, je crois bien. </li>"
				+"<li><mark>Medecin:</mark> Vous croyez ? </li>"
 	   	 		+"<li>Patient: Eh bien, en fait, je me demandais… est-ce que je peux les prendre tous en même temps ces médicaments ou bien je dois espacer leur prise ? </li>"
				+"<li><mark>Medecin:</mark>Aucun danger, mr Dupont, vous pouvez tous les prendre au même moment. Par contre, vous devez impérativement respecter la dose que je vous ai prescrite. </li>"
 	   	 		+"<li>Patient: Ah oui, oui, ça, je le sais !  </li>"
							+"</ul></li>");
				break;
				case 7:
					 
					$("#logli").append("<li><mark>seq7</mark>: <em>Vous invitez votre patient à prendre un autre rendez-vous. </em>"
 	   	 	
 	   	 				+"<ul><li><mark>Medecin:</mark>Le mieux serait de se revoir très vite pour bien suivre ces derniers éléments.</li>"
 	   	 		+"<li>Patient: D’accord… </li>"
				+"<li><mark>Medecin:</mark>En sortant, prenez rendez-vous avec ma secrétaire. On se dit dans une quinzaine de jours .</li>"
 	   	 		+"<li>Patient: Oui, je ferai ça. </li>"
 	   	 		
 	   	 	+"</ul></li");
				
				
				break;
					
						
				default:
					$("#testdiv").html("<button class=\"btn btn-warning\">Error!</button>");
					
				break;
			}
		}
	}
	else
	{
		$(".testdiv").append("<button class=\"btn btn-info\">No session played.</button>");
	}
}
