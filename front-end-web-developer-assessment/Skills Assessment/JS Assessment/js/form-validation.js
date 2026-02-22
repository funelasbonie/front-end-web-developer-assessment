$(document).ready(function() {
	var movieInput = $('#question3');
	var movieSelect = $('<select>', {
		name: 'question3',
		id: 'question3'
	});
	
	movieSelect.append($('<option>', {
		value: '',
		text: '-- Select a movie --'
	}));
	
	var movies = ['Star Wars', 'Lord of the Rings', 'Harry Potter', 'Hunger Games'];
	$.each(movies, function(index, movie) {
		movieSelect.append($('<option>', {
			value: movie,
			text: movie
		}));
	});
	
	movieInput.replaceWith(movieSelect);
	
	$('#favoritesForm').on('submit', function(e) {
		var isValid = true;
		var question1 = $('#question1').val().trim();
		var question2 = $('#question2').val().trim();
		
		$('#question1, #question2').removeClass('error valid');
		$('#error1, #error2').removeClass('show');
		$('#success1, #success2').removeClass('show');
		
		if (question1 === '') {
			$('#question1').addClass('error').removeClass('valid');
			$('#error1').addClass('show');
			$('#success1').removeClass('show');
			isValid = false;
		} else {
			$('#question1').addClass('valid').removeClass('error');
			$('#error1').removeClass('show');
			$('#success1').addClass('show');
		}
		
		if (question2 === '') {
			$('#question2').addClass('error').removeClass('valid');
			$('#error2').addClass('show');
			$('#success2').removeClass('show');
			isValid = false;
		} else {
			$('#question2').addClass('valid').removeClass('error');
			$('#error2').removeClass('show');
			$('#success2').addClass('show');
		}
		
		if (!isValid) {
			e.preventDefault();
			return false;
		}
	});
	
	$('#question1, #question2').on('input', function() {
		var $input = $(this);
		var value = $input.val().trim();
		var inputId = $input.attr('id');
		var errorId = inputId === 'question1' ? '#error1' : '#error2';
		var successId = inputId === 'question1' ? '#success1' : '#success2';
		
		if (value === '') {
			$input.removeClass('error valid');
			$(errorId).removeClass('show');
			$(successId).removeClass('show');
		} else {
			$input.removeClass('error').addClass('valid');
			$(errorId).removeClass('show');
			$(successId).addClass('show');
		}
	});
});
