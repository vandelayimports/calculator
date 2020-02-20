$(document).ready(function()  {
  $("form#calculator").submit(function()  {
    event.preventDefault();
    var number1 = parseInt($("#input1").val());
    var number2 = parseInt($("#input2").val());
    var operator = $("input:radio[name=operator]:checked").val();
    var result = add(number1, number2);
    $("#output").text(result);
  });
});