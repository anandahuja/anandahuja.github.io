function askQuestions() {

	var firstName = prompt('What is your first name?');
	var lastName = prompt("What is your last name?");

	var fullName = firstName + ' ' + lastName;

	console.log(fullName);

	if (firstName.toLowerCase() == 'general' && lastName.toLowerCase() != 'assembly') { /*toLowerCase() removes case out of the equation*/
		console.log('Greetings, General!');
	}

	var userAge = prompt('How old are you?');

	userAge = parseInt(userAge); //parseInt makes the input an integer

	if (userAge >= 18) {
		console.log('User is an adult.');
	} else if (userAge >= 13) {
		console.log('User is a teenager.');
	} else {
		console.log('Go away, kid.')
	}

	$('h2').text('Hello ' + fullName);

	var favColor = prompt('What is your favorite color?').toLowerCase();

	if (favColor == 'red' || favColor == 'blue' || favColor == 'green' || favColor == 'yellow') {
		$('h1').css('color', favColor);
	}

}




// alert($); //this is an alert - just making sure the jquery file has been loaded in


// when the page has loaded 
// the "$" is just calling on the database jquery - if just using javascript, don't need the "$"
$ (function () {

	$('img').on('click', askQuestions);
		//hide all the content when the page loads
		$('h3').next().not('img').hide();

		// when the user clicks an h3
		$('h3').on('click', function(){

			// hide the next element
			//$(this).next().hide();

			//toggle the next element
			$(this).next().not('img').slideToggle(500);

		});

});