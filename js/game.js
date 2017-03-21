document.getElementById('option1').innerHTML = 'Klik hier om op vakantie te gaan!';
document.getElementById('level_title').innerHTML = 'Cruisevakantie eindigt in overleven..';

// level 1
function Level1() {
	console.log("Level1()");

	
	document.getElementById('level_title').innerHTML = 'Cruisevakantie eindigt in overleven..';
	document.getElementById('level_image').src = 'img/cruiseschip.jpg';

	var title = document.getElementById("title");
	title.innerHTML = "Op het cruise schip";

	var text = document.getElementById("text");
	text.innerHTML = "Je bent eindelijk onderweg, maar na twee dagen krijgt de boot motor problemen. Ook raakt de energie op, dus er is geen stroom om contact te maken om gered te worden. In die twee weken vallen er veel doden door gebrek aan water en voedsel. Je hebt geen zin om langer op het schip te blijven. Je gaat naar de keuken om wat overlevingsmiddelen bij elkaar te vinden."

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Naar de keuken.';
	opt1.onclick = function(){
		Level2();
	}

	var opt2 = document.getElementById('option2');
	opt2.style.display = 'inline-block';
	opt2.innerHTML = 'Spring van boord.';
	opt2.onclick = function(){
		Level10();
	}

	var opt3 = document.getElementById('option3');
	opt3.style.display = 'inline-block';
	opt3.innerHTML = 'Aan boord blijven.';
	opt3.onclick = function(){
		Level12();
	
	}
}

function Level10() {
	console.log("Level10()");
	
	document.getElementById('level_title').innerHTML = 'Cruisevakantie eindigt in overleven.';
	document.getElementById('level_image').src = 'img/springen.jpg';

	var title = document.getElementById("title");
	title.innerHTML = "Van boord gesprongen.";

	var text = document.getElementById("text");
	text.innerHTML = "Je hebt geen zin meer om aan boord te blijven van het cruiseschip. Je bedenkt je en springt van boord. Na een tijdje zwemmen zie je iets wazigs in de verte het lijkt op een haai."

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Valt de haai aan met vuisten.';
	opt1.onclick = function(){
		Level11();
	}

	var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'Je zwemt weg.';
	opt2.onclick = function(){
		Level11();
	}

	var opt3 = document.getElementById('option3');
	opt3.innerHTML = 'Blijft doodstil liggen.'
	opt3.onclick = function(){
		Level11();
	}
}

function Level11() {
	console.log("Level12()");
	
	document.getElementById('level_title').innerHTML = 'Cruisevakantie eindigt in overleven.';
	document.getElementById('level_image').src = 'img/doodskist.jpg';

	var title = document.getElementById("title");
	title.innerHTML = "Game Over.";

	var text = document.getElementById("text");
	text.innerHTML = "Jammer maar helaas, je werd achterna gezeten door de haai en heeft je aan stukken gescheurd."

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Klik hier om terug te gaan.';
	opt1.onclick = function(){
		Level1();
	}

	var opt2 = document.getElementById('option2');
	opt2.style.display = 'none'
	opt2.innerHTML = '.';
	opt2.onclick = function(){
	}

	var opt3 = document.getElementById('option3');
	opt3.style.display = 'none'
	opt3.innerHTML = '.'
	opt3.onclick = function(){
	}
}

function Level12() {
	console.log("Level12()");
	
	document.getElementById('level_title').innerHTML = 'Cruisevakantie eindigt in overleven.';
	document.getElementById('level_image').src = 'img/lynchen.jpg';

	var title = document.getElementById("title");
	title.innerHTML = "Gelynched.";

	var text = document.getElementById("text");
	text.innerHTML = "Je blijft gezellig aanboord, maar je ziet dat de paniek uitbreekt en verschillende mensen lynchen elkaar. Jij bent ook de lul en gaat dood."

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Klik hier om terug te gaan.';
	opt1.onclick = function(){
		Level1();
	}

	var opt2 = document.getElementById('option2');
	opt2.style.display = 'none'
	opt2.innerHTML = '.';
	opt2.onclick = function(){
	}

	var opt3 = document.getElementById('option3');
	opt3.style.display = 'none'
	opt3.innerHTML = '.'
	opt3.onclick = function(){
	}
}

