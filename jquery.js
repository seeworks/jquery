/* JQuery */

//funcao clicar no botao
/*function mudar(){
    var texto = $(".titulo")
    alert(texto.html());
}
// Carregar sem clicar
$(document).ready(function(){
var texto = $("div")
console.log(texto);
$("#mudar").click(mudar);
$("#mudar").click(function(){
    $("div").css("background-color","yellow"); 
});

});
// colocar cor no elemento h1
function mudar(){
 $("h1").css("background-color","orange");
 $("div").css("background-color","red");
}

//pode clicar em qualquer area
$(document).ready(function(){
    $("div, h1").click(function(){
        $(this).css("background-color","orange");
    });
});
*/
// adicionar cidades na <li>
$(document).ready(function () {

    $("div, h1").click(function () {
        $(this).css("background-color", "silver");
    });

    $("#mudar").click(function () {
        var nome = $("#nome").val();
        var novo = $("<li>" + nome + "</li>").click(function () {
            $(this).fadeIn("slow", function(){
                $(this).remove();
            });
            
        });

        $( "<span> X </span>").click(function(){
            // fica pra proxima aula
        });

        $("ul").append(novo);
    });

});

