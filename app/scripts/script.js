$('#show').click(function(){

  $('#login').show(function(){
    document.body.addEventListener('click', boxCloser, false);
  });

});

function boxCloser(e){
  if(e.target.id != 'login'){
     document.body.removeEventListener('click', boxCloser, false);
     $('#login').hide();
  }
}

