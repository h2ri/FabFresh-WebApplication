'use strict';


$(document.body).click(function(e){
   var $box = $('#forgot_password');
   if($box[0] && e.target.id !== 'forgot_password' && !$.contains($box[0], e.target))
      $box.remove();

  var $box = $('#sign_up');
   if($box[0] && e.target.id !== 'sign_up' && !$.contains($box[0], e.target))
      $box.remove();
  var $box = $('#otp');
   if($box[0] && e.target.id !== 'otp' && !$.contains($box[0], e.target))
      $box.remove();
  var $box = $('#reset_password');
   if($box[0] && e.target.id !== 'reset_password' && !$.contains($box[0], e.target))
      $box.remove();  
});

$('#login_btn').click(function(){
  $('#login').toggle(300);
  document.body.addEventListener('click', boxCloser, true);
  
});

function boxCloser(e){
  var $box = $('#login');
  if($box[0] && e.target.id != 'login' && e.target.id != 'login_btn' && !$.contains($box[0], e.target)){
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
