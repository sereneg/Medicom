/**
* used to show intro.
*/

/**
* page structure
 {
 //	type: String,
 //	title: String,
 	bgImage: String,
 	bgVideo: String,
 	phrases: [{isDoctor: Boolean, expression: String}],
 	buttons: [{value: Int, content: String}]
 }
*/

var button2pages = [
// 0
"",
// 1
"",
// 2
"Vous lancez la consultation avec animation et sollicitude.",
// 3
"Vous maintenez une distance cordiale, comme avec tous vos patients.",
// 4
"Vous prenez des nouvelles de votre patient",
// 5
"Vous laissez votre patient préciser la raison de sa venue",
// 6
"Vous consultez le dossier de votre patient",
// 7
"Vous lui demandez son carnet de glycémie",
// 8
"Vous orientez votre patient vers des examens sanguins",
// 9
"Vous manifestez votre ennui face à cette absence d’informations",
// 10
"Vous essayez de savoir pourquoi il ne l’a pas amené",
//end of introducation

// begin history taking
//11
"Vous interrogez votre patient sur les symptômes de son diabète",
//12
"Vous invitez le patient à parler de sa maladie",


// end
""
];
var pages = [
// keep number 0 blank
{},
// 1
{
	bgImage: null,
	bgVideo: "http://kim.kurasawa.fr/medicom/IntroS1.mp4",
	phrases: [
		{isDoctor: true, expression: "Bonjour Mr Dupont."},
		{isDoctor: false, expression: "Bonjour Docteur."},
		{isDoctor: true, expression: "Suivez-moi."}
	],
	buttons: [3,2]
},
// 2
{
	bgImage: null,
	bgVideo: "http://kim.kurasawa.fr/medicom/IntroS2.mp4",
	phrases: [
		{isDoctor: true, expression: "Asseyez-vous, monsieur Dupont."},
		{isDoctor: false, expression: "Ah merci, c'est que j'attends depuis plus d'une heure...."},
		{isDoctor: true, expression: "Et oui j'ai dû passer plus de temps que prévu avec le patient précédent et en plus j'ai eu une urgence en début d'après-midi."},
		{isDoctor: false, expression: "Oui, oui, bien sûr, je comprends."}
	],
	buttons: [4,5,7]
},
// 3
{
	bgImage: null,
	bgVideo: "http://kim.kurasawa.fr/medicom/IntroS3.mp4",
	phrases: [
		{isDoctor: true, expression: "Vous pouvez vous asseoir."},
		{isDoctor: false, expression: "Ah merci, vous savez ça fait plus d'une heure que j'attends et... enfin... bon... maintenant que je suis là ..."},
		{isDoctor: true, expression: "Certains patients ont besoin qu'on leur consacre plus de temps que d'autres..."},
		{isDoctor: false, expression: "Oui, bien sûr, je comprends..."},
		{isDoctor: true, expression: "Et vous serez content d'apprendre que quand c'est necessaire on prend le temps qu'il faut."},
		{isDoctor: false, expression: "Oui oui...."}
	],
	buttons: [4,5,6,7]
},
// 4
{
	bgImage: null,
	bgVideo: "http://kim.kurasawa.fr/medicom/IntroS4.mp4",
	phrases: [
		{isDoctor: true, expression: "Comment allez-vous monsieur Dupont ? "},
		{isDoctor: false, expression: "et bien, ca faisait longtemps que je n'étais pas venu alors..."},
		{isDoctor: true, expression: "Ah bon ? c'était quand la dernière fois, voyons...."},
		{isDoctor: false, expression: "Oh, c'était il y deux mois environ ..."},
		{isDoctor: true, expression: "(trouvant l'info dans le dossier): Oui voilà, le 20 novembre..."},
		{isDoctor: false, expression: "C'est ça.."},
		{isDoctor: true, expression: "Comment allez-vous aujourd’hui  ?"},
		{isDoctor: false, expression: "Oh rien de particulier."},
		{isDoctor: true, expression: "Sinon vous continuez à jardiner ? Vous jardinez, c’est bien ça ?"},
		{isDoctor: false, expression: "Oui autant que possible..."}
	],
	buttons: [6,7]
},
// 5
{
	bgImage: null,
	bgVideo: "http://kim.kurasawa.fr/medicom/IntroS5.mp4",
	phrases: [
		{isDoctor: true, expression: "Je vous écoute. "},
		{isDoctor: false, expression: "Bon... euh.... je me suis dit que ca faisait longtemps que j'étais pas venu...."},
		{isDoctor: true, expression: "Oui?"},
		{isDoctor: false, expression: "Et donc, comme vous m'aviez dit de revenir de temps en temps..."},
		{isDoctor: true, expression: "Donc rien de particulier depuis la dernière fois ? "},
		{isDoctor: false, expression: "Non pas grand-chose, attendez que je me souvienne...."},
		{isDoctor: true, expression: "(Attendant) "},
		{isDoctor: false, expression: "Bah non rien de spécial, le train-train quoi."},
		{isDoctor: true, expression: "Donc on fait juste un petit bilan?"},
		{isDoctor: false, expression: "Oui, voila!"}
	],
	buttons: [6,7]
},
// 6
{
	bgImage: null,
	bgVideo: "http://kim.kurasawa.fr/medicom/IntroS6.mp4",
	phrases: [
		{isDoctor: true, expression: "Vous me dites donc qu’il n’y a rien de particulier depuis la dernière fois ? "},
		{isDoctor: false, expression: "Non pas grand-chose. Attendez que je me souvienne.... J’ai des trous de mémoire parfois !"},
		{isDoctor: true, expression: "(Parcourt le dossier)..."},
		{isDoctor: false, expression: "Bah non, rien de spécial..."},
		{isDoctor: true, expression: "Je vois que vous avez des ordonnances qui arrivent à expiration, il faut peut-être les renouveler..."},
		{isDoctor: false, expression: "Ah oui, voilà ! C’est bien ça !"},
		{isDoctor: true, expression: "Vous avez votre carnet de glycémie avec vous pour que nous puissions voir ça ensemble ? "},
		{isDoctor: false, expression: "Oh non, mince, je l’ai oublié ! "}
	],
	buttons: [8,9,10]
},

// 7
{
	bgImage: null,
	bgVideo: "http://kim.kurasawa.fr/medicom/IntroS7.mp4",
	phrases: [
		{isDoctor: true, expression: "Vous avez votre carnet de glycémie avec vous pour que nous puissions voir ça ensemble ? "},
		{isDoctor: false, expression: "Oh non, mince, je l’ai oublié ! "}
	
	],
	buttons: [8,9,10]
},
// 8
{
	bgImage: null,
	bgVideo: "http://kim.kurasawa.fr/medicom/IntroS8.mp4",
	phrases: [
		{isDoctor: true, expression: "Je vous écoute. "},
		{isDoctor: false, expression: "Bon... euh.... je me suis dit que ca faisait longtemps que j'étais pas venu...."},
		{isDoctor: true, expression: "Oui?"},
		{isDoctor: false, expression: "Et donc, comme vous m'aviez dit de revenir de temps en temps..."},
		{isDoctor: true, expression: "Donc rien de particulier depuis la dernière fois ? "},
		{isDoctor: false, expression: "Non pas grand-chose, attendez que je me souvienne...."},
		{isDoctor: true, expression: "(Attendant) "},
		{isDoctor: false, expression: "Bah non rien de spécial, le train-train quoi."},
		{isDoctor: true, expression: "Donc on fait juste un petit bilan?"},
		{isDoctor: false, expression: "Oui, voila!"}
	],
	buttons: [11,12]
},
// 9
{
	bgImage: null,
	bgVideo: "http://kim.kurasawa.fr/medicom/IntroS9.mp4",
	phrases: [
		{isDoctor: true, expression: "C'est embétant cela, Mr Dupont. Je vous avais pourtant de ne pas l'oublier. C’est important de pouvoir suivre l’évolution de votre diabète. "},
		{isDoctor: false, expression: "Vous savez, je ne suis pas sur que cela vous aiderait beaucoup. Je ne suis pas très régulier dans mes notes..."},
		{isDoctor: true, expression: "Ça aussi, je vous ai déjà expliqué qu'il était important de l'être. Du coup je vais devoir vous prescrire quelques analyses, afin de voir où vous en êtes."},
		{isDoctor: false, expression: "D'accord, on fait comme ça. Je suis désolé."},
		{isDoctor: true, expression: "La prochaine fois, pensez bien à amener votre carnet et veillez à le tenir à jour !"}

	],
	buttons: [11,12]
},
// 10
{
	bgImage: null,
	bgVideo: "http://kim.kurasawa.fr/medicom/IntroS10.mp4",
	phrases: [
		{isDoctor: true, expression: "Ce n’est pas la première fois que vous l’oubliez, si je me souviens bien... "},
		{isDoctor: false, expression: "Oui, je sais bien."},
		{isDoctor: true, expression: "Pourquoi vous n’y pensez pas? "},
		{isDoctor: false, expression: "Je ne sais pas, j’y ai pensé hier mais là, ce matin, ça m’est sorti de la tête !"},
		{isDoctor: true, expression: "Mais, à la maison, vous pensez à le remplir au moins ? Vous vous souvenez un peu de ce que vous y avez noté ?"},
		{isDoctor: false, expression: "Heu...pas vraiment..."}
	],
	buttons: [8,9]
},
// end

{	

}
];
exports.show = function(req, res){
	var p_number = req.param('number') || "";
	var number = 1;

	if (0 < p_number.length){
		number = Number(p_number);
	}
	var buttons = [];
	for (var i = 0; i < pages[number].buttons.length; i++){
	
		buttons.push({value: pages[number].buttons[i], content: button2pages[pages[number].buttons[i]]});
	}
	var showPar = {type: "intro",
		title: "Demo: introduction",
		bgImage: pages[number].bgImage,
		bgVideo: pages[number].bgVideo,
		phrases: pages[number].phrases,
		buttons: buttons};
	res.render('show', showPar);
}