// level 2
function Level2() {
	console.log("Level2()");
	
	document.getElementById('level_title').innerHTML = 'Cruisevakantie eindigt in overleven.';
	document.getElementById('level_image').src = 'img/keuken.jpg';

	var title = document.getElementById("title");
	title.innerHTML = "In de keuken";

	var text = document.getElementById("text");
	text.innerHTML = "Eenmaal in de keuken aangekomen zie je dat alles overhoopt ligt. Je gaat opzoek naar iets scherps wat je kan gebruiken als wapen."

	var opt1 = document.getElementById('option1');
	opt1.style.display = 'inline-block';
	opt1.innerHTML = 'Terug naar het dek.';
	opt1.onclick = function(){
		Level21();
	}

	var opt2 = document.getElementById('option2');
	opt2.style.display = 'inline-block';
	opt2.innerHTML = 'Pakt een mes en springt van boord.';
	opt2.onclick = function(){
		Level3();
	}

	var opt3 = document.getElementById('option3');
	opt3.style.display = 'none'
	opt3.innerHTML = 'Aan boord blijven.';
	opt3.onclick = function(){
		Level21();
	}
}

function Level21() {
	console.log("Level21()");
	
	document.getElementById('level_title').innerHTML = 'Cruisevakantie eindigt in overleven.';
	document.getElementById('level_image').src = 'img/lynchen.jpg';

	var title = document.getElementById("title");
	title.innerHTML = "Terug op het dek.";

	var text = document.getElementById("text");
	text.innerHTML = "Je kon niks nuttigs vinden in de keuken van het cruiseschip. Je bedenkt je en gaat terug het dek op, daar zie je verschillende mensen die elkaar lynchen. Niet langer dan 2 minuten ben jij ook de lul."

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Klik hier om terug te gaan.';
	opt1.onclick = function(){
		Level1();
	}

	var opt2 = document.getElementById('option2');
	opt2.style.display = 'none'
	opt2.innerHTML = '.';
	opt2.onclick = function(){
	}

	var opt3 = document.getElementById('option3');
	opt3.style.display = 'none'
	opt3.innerHTML = '.'
	opt3.onclick = function(){
	}
}

// level 3

function Level3() {
	console.log("Level3()");
	
	document.getElementById('level_title').innerHTML = 'Cruisevakantie eindigt in overleven.';
	document.getElementById('level_image').src = 'img/shark.jpg';

	var title = document.getElementById("title");
	title.innerHTML = "Gevecht in zee.";

	var text = document.getElementById("text");
	text.innerHTML = "Nadat je je keuze hebt gemakt spring je van boort en ga je zwemmen. Na paar kwartiertjes later zie je wat in de verte. Nadat het gene steeds dichterbij komt ga je je bedenken."

	var opt1 = document.getElementById('option1');
	opt1.style.display = 'inline-block';
	opt1.innerHTML = 'Je zwemt weg.';
	opt1.onclick = function(){
		Level30();
	}

	var opt2 = document.getElementById('option2');
	opt2.style.display = 'inline-block';
	opt2.innerHTML = 'Pakt mes en steekt haai dood.';
	opt2.onclick = function(){
		Level4();
	}

	var opt3 = document.getElementById('option3');
	opt3.style.display ='inline-block'
	opt3.innerHTML = 'Aanvallen met je vuisten.';
	opt3.onclick = function(){
		Level31();
	}
}

