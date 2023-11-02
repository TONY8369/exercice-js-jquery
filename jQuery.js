// html() : Permet d’obtenir le contenu HTML du premier élément d’une sélection ou de définir le contenu HTML de tous les éléments de la sélection ;
// text() : Permet d’obtenir ou de définir les contenus textuels de tous les éléments d’une sélection ;
// attr() : Permet d’obtenir la valeur d’un attribut du premier élément d’une sélection ou de définir un ou plusieurs attributs pour tous les éléments de la sélection ;
// prop() : Permet d’obtenir la valeur d’une propriété du premier élément d’une sélection ou de définir une ou plusieurs propriétés pour tous les éléments de la sélection ;
// val() : Permet d’obtenir la valeur (le contenu de l’attribut value) du premier élément d’une sélection ou de définir une valeur pour tous les éléments de la sélection ;
// css() : Permet d’obtenir la valeur d’une propriété CSS pour le premier élément d’une sélection ou de définir les valeurs d’une ou de plusieurs propriétés CSS pour tous les éléments de la sélection ;
// height() : Permet d’obtenir la hauteur de la boite élément du premier élément d’une sélection ou de définir cette hauteur pour tous les éléments de la sélection ;
// innerHeight() : Idem height() mais inclut les marges intérieures (padding) dans le calcul ;
// outerHeight() : Idem height() mais inclut les marges intérieures (padding), les bordures et de manière optionnelle les marges extérieures (margin) dans le calcul ;
// width() : Permet d’obtenir la largeur de la boite élément du premier élément d’une sélection ou de définir cette largeur pour tous les éléments de la sélection ;
// innerWidth() : Idem width() mais inclut les marges intérieures (padding) dans le calcul ;
// outerWidth() : Idem width() mais inclut les marges intérieures (padding), les bordures et de manière optionnelle les marges extérieures (margin) dans le calcul ;
// offset() : Permet d’obtenir les coordonnées actuelles du premier élément d’une sélection ou de définir les coordonnées de tous les éléments de la sélection relativement au document ;
// scrollLeft() : Permet d’obtenir la position actuelle de la barre de défilement horizontale du premier élément d’une sélection ou de définir cette position tous les éléments de la sélection ;
// scrollTop() : Permet d’obtenir la position actuelle de la barre de défilement verticale du premier élément d’une sélection ou de définir cette position tous les éléments de la sélection.


$(function(){
    //On utilise html() comme getter
    let page = $("body").html();
    let p1 = $("#p1").html();

    //On affiche le contenu de nos variables dans la console 
    console.log("Page : " + page);
    console.log("p1 : " + p1);

    //On utilise html() comme setter
    $("#p2").html("<strong>Autre phrase !</strong>");
});

$(function(){
    //On utilise text() comme getter
    let text = $("p").text();
    
    //On affiche le contenu de nos variables dans la console 
    console.log("element: " + text)

    // On utilise text() comme setter
    $("#p2").text("<strong>Autre phrase !</strong>");
});


$(function(){
    $(".conteneur").prepend("<p>Paragraphe ajouté avec prepend()</p>");
    $(".conteneur").append("<ul><li>Element n°1</li><li>Element n°2</li></ul>")
});

$(function(){
    $("#p1").before("<p>Paragraphe ajouté avec before()</p>");
    $("<span>Span ajouté avec insertAfter()</span>").insertAfter("#p1");
});

$(function(){
    $("p").wrapAll("<section></section>");
    $("p").wrap("<div></div>");
    $("p").wrapInner("<span></span>");
});

$(function(){
//     //Déplace #p1 et le place comme premier enfant de body 
    $("#p1").prependTo("body");

//     //Déplace #p2 et le place avant h1
    $("#p2").insertBefore("h1");
});


$(function(){
//     //Supprime le paragraphe avec l'id="p1"
    $("p").remove("#p1"); //Idem $("#p1").remove()
    
//     //Supprime h1 et conserve ses données
    let titre = $("h1").detach();
//     //Réinsère h1 au début du body
    titre.prependTo("body");

//     //Supprime le contenu de #p2
    $("#p2").empty();

//     //Supprime le parent des paragraphes si c'est un élément section
    $("p").unwrap("section");
});

$(function () {
    // selectionne la class gros
    $("#btn").find(".gros").css("font-size", "22px")
    $("button:nth-child(2)").css("color", "blue");
    $(".petit").hide();
})


