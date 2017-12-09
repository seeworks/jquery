$(document).ready(function () {
    // cadastra aluno
    $("#cadastrar").click(function () {

    var pode = true;
    $('input[type=text]').css('border-color', '');
    $(".erro").hide();
    $(".erro").empty();
        $('input[type=text]').each(function (idx, el) {

            if ($(el).val() === "") {
                var msg = $(el).attr("erro-msg");
                $(".erro").append(msg+"<br>");

                $(el).css('border-color', 'red');
                pode = false;
                $(".erro").show();
            }

        });

        if (pode == true) {

            var codigo = $("input[name=codigo").val();
            var nome = $("input[name=nome").val();
            var data = $("input[name=data").val();
            var email = $("input[name=email").val();

            $("#listagem tbody").append
            (
                "<tr>" +
                "<td>" + codigo + "</td>" +
                "<td>" + nome + "</td>" +
                "<td>" + data + "</td>" +
                "<td>" + email + "</td>" +
                "</tr>"
            );
            
            $('input[type=text]').val('');
        }
    }); //fim cadastro
  
        $("input[name=codigo").keydown(function(ev){
            //console.log(ev);
            if(ev.keyCode < 48 ||ev.keyCode > 57 )
             {
                if(ev.keyCode != 8 || ev.keyCode != 46)
                 {
                   return false;
                 } 
             }
            
        });
        $("input[name=data").keydown(function(ev){
            //console.log(ev.key);
            if(ev.key.search(/[0-9\/]/g) < 0)
            {
                if(ev.keyCode != 8 || ev.keyCode != 46)
                {
                    return false;
                }
            }
            
        });
        /*$("input[name=email").keydown(function(ev){
            console.log(ev.keyCode);
            if(ev.keyCode.search()) < 0)
            {
                if(ev.keyCode != 8 || ev.keyCode != 46)
                {
                    return false;
                }
            }
            
        });*/
    
});