function Level30() {
	console.log("Level30()");
	
	document.getElementById('level_title').innerHTML = 'Cruisevakantie eindigt in overleven.';
	document.getElementById('level_image').src = 'img/opgegeten.jpg';

	var title = document.getElementById("title");
	title.innerHTML = "Achtervolging.";

	var text = document.getElementById("text");
	text.innerHTML = "Je probeert zo snel mogelijk weg te zwemmen, maar de haai heeft je te pakken. Je wordt helemaal aan stukken gescheurd."

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Klik hier om terug te gaan.';
	opt1.onclick = function(){
		Level1();
	}

	var opt2 = document.getElementById('option2');
	opt2.style.display = 'none'
	opt2.innerHTML = '.';
	opt2.onclick = function(){
	}

	var opt3 = document.getElementById('option3');
	opt3.style.display = 'none'
	opt3.innerHTML = '.'
	opt3.onclick = function(){
	}
}

function Level31() {
	console.log("Level31()");
	
	document.getElementById('level_title').innerHTML = 'Cruisevakantie eindigt in overleven.';
	document.getElementById('level_image').src = 'img/opgegeten.jpg';

	var title = document.getElementById("title");
	title.innerHTML = "Het gevecht.";

	var text = document.getElementById("text");
	text.innerHTML = "Je bent zo dom genoeg en je begint een gevecht met de haai met je blote vuisten. Je wordt helemaal aan stukken gescheurd."

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Klik hier om terug te gaan.';
	opt1.onclick = function(){
		Level1();
	}

	var opt2 = document.getElementById('option2');
	opt2.style.display = 'none'
	opt2.innerHTML = '.';
	opt2.onclick = function(){
	}

	var opt3 = document.getElementById('option3');
	opt3.style.display = 'none'
	opt3.innerHTML = '.'
	opt3.onclick = function(){
	}
}

// level 4
function Level4() {
	console.log("Level4()");
	
	document.getElementById('level_title').innerHTML = 'Cruisevakantie eindigt in overleven.';
	document.getElementById('level_image').src = 'img/eiland.jpg';

	var title = document.getElementById("title");
	title.innerHTML = "Een eiland.";

	var text = document.getElementById("text");
	text.innerHTML = "Nadat je de haai hebt gedood zwem je weer verder en na een tijdje zwemmen zie je in de verte wat wazigs. Het lijken wel op bergen en bomen, dus je zwemt daar op af. Eeenmaal aangekomen op het eiland ga je meteen opzoek naar hout om een hutje te maken. Je bent druk bezig om hout bij elkaar te verzamelen, opeens hoor je wat gegrom achter je."

	var opt1 = document.getElementById('option1');

	opt1.innerHTML = 'Je klimt de boom in.';
	opt1.onclick = function(){
		Level40();
	}

	var opt2 = document.getElementById('option2');

	opt2.innerHTML = 'Rent weg.';
	opt2.onclick = function(){
		Level41();
	}

	var opt3 = document.getElementById('option3');

	opt3.innerHTML = 'Je pakt weer je mes.'
	opt3.onclick = function(){
		Level5();
	}
}

function Level40() {
	console.log("Level40()");
	
	document.getElementById('level_title').innerHTML = 'Cruisevakantie eindigt in overleven.';
	document.getElementById('level_image').src = 'img/beren.jpg';

	var title = document.getElementById("title");
	title.innerHTML = "Achtervolgd.";

	var text = document.getElementById("text");
	text.innerHTML = "Nadat jij de boom bent ingeklommen, is de beer jou gevolgt en heeft je daar een klap gegeven. Hierdoor val je naar beneden en vreet je daarna op."

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Klik hier om terug te gaan.';
	opt1.onclick = function(){
		Level1();
	}

	var opt2 = document.getElementById('option2');
	opt2.style.display = 'none'
	opt2.innerHTML = '.';
	opt2.onclick = function(){
	}

	var opt3 = document.getElementById('option3');
	opt3.style.display = 'none'
	opt3.innerHTML = '.'
	opt3.onclick = function(){
	}
}

