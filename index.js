// Cour sur le JQuery //

window.jQuery(); // Notation mentionnant window et utlisant l'objet jquery
jQuery(); // meme chose qu' au dessus avec le window implicite

window.$(); // Notation mentionnant window et utlisant l'objet $
$(); // meme chose qu' au dessus avec le window implicite

// sélectionnez une phrase p et la masquer à l'écran
$("p").hide();

// sélectionnez la phrase avec un id p1 et la masques
$("#p1").hide();

/*
    Dès que le document est prêt à être manipulé, on exécute le code
    à l'intérieur de notre fonction anonyme
*/
// Premier façon ligne 16 index.html
$(function(){
    $("#p1").hide(); 
})
// deuxième façon

$(function () {
    $("#p1").hide();
})

// On va notamment pouvoir sélectionner des éléments input en fonction de la valeur de leur attribut type grâce aux pseudo-sélecteurs jQuery
// :text, :password, :checkbox, :radio, :submit, :file, :image, :button et :reset.

//     :input pour cibler tous les éléments input, textarea, select et button ;
//     :checked pour cibler les éléments cochés ou sélectionnés pour des input type="checkbox", input type="radio" et des éléments de liste select ;
//     :selected pour cibler les éléments option sélectionnés dans une liste select ;
//     :disabled pour cibler les éléments input qui possèdent un attribut disabled ;
//     :enabled pour cibler tous les éléments qui ne possèdent pas d’attribut disabled.

// Ligne 18 index.html
$(function () {
    let span = $("#p2").has("span").css("color", "orange");
    return span;
});
$(function () {
    let span = $("#p3").has("span").css("color", "orange");
    return span;
});

// ligne 22 index.html
$(function () {
    let souligne = $("span").filter(".souligne").css("color", "green");
    return souligne;
});

// ligne 25 index.html , modifie les span qui non pas la class souligne
$(function () {
    $("span").not(".souligne").css("color", "red");
});

$(function () {
    $("span").first().css("color", "blue");
    $("span").eq(2).css("color", "silver");
    $("span").last().css("color", "red");
})

// ligne 32 index.html
$(function () {
      /*Cible l'élément parent direct de chaque élément li et ajoute
    une bordure autour*/
    $("li").parent().css("border", "1px solid black");

/*Cible l'élément parent direct de chaque élément li uniquement si
    il possède un id="parents" et change la couleur de fond en bleu*/
    $("li").parent("#parents").css("background-color", "lightBlue");
})

$(function () {
     /*Sélectionne tous les ancêtres des éléments ul et ajoute une bordure
    noire d'1px autour de chacun d'entre eux*/
   $("ul").parents().css("border", "1px solid black");

/*Ne cible que les ancêtres des éléments ul qui sont des div et change 
    leur couleur de fond en bleu*/
   $("ul").parents("div").css("background-color", "lightBlue");
})

// ligne 45 index.html
/*Sélectionne tous les ancêtres de l'élément qui possède l'id="enfants" 
    jusqu'au premier ancêtre possédant une class="conteneur" sans l'inclure*/
$(function () {
    $("#enfants").parentsUntil(".conteneur").css("border","1px solid blue")
})

$(function () {
    /*Sélectionne tous les enfants (descendants directs) des éléments possédant
    un attribut class="conteneur"*/
    $(".container").children().css("border", "1px solid black");

    /*Sélectionne uniquement les éléments h1 descendants directs des éléments 
    possédant un attribut class="conteneur"*/
    $(".container").children("h1").css("color", "blue");

    /*Cible tous les descendants de l'élément possédant l'id="methodes" qui 
    possèdent un attribut class="bglb"*/
    $("#methodes").find(".bglb").css("background-color", "lightBlue");
    $("#methode").find(".bglb").css("background-color", "lightBlue");
});

$(function () {
//      /*Sélectionne les éléments li qui sont les premiers enfants de leur parent
//     puis récupère tous leurs frères et leur  applique une couleur de texte bleue*/
    $("li:first-child").siblings().css("color", "blue");

//     /*Sélectionne les éléments li qui sont les premiers enfants de leur parent et
//     ne récupère que les éléments frères qui occupent une place impaire en comptant à partir de li:first-child*/
    $("li:first-child").siblings(":odd").css("text-decoration", "underline");
})

$(function () {
     /*Sélectionne les éléments li qui sont les premiers enfants de leur parent 
    puis récupère tous leurs frères et leur  applique une couleur de texte bleue*/
    $("li:first-child").next().css("color", "blue");

    /*Sélectionne les éléments li qui sont les premiers enfants de leur parent et
    ne récupère que les éléments frères qui occupent une place impaire en comptant à partir de li:first-child*/
    $("li:first-child").nextAll(":odd").css("text-decoration", "underline");

    /*Sélectionne les éléments frères du 2è élément li le suivant jusqu'au 5è élément
    li sans inclure celui-ci dans la sélection et applique une police épaisse*/
    $("li:nth-child(2)").nextUntil("li:nth-child(5)").css("font-weight", "bold");
})

