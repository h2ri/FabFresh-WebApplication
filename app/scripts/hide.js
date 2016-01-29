$('#login-btn').click(function(){
	$('#login').show(function(){
		//document.body.addEventListener('click', boxCloser, true);
	});
	document.body.addEventListener('click', boxCloser, true);
  
});

function boxCloser(e){
  if(e.target.id != 'login'){
     document.body.removeEventListener('click', boxCloser, true);
     $('#login').hide();
  }
}

