/** jquery **/


$(document).ready(function(){
    
    $("div, h1").click(function(){

        $(this).css("background-color", "red");
    });
    
    $("#mudar").click(function (){
        var nome = $("#nome").val();
        
        var novo = $("<li>"+ nome +"</li>").click(function(){
            $(this).css("background-color", "blue").fadeOut("slow", function(){
                $(this).remove();
            });            
        });
     
        
        $("ul").append(novo);


    });

    

});