function Level41() {
	console.log("Level41()");
	
	document.getElementById('level_title').innerHTML = 'Cruisevakantie eindigt in overleven.';
	document.getElementById('level_image').src = 'img/boomstronk.jpg';

	var title = document.getElementById("title");
	title.innerHTML = "Een omgevallen boom.";

	var text = document.getElementById("text");
	text.innerHTML = "Nadat je probeert weg te rennen van de beer ben je over een boomstrong gevallen dat op de grond lag. Hierdoor heeft de beer jou te pakken gekregen en doodgemaakt."

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Klik hier om terug te gaan.';
	opt1.onclick = function(){
		Level1();
	}

	var opt2 = document.getElementById('option2');
	opt2.style.display = 'none'
	opt2.innerHTML = '.';
	opt2.onclick = function(){
	}

	var opt3 = document.getElementById('option3');
	opt3.style.display = 'none'
	opt3.innerHTML = '.'
	opt3.onclick = function(){
	}
}

// level 5

function Level5() {
	console.log("Level5()");
	
	document.getElementById('level_title').innerHTML = 'Cruisevakantie eindigt in overleven.';
	document.getElementById('level_image').src = 'img/boomhut.jpg';

	var title = document.getElementById("title");
	title.innerHTML = "Een boomhut.";

	var text = document.getElementById("text");
	text.innerHTML = "Nadat je weer terug gaat naar de kust zie je dat er regen opkomst is. Je bedenkt je snel en gaat beginnen met het bouwen van een hutje. Ook gebruik je de huid van de beer als deken. De avond valt al snel en gaat slapen. De volgende morgen hoor je allemaal vreemde geluiden bij je hutje. Je gaat kijken wat het is, het zijn stekelvarkens. Je gaat regelt hout om een hek te maken en wat fruit voor de dieren. Paar uur later zie je een boot in de verte, wat ga je doen?"
	var opt1 = document.getElementById('option1');

	opt1.innerHTML = 'Hout halen en kampvuur maken.';
	opt1.onclick = function(){
		Level6();
	}

	var opt2 = document.getElementById('option2');

	opt2.innerHTML = 'Springen & zwaaien.';
	opt2.onclick = function(){
		Level50();
	}

	var opt3 = document.getElementById('option3');

	opt3.innerHTML = 'Kilmt op het dak van je hutje.'
	opt3.onclick = function(){
		Level51();
	}
}

function Level50() {
	console.log("Level50()");
	
	document.getElementById('level_title').innerHTML = 'Cruisevakantie eindigt in overleven.';
	document.getElementById('level_image').src = 'img/genegeerd.jpg';

	var title = document.getElementById("title");
	title.innerHTML = "Je wordt genegeerd.";

	var text = document.getElementById("text");
	text.innerHTML = "Het maakt niet uit hoe lang je blijft schreeuwen en/of zwaaien, maar je wordt genegeerd. Het hielp dus niet."

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Klik hier om terug te gaan.';
	opt1.onclick = function(){
		Level1();
	}

	var opt2 = document.getElementById('option2');
	opt2.style.display = 'none'
	opt2.innerHTML = '.';
	opt2.onclick = function(){
	}

	var opt3 = document.getElementById('option3');
	opt3.style.display = 'none'
	opt3.innerHTML = '.'
	opt3.onclick = function(){
	}
}

function Level51() {
	console.log("Level51()");
	
	document.getElementById('level_title').innerHTML = 'Cruisevakantie eindigt in overleven.';
	document.getElementById('level_image').src = 'img/zakken.jpg';

	var title = document.getElementById("title");
	title.innerHTML = "Gezakt door het dak.";

	var text = document.getElementById("text");
	text.innerHTML = "Door het springen op het dak van je hutje, ben je er doorheen gezakt. Hierdoor ben je 7 meter naar beneden gevallen en breek jij je beide benen."

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Klik hier om terug te gaan.';
	opt1.onclick = function(){
		Level1();
	}

	var opt2 = document.getElementById('option2');
	opt2.style.display = 'none'
	opt2.innerHTML = '.';
	opt2.onclick = function(){
	}

	var opt3 = document.getElementById('option3');
	opt3.style.display = 'none'
	opt3.innerHTML = '.'
	opt3.onclick = function(){
	}
}

// level 6

