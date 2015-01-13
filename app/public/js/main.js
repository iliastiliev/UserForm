$(function(){
	$('.show-form').click(function(e){
		var index = $(this).attr('data-index');
		$('#input-form-'+index).toggleClass('hide-form').toggleClass('show-form-content')
	});

	$('.btn-save').click(function(e){
		e.preventDefault();
		var id = $(this).attr('data-save-btn');
		var username = $('.username-'+id).val();
		var fullname = $('.fullname-'+id).val();
		var email = $('.email-'+id).val();
		var phone = $('.phone-'+id).val();
		console.log((/^[\s\S]{6,18}$/g).test(username));

		var isUserNameValidate = (/^[\s\S]{6,18}$/g).test(username);
		var isFullNameValidate = (/^[A-Za-z\s]+$/g).test(fullname);
		var isEmailValidate = (/^\S+@\S+\.\S+$/g).test(email)
		var isPhoneValidate = (/^\+?[0-9]{8,14}$/g).test(phone);
		// Selecting arguments

		// Validation
		if(!isUserNameValidate) {
			$('.error.username-error-'+id).html("Invalid username");
		}
		else {
			$('.error.username-error-'+id).empty();
		}

		if(!isFullNameValidate) {
			$('.error.fullname-error-'+id).html("Invalid fullname");
		}
		else {
			$('.error.fullname-error-'+id).empty();
		}

		if(!isEmailValidate) {
			$('.error.email-error-'+id).html("Invalid email address");
		}
		else {
			$('.error.email-error-'+id).empty();
		}

		if(!isPhoneValidate) {
			$('.error.phone-error-'+id).html("Invalid phone number");
		}
		else {
			$('.error.phone-error-'+id).empty();
		}
		
		if(isUserNameValidate && isFullNameValidate && isEmailValidate && isPhoneValidate) 
			$('.submit-'+id).submit();
	});

	$('.btn-create-user').click(function(e){
		e.preventDefault();
		var username = $('.username-create').val();
		var fullname = $('.fullname-create').val();
		var email = $('.email-create').val();
		var phone = $('.phone-create').val();
		
		var isUserNameValidate = (/^[\s\S]{6,18}$/g).test(username);
		var isFullNameValidate = (/^[A-Za-z\s]+$/g).test(fullname);
		var isEmailValidate = (/^\S+@\S+\.\S+$/g).test(email)
		var isPhoneValidate = (/^\+?[0-9]{8,14}$/g).test(phone);
		// Selecting arguments
		console.log(isUserNameValidate)
		// Validation
		if(!isUserNameValidate) {
			$('.error.username-error-create').html("Invalid username");
		}
		else {
			$('.error.username-error-create').empty();
		}

		if(!isFullNameValidate) {
			$('.error.fullname-error-create').html("Invalid fullname");
		}
		else {
			$('.error.fullname-error-create').empty();
		}

		if(!isEmailValidate) {
			$('.error.email-error-create').html("Invalid email address");
		}
		else {
			$('.error.email-error-create').empty();
		}

		if(!isPhoneValidate) {
			$('.error.phone-error-create').html("Invalid phone number");
		}
		else {
			$('.error.phone-error-create').empty();
		}
		
		if(isUserNameValidate && isFullNameValidate && isEmailValidate && isPhoneValidate) 
			$('.submit-create-form').submit();
	});
})