
$(function () {
    // selectionne l'id btn1
    $("#btn1").show();
    $("#btn1").css("color","red");
    $("#btn1").css("font-size","22px");
})


// function on("click")
// $(function () {
//     $("#btn").on("click",function () {
//         $("button").hide();
//     })
// })


// function on("click")
$(function () {
    $("#btn1").on("click",function () {
        $("button:not(#btn1)").hide();
        $(this).css("color", "red");
        $(this).css("background-color", "yellow");
        $(this).css("font-size", "40px");
    })
})

$(function () {
    $("#afficheur").css("width", "400px");
    $("#afficheur").css("height", "400px");
    $("#afficheur").css("border", "2px dashed red");
    $("#afficheur").css("margin-top", "10px");
    $("#afficheur").css("padding-left", "10px");
})

$(function () {
    $('#submit').on("click", function () {
        let message = $("#message").val();
        console.log(message);
        $("#afficheur").html("<p>Voici votre message :</p> " + message);
        $("#message").val("");
    })
})