function Level6() {
	console.log("Level6()");
	
	document.getElementById('level_title').innerHTML = 'Cruisevakantie eindigt in overleven.';
	document.getElementById('level_image').src = 'img/piraten.jpg';

	var title = document.getElementById("title");
	title.innerHTML = "Een boot.";

	var text = document.getElementById("text");
	text.innerHTML = "Na enkele minuten later zag je dat die mensen bewapend waren en bleef je staan van schrik. Ze schoten je varkens dood en sloegen jou helemaal kapot, daarna sloopte ze je hutje. Toen ze weg waren ging je terug naar het bos om hout te verzamelen om je hutje weer op te bouwen. Eenmaal aan het zoeken vond je een stuk touw en een GPS telefoon."

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Je neemt het stuk touw mee';
	opt1.onclick = function(){
		Level60();
	}

	var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'Je neemt de parachute mee.';
	opt2.onclick = function(){
		Level61();
	}

	var opt3 = document.getElementById('option3');
	opt3.innerHTML = 'Je neemt de GPS telefoon mee.'
	opt3.onclick = function(){
		Level7();
	}
}

function Level60() {
	console.log("Level60()");
	
	document.getElementById('level_title').innerHTML = 'Cruisevakantie eindigt in overleven.';
	document.getElementById('level_image').src = 'img/ophangen.jpg';

	var title = document.getElementById("title");
	title.innerHTML = "Het touw.";

	var text = document.getElementById("text");
	text.innerHTML = "Je ziet het niet meer zitten om op het eiland te overleven. Je hebt jezelf met het touw opgehangen en bent doodgegaan."

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Klik hier om terug te gaan.';
	opt1.onclick = function(){
		Level1();
	}

	var opt2 = document.getElementById('option2');
	opt2.style.display = 'none'
	opt2.innerHTML = '.';
	opt2.onclick = function(){
	}

	var opt3 = document.getElementById('option3');
	opt3.style.display = 'none'
	opt3.innerHTML = '.'
	opt3.onclick = function(){
	}
}

function Level61() {
	console.log("Level61()");
	
	document.getElementById('level_title').innerHTML = 'Cruisevakantie eindigt in overleven.';
	document.getElementById('level_image').src = 'img/parachute.jpg';

	var title = document.getElementById("title");
	title.innerHTML = "Een parachute.";

	var text = document.getElementById("text");
	text.innerHTML = "Je hebt gekozen voor om de parachute mee te nemen, maar je weet niet voor wat. Wat kan je er mee doen?"

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Vlot bouwen.';
	opt1.onclick = function(){
		Level9();
	}

	var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'Je gebruikt dit als deken.';
	opt2.onclick = function(){
		Level62();
	}

	var opt3 = document.getElementById('option3');
	opt3.style.display = 'none'
	opt3.innerHTML = '.'
	opt3.onclick = function(){
	}
}

function Level62() {
	console.log("Level62()");
	
	document.getElementById('level_title').innerHTML = 'Cruisevakantie eindigt in overleven.';
	document.getElementById('level_image').src = 'img/deken.jpg';

	var title = document.getElementById("title");
	title.innerHTML = "Een warme deken.";

	var text = document.getElementById("text");
	text.innerHTML = "Je pakt de parachute en gebruikt dit als deken voor in de nacht tegen de kou. That's it."

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Klik hier om terug te gaan.';
	opt1.onclick = function(){
		Level1();
	}

	var opt2 = document.getElementById('option2');
	opt2.style.display = 'none'
	opt2.innerHTML = '.';
	opt2.onclick = function(){
	}

	var opt3 = document.getElementById('option3');
	opt3.style.display = 'none'
	opt3.innerHTML = '.'
	opt3.onclick = function(){
	}
}

// level 7

