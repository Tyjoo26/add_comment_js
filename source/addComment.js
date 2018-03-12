$(document).ready(function(){
  $('#new_comment_button').click(function(e){
    e.preventDefault();
    if($("#new_comment").is(":visible")){
      $("#new_comment").hide();
    } else {
      $("#new_comment").show();
    }
  })
})
