/**
* used to show seq.
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
"Vous interrogez votre patient sur les symptômes de son diabète ",
// 2
"Vous invitez le patient à parler de sa maladie",
// 3
"Dire: Et sinon, vous êtes fatigué?",
// 4
"Dire: Vous avez des difficultés particulières ?",
// 5
"Dire: Et sinon, comment dormez-vous la nuit ?",
// 6
"Vous laissez votre patient continuer à parler ",
// 7
"Vous interrogez votre patient sur son sommeil",
// 8
"Dire: Pour aller faire pipi ? ",
// 9
"Dire: Combien de fois y allez-vous par nuit ?",
// 10
"Vous invitez votre patient à entrer un peu plus dans les détails",
// 11
"Vous changez de sujet pour vous intéresser à la vue de votre patient",
// 12
"Vous changez de sujet et abordez la question de son appétit",
// 13
"Vous poussez l’interrogatoire sur sa vue",
// 14
"Vous interrogez votre patient sur ses habitudes culinaires",
// 15
"Vous clôturez l’anamnèse",

// end History taking

// 16
"Plan de traitement",
""
];
var pages = [
// keep number 0 blank
{},
// 1
{
	bgImage: null,
	bgVideo: "AnamS1f.mp4",
	phrases: [
		{isDoctor: true, expression: "Rappelez-moi, à combien était votre taux de glycémie est à combien ?"},
		{isDoctor: false, expression: "La dernière fois, il y a deux mois, elle était à 7 %."},
		{isDoctor: true, expression: "Et votre tension était de combien ?"},
		{isDoctor: false, expression: "Je ne me rappelle plus."},
		{isDoctor: true, expression: "Bon, d’accord. De toute façon, on revérifiera ça. "}
	],
	buttons: [3,4,5]
},
// 2
{
	bgImage: null,
	bgVideo: "AnamS2.mp4",
	phrases: [
		{isDoctor: true, expression: "Comment le vivez-vous ce diabète en ce moment ?"},
		{isDoctor: false, expression: "Ben, ça va, mais je me sens fatigué tout le temps…"},
		{isDoctor: true, expression: "Ça vous gêne dans la journée, mr Dupont ? "},
		{isDoctor: false, expression: "Oui, beaucoup. J’ai du mal à me concentrer. Quand je suis au jardin, je peux pas rester longtemps à faire la même chose. "}
	],
	buttons: [3,4,5]
},
// 3
{
	bgImage: null,
	bgVideo: "AnamS3.mp4",
	phrases: [
		{isDoctor: true, expression: "Et sinon, vous êtes fatigué ?"},
		{isDoctor: false, expression: "Ah ça oui alors ! Tenez, quand je suis au jardin, a peine je commence que je suis déjà essoufflé."}
	
	],
	buttons: [6,7]
},
// 4
{
	bgImage: null,
	bgVideo: "AnamS4.mp4",
	phrases: [
		{isDoctor: true, expression: "Vous avez des difficultés particulières ?"},
		{isDoctor: false, expression: "Euh... c'est-à-dire ?"}
	
	],
	buttons: [5,3]
},
// 5
{
	bgImage: null,
	bgVideo: "AnamS5.mp4",
	phrases: [
		{isDoctor: true, expression: "Et sinon, comment dormez-vous la nuit ?"},
		{isDoctor: false, expression: "Ben… pas très bien. Je me lève plusieurs fois pour aller faire pipi. "}
	],
	buttons: [9,10]
},
// 6
{
	bgImage: null,
	bgVideo: "AnamS6.mp4",
	phrases: [
		{isDoctor: false, expression: "J’ai des choses à planter, vous comprenez. Je dois me pencher et franchement, c’est dur…"},
		{isDoctor: true, expression: "Ça vous fait mal quelque part ? "},
		{isDoctor: false, expression: "Oui, c 'est les pieds et le genou un peu aussi, surtout quand je monte les escaliers. "},
		{isDoctor: true, expression: "Ah, c’est gênant… Je comprends. Sinon, vous dormez bien ?  "},
		{isDoctor: false, expression: "Non, pas très bien. Je me lève souvent. "}
	],
	buttons: [8,9,10]
},
// 7
{
	bgImage: null,
	bgVideo: "AnamS7f.mp4",
	phrases: [
		{isDoctor: true, expression: "Comment décririez-vous votre sommeil ?"},
		{isDoctor: false, expression: "Ben.... Mon sommeil.... Je dors pas trop mal mais, je me lève plusieurs fois pour aller faire pipi."}
		
	],
	buttons: [10,9]
},
// 8
{
	bgImage: null,
	bgVideo: "AnamS8.mp4",
	phrases: [
		{isDoctor: true, expression: "Pour aller faire pipi ?"},
		{isDoctor: false, expression: "Oui pour aller aux toilettes. "}
	],
	buttons: [9,10]
},
// 9
{
	bgImage: null,
	bgVideo: "AnamS9.mp4",
	phrases: [
		{isDoctor: true, expression: "Combien de fois y allez-vous par nuit ?"},
		{isDoctor: false, expression: "Trois, parfois quatre."}
	],
	buttons: [11,12,10]
},
// 10
{
	bgImage: null,
	bgVideo: "AnamS10.mp4",
	phrases: [
		{isDoctor: true, expression: "Vous pouvez m’en dire plus ? "},
		{isDoctor: false, expression: "Ben faut que je pousse quand même."}
	],
	buttons: [12,11]
},
// 11
{
	bgImage: null,
	bgVideo: "AnamS11.mp4",
	phrases: [
		{isDoctor: true, expression: "Très bien, je prends note. Et sinon, et votre vue ? "},
		{isDoctor: false, expression: "Oh ça va, c'est comme la dernière fois, quoi..."}
	],
	buttons: [12,13]
},
// 12
{
	bgImage: null,
	bgVideo: "AnamS12.mp4",
	phrases: [
		{isDoctor: true, expression: "Je note ça aussi… Autrement, mangez-vous avec appétit ? "},
		{isDoctor: false, expression: "Je sais pas, je fais pas trop attention à ça."},
		{isDoctor: true, expression: "Disons-le autrement. Avez-vous l’impression de manger moins qu'avant ? Plus qu’avant ? Pareillement ?"},
		{isDoctor: false, expression: "Franchement, je ne saurais pas vous dire. J’aime bien manger. "}
	],
	buttons: [15,14]
},
// 13
{
	bgImage: null,
	bgVideo: "AnamS13.mp4",
	phrases: [
		{isDoctor: true, expression: "Vous voulez dire que votre vue est stable ou qu'elle a encore baissé ? "},
		{isDoctor: false, expression: "Ben oui elle a encore baissé, comme l'autre fois quoi."},
		{isDoctor: true, expression: " C'est embêtant ça ; il faut que nous suivions ça de près. Nous allons voir ça ensemble."},
		{isDoctor: false, expression: "Oui, mais bon, je suis tellement fatigué..."},
		{isDoctor: true, expression: " Je note ça aussi..."}
	],
	buttons: [14,15,12]
},
// 14
{
	bgImage: null,
	bgVideo: "AnamS14.mp4",
	phrases: [
		{isDoctor: true, expression: "C'est vous qui cuisinez à la maison ? "},
		{isDoctor: false, expression: "Non c'est ma femme."},
		{isDoctor: true, expression: "Qu'est-ce qu'elle vous dit sur votre appétit ? "},
		{isDoctor: false, expression: "Elle me dit rien de spécial."},
		{isDoctor: true, expression: "Si vous mangiez moins, elle vous le dirait non ?  "},
		{isDoctor: false, expression: "Oui, je pense."}
	],
	buttons: [15]
},
// 15
{
	bgImage: null,
	bgVideo: "AnamS15.mp4",
	phrases: [
		{isDoctor: true, expression: "Très bien, nous allons voir tout ça. Allons de l’autre côté ; je vais vous examiner. "},
		{isDoctor: false, expression: "D’accord."}
	],
	buttons: [16]
},



// end
{}
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
	var showPar = {type: "seq",
		title: "Demo: History taking",
		bgImage: pages[number].bgImage,
		bgVideo: pages[number].bgVideo,
		phrases: pages[number].phrases,
		buttons: buttons};
	res.render('show', showPar);
}