function Level7() {
	console.log("Level7()");
	
	document.getElementById('level_title').innerHTML = 'Cruisevakantie eindigt in overleven.';
	document.getElementById('level_image').src = 'img/telefoon.jpg';

	var title = document.getElementById("title");
	title.innerHTML = "De GPS telefoon.";

	var text = document.getElementById("text");
	text.innerHTML = "Je pakt de GPS telefoon op en neemt het mee terug naar je hutje om rustig te kijken of dit ding nog wel werkt. Na vele malen proberen gaat de telefoon aan en spit je het menu door. Je probeert via de telefoon je familie te bereiken, dit lukt je maar 5 minuten en dan valt de telefoon uit. Je ziet aan de achterkant van de telefoon dat het oplaadbaar is via zonne-energie."

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Je gooit de telefoon tegen een boom.';
	opt1.onclick = function(){
		Level70();
	}

	var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'Je gaat de telefoon opladen en probeert het later nog een keer.';
	opt2.onclick = function(){
		Level8();
	}

	var opt3 = document.getElementById('option3');
	opt3.innerHTML = 'Je gooit de telefoon in het water.'
	opt3.onclick = function(){
		Level71();
	}
}

function Level70() {
	console.log("Level70()");
	
	document.getElementById('level_title').innerHTML = 'Cruisevakantie eindigt in overleven.';
	document.getElementById('level_image').src = 'img/kapotgooien.jpg';

	var title = document.getElementById("title");
	title.innerHTML = "Gooit 'm kapot!";

	var text = document.getElementById("text");
	text.innerHTML = "Uit boosheid gooi jij de telefoon in het zand met en daarna een steen op het beeldscherm. Je hebt hier werkelijk niets aan, nu kan je niet meer bellen voor hulp."

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Klik hier om terug te gaan.';
	opt1.onclick = function(){
		Level1();
	}

	var opt2 = document.getElementById('option2');
	opt2.style.display = 'none'
	opt2.innerHTML = '.';
	opt2.onclick = function(){
	}

	var opt3 = document.getElementById('option3');
	opt3.style.display = 'none'
	opt3.innerHTML = '.'
	opt3.onclick = function(){
	}
}

function Level71() {
	console.log("Level71()");
	
	document.getElementById('level_title').innerHTML = 'Cruisevakantie eindigt in overleven.';
	document.getElementById('level_image').src = 'img/inwater.jpg';

	var title = document.getElementById("title");
	title.innerHTML = "In het water ermee!";

	var text = document.getElementById("text");
	text.innerHTML = "Uit boosheid gooi je de telefoon in het water. Je hebt hier werkelijk niks aan, nu kan je niet meer bellen voor hulp."

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Klik hier om terug te gaan.';
	opt1.onclick = function(){
		Level1();
	}

	var opt2 = document.getElementById('option2');
	opt2.style.display = 'none'
	opt2.innerHTML = '.';
	opt2.onclick = function(){
	}

	var opt3 = document.getElementById('option3');
	opt3.style.display = 'none'
	opt3.innerHTML = '.'
	opt3.onclick = function(){
	}
}

// level 8
function Level8() {
	console.log("Level8()");
	
	document.getElementById('level_title').innerHTML = 'Cruisevakantie eindigt in overleven.';
	document.getElementById('level_image').src = 'img/wandelen.jpg';

	var title = document.getElementById("title");
	title.innerHTML = "Het eiland verkennen.";

	var text = document.getElementById("text");
	text.innerHTML = "Je bent van plan om de telefoon op te laden en legt de telefoon op een steen in de zon. In de tussentijd ben je van plan om het eiland beter te verkennen, maar na uren lopen bedenkt je en loop je terug naar je hutje. Tijdens het lopen bedenk je een plan om het eiland te verlaten maar je weet niet hoe. Je gaat terug naar de plek vaar je de drie items had gevonden."

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Pakt het stuk touw.';
	opt1.onclick = function(){
		Level80();
	}

	var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'Je pakt de parachute.';
	opt2.onclick = function(){
		Level9();
	}

	var opt3 = document.getElementById('option3');
	opt3.style.display = 'none'
	opt3.innerHTML = '.'
	opt3.onclick = function(){
	}
}

