var operands = ["+", "-", "/", "*"];
var ranOperands = operands[Math.floor(Math.random()*operands.length)]
var ranNumbers = Math.floor(Math.random() * 11);
var secRanNumbers = Math.floor(Math.random() * 11 + 1);
console.log(ranNumbers + ranOperands + secRanNumbers)


$("h1").append("<span>" + ranNumbers + ranOperands + secRanNumbers + "</span>");
var equation = $("span").text();
console.log((eval(equation)))


$("input").keypress(function(event){
  if(event.which === 13){
    var answer = $(this).val();
    if(parseInt(answer) === parseInt(eval(equation))){
      $(".check").text("Correct!!");
    }else{
      $(".check").text("Wrong try again!!")
      answer = $(this).val("");
      console.log((eval(equation)));
    }
  }
})

$("button").on("click", function(){
  equation = $("span").remove();
  $("input").val(" ");
  $(".check").text("");
  operands = ["+", "-", "/", "*"];
  ranOperands = operands[Math.floor(Math.random()*operands.length)]
  ranNumbers = Math.floor(Math.random() * 11);
  secRanNumbers = Math.floor(Math.random() * 11 + 1);
  console.log(ranNumbers + ranOperands + secRanNumbers)

  $("h1").append("<span>" + ranNumbers + ranOperands + secRanNumbers + "</span>");
  equation = $("span").text();
  console.log(eval(equation))
})
