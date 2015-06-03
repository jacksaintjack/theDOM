$(document).ready(function() {
  // anything i do in here is safe to interact with the document
  // when i say 'safe', i mean the dom exists at this point
  //
  $('.addNumbers').click(function(event){
  event.preventDefault();
  var inputOne = Number($("#num_one").val());
  var inputTwo = Number($("#num_two").val());
   $("#answerAdd").html(inputOne + inputTwo)

  });

  $('.subtractNumbers').click(function(event){
  event.preventDefault();
  var inputOne = Number($("#num_one").val());
  var inputTwo = Number($("#num_two").val());
   $("#answer").html(inputOne - inputTwo)

  });

  $('.multiplyNumbers').click(function(event){
  event.preventDefault();
  var inputOne = Number($("#num_one").val());
  var inputTwo = Number($("#num_two").val());
   $("#answer").html(inputOne * inputTwo)

  });

  $('.divideNumbers').click(function(event){
  event.preventDefault();
  var inputOne = Number($("#num_one").val());
  var inputTwo = Number($("#num_two").val());
   $("#answer").html(inputOne / inputTwo)
 });
});
