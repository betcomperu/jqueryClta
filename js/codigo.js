var x;
x = $(document);
x.ready(iniciar);

function iniciar() {
  var x;
  x = $("#hola");
  x.click(verde);
}
function verde() {
  var x;
  x = $("#hola");
  x.css("color","red");
  x.css("background-color","#F2F2F2");
  x.css("font-size","24px");
  x.css("border", "4px solid #bbbbaa");
  x.css("text-align", "center");
 
}
