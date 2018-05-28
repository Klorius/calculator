



$(document).ready(function(){
		
	var number;
/*
	//udelukker bogstaver som input, så jeg tillader kun de keychar som jeg vil have
	$(window).keyUp(function(event){

		console.log(event.keyCode);
		if (((event.keyCode < 8 || event.keyCode > 13) && event.keyCode < 42 || event.keyCode > 57) && event.keyCode < 106 || event.keyCode > 111) {
			event.preventDefault();
		}
		
		//lader ENTER blive brugt som =
		else if (event.keyCode === 13) {
			let keyNumber = $("#input").html();
			let result = eval(keyNumber);
			$("#input").text(result);
		}

		//lader backspace blive brugt som C
		else if (event.keyCode === 8) {
			$("#input").empty();
		}

		//lader DELETE bliver brugt som CE
		else if (event.keyCode === 46) {
			let removeNumber = $("#input").html();
		 	number = removeNumber.substring(0, removeNumber.length -1)
			$("#input").text(number);
		}
		//lav muligvis det hele om til en string og send det til funktionen i button
		else if (event.keyCode > 42 || event.keyCode < 47) {
			var keyNumber = $("#input").html();
			//bruger regex til at id' om der er en operator i enden af stregen og
			// fjerne den operator der er der 
			console.log(/[\-\/\+\*\%]$/gm.test(keyNumber))
			
			if (/[\-\/\+\*\%]$/gm.test(keyNumber)) { 
				var keyRep = keyNumber.replace(/[\-\/\+\*\%]$/gm, "")		
				number = keyRep;
				$("#input").text(number)
			}

			
			else {number = keyNumber}	
			//erstatter hele strengen og sætter den seneste operator man trykkede på ind
			
			$("#input").text(number + String.fromCharCode(event.keyCode))


		}
		
		//resten bliver lagt ind som input til mit "input"(p element) felt 			
		else {keyNumber = event.keyCode
				number = String.fromCharCode(keyNumber)
				$("#input").append(number);
			}
		
	});
		
*/
	$("button").click(function(number, fnt, fntnumber){
		 //lade CE knapper blive brugt som clearentry
		if ($(this).val() == "CE") {
		 	let removeNumber = $("#input").html();
		 	number = removeNumber.substring(0, removeNumber.length -1)
			$("#input").text(number)}
		
		//gør så man kan ikke kan få 2 operatore efter hinanden, 
		//men man får den seneste man har trykket på
		else if ($(this).hasClass("fnt")) {
			var fntNumber = $("#input").html();
			//bruger regex til at id' om der er en operator i enden af stregen og
			// fjerne den operator der er der 
			console.log(/[\-\/\+\*\%]$/gm.test(fntNumber))
			if (/[\-\/\+\*\%]$/gm.test(fntNumber)){ 
				var fntRep = fntNumber.replace(/[\-\/\+\*\%]$/gm, "")		
				number = fntRep;
				$("#input").text(number)
			}

			else {number = fntNumber}	
			//erstatter hele strengen og sætter den seneste operator man trykkede på ind
			$("#input").text(number + $(this).val())

		}

		//sætter det tal/operator ind som man trykkede på
		else {
			number = $(this).val();
			$("#input").append(number);}
		
	})
	//når man trykker på = knapper fortolker eval funktionen strengen og udfører inputtet
	var result;
	$("#equal").click(function(){
		let newNumber = $("#input").html();
		result = eval(newNumber);
		$("#input").text(result);
		$("#inputFromPaper").text(result);
	})
	//får knappen C til at cleare input for alt 
	$("#clear").click(function(){
		$("#input").empty();
	})

})
