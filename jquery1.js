$(document).ready(function () {
    $("#cores").change(function () {
        var cor = $(this).val();
        $("h1.titulo").css("color", cor);
    });


    $("#add").click(function () {
        var nova = $("#nova-cor").val();
        $("<option>" + nova + "</option>").appendTo("#cores");

    });


});