function Level80() {
	console.log("Level80()");
	
	document.getElementById('level_title').innerHTML = 'Cruisevakantie eindigt in overleven.';
	document.getElementById('level_image').src = 'img/ophangen.jpg';

	var title = document.getElementById("title");
	title.innerHTML = "Het touw.";

	var text = document.getElementById("text");
	text.innerHTML = "Je ziet het niet meer zitten om op het eiland te overleven. Je hebt jezelf met het touw opgehangen en bent doodgegaan."

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Klik hier om terug te gaan.';
	opt1.onclick = function(){
		Level1();
	}

	var opt2 = document.getElementById('option2');
	opt2.style.display = 'none'
	opt2.innerHTML = '.';
	opt2.onclick = function(){
	}

	var opt3 = document.getElementById('option3');
	opt3.style.display = 'none'
	opt3.innerHTML = '.'
	opt3.onclick = function(){
	}
}

// Level 9
function Level9() {
	console.log("Level9()");
	
	document.getElementById('level_title').innerHTML = 'Cruisevakantie eindigt in overleven.';
	document.getElementById('level_image').src = 'img/yacht.jpg';

	var title = document.getElementById("title");
	title.innerHTML = "Een vlot bouwen.";

	var text = document.getElementById("text");
	text.innerHTML = "Nadat je bent terug gelopen met je parachute ga je een vlot bouwen van hout, daarna maak je de parachute vast aan de verticale stronk en dit gebruik je als mast. Daarna duw je het vlot op het water. In de verte zie je een boot maar je verzint hoe je hun aandacht krijgt."

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Zwemt naar de boot toe.';
	opt1.onclick = function(){
		Level100();
	}

	var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'Je blijft geduldig wachten.';
	opt2.onclick = function(){
		Level90();
	}

	var opt3 = document.getElementById('option3');
	opt3.innerHTML = 'Je gaat springen.'
	opt3.onclick = function(){
		Level91();
	}
}

function Level90() {
	console.log("Level90()");
	
	document.getElementById('level_title').innerHTML = 'Cruisevakantie eindigt in overleven.';
	document.getElementById('level_image').src = 'img/geduld.jpg';

	var title = document.getElementById("title");
	title.innerHTML = "Ben je geduldig?";

	var text = document.getElementById("text");
	text.innerHTML = "Na enkele minuten wachten zie je dat de boot langzaam van je weg vaart. Het wachten was dus tijd verspilling en je gaat verder leven op zee."

	var opt1 = document.getElementById('option1');

	opt1.innerHTML = 'Zwemt naar de boot toe.';
	opt1.onclick = function(){
		Level10();
	}

	var opt2 = document.getElementById('option2');
	opt2.style.display = 'none'
	opt2.innerHTML = 'Je blijft geduldig wachten.';
	opt2.onclick = function(){
		Level90();
	}

	var opt3 = document.getElementById('option3');
	opt3.style.display = 'none'
	opt3.innerHTML = 'Je gaat springen.'
	opt3.onclick = function(){
		Level91();
	}
}

function Level91() {
	console.log("Level91()");
	
	document.getElementById('level_title').innerHTML = 'Cruisevakantie eindigt in overleven.';
	document.getElementById('level_image').src = 'img/enkel.jpg';

	var title = document.getElementById("title");
	title.innerHTML = "Ben je geduldig?";

	var text = document.getElementById("text");
	text.innerHTML = "Na vele keren springen op je vlot kwam je verkeerd terecht en verzwik jij je enkel, je hebt veel pijn."

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Klik hier om terug te gaan';
	opt1.onclick = function(){
		Level1();
	}

	var opt2 = document.getElementById('option2');
	opt2.style.display = 'none'
	opt2.innerHTML = 'Je blijft geduldig wachten.';
	opt2.onclick = function(){
		Level90();
	}

	var opt3 = document.getElementById('option3');
	opt3.style.display = 'none'
	opt3.innerHTML = 'Je gaat springen.'
	opt3.onclick = function(){
		Level91();
	}
}

