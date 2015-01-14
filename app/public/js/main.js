/* main file, which consist all function for manipulation of user interface */
$(function(){

	/* function for show and hide of form for edit */
	$('.show-form').click(function(e){
		var index = $(this).attr('data-index');
		$('#input-form-'+index).toggleClass('hide-form').toggleClass('show-form-content')
	});

	/* function for creation of button click event for pushing of button Save */
	$('.btn-save').click(function(e){
		e.preventDefault();

		/*getting of values from form*/
		var id       = $(this).attr('data-save-btn');
		var username = $('.username-'+id).val();
		var fullname = $('.fullname-'+id).val();
		var email    = $('.email-'+id).val();
		var phone    = $('.phone-'+id).val();

		/*getting of results from validation of user information*/
		var isUserNameValidate = (/^[\s\S]{6,18}$/g).test(username);
		var isFullNameValidate = (/^[A-Za-z\s]+$/g).test(fullname);
		var isEmailValidate    = (/^\S+@\S+\.\S+$/g).test(email)
		var isPhoneValidate    = (/^\+?[0-9]{8,14}$/g).test(phone);
		
		/*show of error message when the information is wrong*/ 
		/*check for valid username*/
		if(!isUserNameValidate) {
			$('.error.username-error-'+id).html("Invalid username");
		}
		else {
			$('.error.username-error-'+id).empty();
		}
		/*check for valid fullname*/
		if(!isFullNameValidate) {
			$('.error.fullname-error-'+id).html("Invalid fullname");
		}
		else {
			$('.error.fullname-error-'+id).empty();
		}
		/*check for valid email*/
		if(!isEmailValidate) {
			$('.error.email-error-'+id).html("Invalid email address");
		}
		else {
			$('.error.email-error-'+id).empty();
		}
		/*check for valid phone*/
		if(!isPhoneValidate) {
			$('.error.phone-error-'+id).html("Invalid phone number");
		}
		else {
			$('.error.phone-error-'+id).empty();
		}
		
		if(isUserNameValidate && isFullNameValidate && isEmailValidate && isPhoneValidate) 
			$('.submit-'+id).submit(); // send of valided information of the client to controller
	});

	/*function for creation of button click event for button Create from modal form for creationg of new user*/
	$('.btn-create-user').click(function(e){
		e.preventDefault();

		var username = $('.username-create').val();
		var fullname = $('.fullname-create').val();
		var email    = $('.email-create').val();
		var phone    = $('.phone-create').val();
		
		var isUserNameValidate = (/^[\s\S]{6,18}$/g).test(username);
		var isFullNameValidate = (/^[A-Za-z\s]+$/g).test(fullname);
		var isEmailValidate    = (/^\S+@\S+\.\S+$/g).test(email)
		var isPhoneValidate    = (/^\+?[0-9]{8,14}$/g).test(phone);
		
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
	
	/*function for send of searched creteria to controller*/
	$('.btn-search-user').click(function(e){
		e.preventDefault();

		$('#search-form').submit();
	});
})