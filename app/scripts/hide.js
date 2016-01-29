'use strict';
$(document.body).click(function(e){

   var $box = $('#forgot-password');
    //alert(e.target.id);
   if(e.target.id !== 'forgot-password' && e.target.id !== 'forgot-password-email'){
       //alert(e.target.id);
      $box.remove();
   }

  var $box = $('#sign-up');
   if(e.target.id !== 'sign-up' && e.target.id != 'sign-up-name' && e.target.id != 'sign-up-email' && e.target.id != 'sign-up-mobile' && e.target.id != 'sign-up-password' && e.target.id != 'sign-up-confirm-password')
      $box.remove();
  var $box = $('#reset-password');
   if(e.target.id !== 'reset-password' && e.target.id != 'reset-password-email' && e.target.id != 'reset-password-password' && e.target.id != 'reset-password-confirm-password')
      $box.remove();

});


$('.btn').click(function(){
	$('#login').show(function(){
		//document.body.addEventListener('click', boxCloser, true);
	});
	document.body.addEventListener('click', boxCloser, true);
  
});

function boxCloser(e){
  if(e.target.id != 'login'  && e.target.id != 'login-email'  && e.target.id != 'login-password'){
     document.body.removeEventListener('click', boxCloser, true);
     $('#login').hide();
  }
}

$('input').on('focus', function() {
  $('label').addClass('filled focused');
});

$('input').on('blur', function() {
  $('label').removeClass('focused');
  
  if (this.value === '') {
    $('label').removeClass('filled')
  }
});