// Level 10
function Level100() {
	console.log("Level100()");
	
	document.getElementById('level_title').innerHTML = 'Cruisevakantie eindigt in overleven.';
	document.getElementById('level_image').src = 'img/villa.jpg';

	var title = document.getElementById("title");
	title.innerHTML = "Terug naar familie.";

	var text = document.getElementById("text");
	text.innerHTML = "Je bent aan boord geklommen en mocht mee varen naar het vaste land. Hier werd je naar het politie bureau gebracht en werd je ondervraagt wat er is gebeurd en waar je verbleef. Nadat je je familie jou heeft opgehaald van het politie bureau ga je mee naar hun huis. Hier kom je weer bij en vertel je verhalen wat je allemaal hebt meegemaakt. Na enkele jaren later wil je toch weer iets gaan doen, maar wat?"

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Je gaat weer solliciteren.';
	opt1.onclick = function(){
		Level101();
	}

	var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'Je gaat lekker niks doen.';
	opt2.onclick = function(){
		Level102();
	}

	var opt3 = document.getElementById('option3');
	opt3.style.display = 'inline-block'
	opt3.innerHTML = 'Je gaat op straat leven.'
	opt3.onclick = function(){
		Level103();
	}
}

function Level101() {
	console.log("Level101()");
	
	document.getElementById('level_title').innerHTML = 'Cruisevakantie eindigt in overleven.';
	document.getElementById('level_image').src = 'img/solliciteren.jpg';

	var title = document.getElementById("title");
	title.innerHTML = "Een baan zoeken.";

	var text = document.getElementById("text");
	text.innerHTML = "Nadat je hebt gesolliciteerd hebt en bent aangenomen. Je hebt eindelijk weer een leven."

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Speel het spel opnieuw.';
	opt1.onclick = function(){
		Level1();
	}

	var opt2 = document.getElementById('option2');
	opt2.style.display = 'none'
	opt2.innerHTML = 'Je gaat lekker niks doen.';
	opt2.onclick = function(){
		Level101();
	}

	var opt3 = document.getElementById('option3');
	opt3.style.display = 'none'
	opt3.innerHTML = 'Je gaat op straat leven.'
	opt3.onclick = function(){
		Level102();
	}
}

function Level102() {
	console.log("Level101()");
	
	document.getElementById('level_title').innerHTML = 'Cruisevakantie eindigt in overleven.';
	document.getElementById('level_image').src = 'img/lui.jpg';

	var title = document.getElementById("title");
	title.innerHTML = "Een uitkering.";

	var text = document.getElementById("text");
	text.innerHTML = "Je hebt besloten dat je geen reet meer gaat doen voor de maatschappij en leeft op een uitkering."

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Speel het spel opnieuw.';
	opt1.onclick = function(){
		Level1();
	}

	var opt2 = document.getElementById('option2');
	opt2.style.display = 'none'
	opt2.innerHTML = 'Je gaat lekker niks doen.';
	opt2.onclick = function(){
		Level101();
	}

	var opt3 = document.getElementById('option3');
	opt3.style.display = 'none'
	opt3.innerHTML = 'Je gaat opjezelf wonen.'
	opt3.onclick = function(){
		Level103();
	}
}

function Level103() {
	console.log("Level103()");
	
	document.getElementById('level_title').innerHTML = 'Cruisevakantie eindigt in overleven.';
	document.getElementById('level_image').src = 'img/zwerver.jpg';

	var title = document.getElementById("title");
	title.innerHTML = "Op straat.";

	var text = document.getElementById("text");
	text.innerHTML = "Minder goede keuze... Je hebt gekozen om zwerver te worden en lekker op straat te leven."

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Speel het spel opnieuw.';
	opt1.onclick = function(){
		Level1();
	}

	var opt2 = document.getElementById('option2');
	opt2.style.display = 'none'
	opt2.innerHTML = 'Je gaat lekker niks doen.';
	opt2.onclick = function(){
		Level101();
	}

	var opt3 = document.getElementById('option3');
	opt3.style.display = 'none'
	opt3.innerHTML = 'Je gaat opjezelf wonen.'
	opt3.onclick = function(){
		Level102();
	}
}
