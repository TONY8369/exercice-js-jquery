// Exercice 1 :
$(function OnClick() {
    $('#btn1').on("click", function () {
        //On utilise html() comme setter
       $("#exercise1Div").html("<strong>Coucou Fab !</strong>");
    }) 
});
// Exercice 2 :
$(function Incremente() {
    let numbers = 1;
    $('#btn2').on("click", function () {
        let number = $("#clickCount");
        $(number).html(numbers++)    
        // console.log("🚀 ~ file: exoJquery.js:15 ~ numbers:", numbers)   
    }) 
});
// Exercice 3 :
$(function AddRemove() {
    $('#btn3').on("click", function () {
        $("#exercise3Div").toggleClass("color");
    }) 
});
// Exercice 4 :
$(function background() {
    $('#btn4').on("click", function () {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    $("#exercise4Div").css("background-color", color);
    }) 
});
// Exercice 5
$(function form() {
    $('#btn5').on("click", function () {
        let message = $("#inputText").val();
        console.log(message);
        $("#displayText").html("<p>Voici votre message :</p> " + message);
        $("#inputText").val("");
    })
})
// Exercice 6 :
$(function citation() {
    let citations = ['citation 1', 'citation 2', 'citation 3']
    $('#btn6').on("click", function () {
        let citation = citations[Math.floor(Math.random() * citations.length)]
        // console.log("🚀 ~ file: exoJquery.js:48 ~ citation:", citation)
        $("#exercise6Div").html("Voici votre citation : " + citation);
    }) 
});
// Exercice 7 :
$(function(){
    //Lorsque la souris entre dans le div...
    $("#exercise7Div").on('mouseenter',function(){
        //...On ajoute une couleur de fond au div
       let hover = $(this).css("background-color", "lightBlue");
       console.log("🚀 ~ file: exoJquery.js:76 ~ $ ~ hover:", hover)
    });

    //Lorsque la souris ressort du div...
    $("#exercise7Div").on('mouseleave',function(){
        //...On remet un fond blanc
        $(this).css("background-color", "#fff");
    });
});
// Exercice 8 :
$(function onSubmit() {
    $("#form1").on("submit", function (e) {
        e.preventDefault()
        // on stocke les valeurs des inputs
        let names = $("#name").val();
        console.log("🚀 ~ file: exoJquery.js:71 ~ names:", names)
        let email = $("#email").val();
        console.log("🚀 ~ file: exoJquery.js:73 ~ email:", email) 
        if (names && email) {
            $("#formValidationMessage").html("<p>Formulaire valide</p> " + names + " , " + email);
            $("#name").val("");
            $("#email").val("");
        }
    })
});
//Exercice 9
function updateTime() {
    // récupère la date du jour
    let currentTime = new Date();
    // récupère l'heure
    let hours = currentTime.getHours();
    // récupère la minutes
    let minutes = currentTime.getMinutes();
    // récupère la seconde
    let seconds = currentTime.getSeconds();
    // on l'affiche
    $("#exercise9Div").text(hours + ":" + minutes + ":" + seconds);
}
setInterval(updateTime, 1000);
//Exercice 10
$(function calcul() {
    $("#btn10").on("click", function () {
        let input1 = parseFloat($("#input1").val());
        // console.log("🚀 ~ file: exoJquery.js:101 ~ input1:", input1)
        let input2 = parseFloat($("#input2").val());
        // console.log("🚀 ~ file: exoJquery.js:101 ~ input2:", input2)
        let operator = $("#operator").val();
        // console.log("🚀 ~ file: exoJquery.js:101 ~ input2:", select)
        let result;
        if (operator === "+") {
            result = input1 + input2;
            console.log("🚀 ~ file: exoJquery.js:109 ~ result:", result)
        }
        if (operator === "-") {
            result = input1 - input2;
            console.log("🚀 ~ file: exoJquery.js:113 ~ result:", result)
        }
        if (operator === "*") {
            result = input1 * input2;
            console.log("🚀 ~ file: exoJquery.js:117 ~ result:", result)
        }
        if (operator === "/") {
            result = input1 / input2;
            console.log("🚀 ~ file: exoJquery.js:121 ~ result:", result)
        }
       
        $("#result").html("Le resultat est : " + result);
  })  
})
//Exercice 11
$(function hide() {
    $("#btn11").on("click", function () {
        $("p").toggle();
  })  
})
//Exercice 12
$(function () {
    $("#exercise12Div").on("click", function () {
        $(".myDiv").animate({
            left: "250px",
            opacity: '0.5',
            height: '150px',
            width: '200px',
        
        }) 
  })  
})
//Exercice 13
$(function () {
    $("#dragElement").draggable();
    $( "#droppable-4" ).droppable({  
            tolerance: 'touch',  
            drop: function( event, ui ) {  
            $( this )  
               .addClass( "ui-state-highlight" )  
               .find( "p" )  
               .html( "Dropped with a touch!" );  
            }  
         })
})
//Exercice 14
$(function pourboire() {
    $("#btn14").on("click", function () {
        let input1 = parseFloat($("#billAmount").val());
        console.log("🚀 ~ file: exoJquery.js:101 ~ input1:", input1)
        let pourcent = parseFloat($("#tipPercentage").val());
        console.log("🚀 ~ file: exoJquery.js:164 ~ pourcent:", pourcent) 
        let result;
        if (pourcent == "10") {
            result = input1 + (pourcent / 100 * input1);
            console.log("🚀 ~ file: exoJquery.js:109 ~ result:", result)
        }
        if (pourcent == "15") {
            result = input1 + (pourcent / 100 * input1);
            console.log("🚀 ~ file: exoJquery.js:113 ~ result:", result)
        }
        if (pourcent == "20") {
            result = input1 + (pourcent / 100 * input1);
            console.log("🚀 ~ file: exoJquery.js:117 ~ result:", result)
        }
        if (pourcent == "25") {
            result = input1 + (pourcent / 100 * input1);
            console.log("🚀 ~ file: exoJquery.js:121 ~ result:", result)
        }
       
        $("#totalAmount").html("Le resultat est : " + result);
  })  
})
// Exercice 15
$(function guess() {
    let random = parseInt(Math.round(Math.random() * 100))
    // console.log("🚀 ~ file: exoJquery.js:189 ~ guess ~ random:", random)
    $("#btn15").on("click", function (e) {
        e.preventDefault();
        let number = $("#guessInput").val();
        // console.log("🚀 ~ file: exoJquery.js:191 ~ guess ~ number:", number)
        if (number == random) {
            $("#guessMessage").html("<p>Bravo ! Vous avez deviné le nombre.</p> " + random);
            $("#guessInput").val("");
        } else if (number < random) {
            $("#guessMessage").html("<p>Echec ! Le nombre est plus grand .</p> " + number);
            $("#guessInput").val("");
        } else {
            $("#guessMessage").html("<p>Echec ! Le nombre est plus petit .</p> " + number);
            $("#guessInput").val("");
        }
    })  
})
// Exercice 16
$(function colors() {
    $("#colorSelect").on("change", function () {
        let colors = $("#colorSelect").val();
        console.log("🚀 ~ file: exoJquery.js:209 ~ colors ~ colors:", colors)
        if (colors == "red") {
           $("#colorImage").html("<p>La couleur selectionnez est : " + colors + " </p>"); 
           $("#colorImage").css("color",colors); 
        } 
        if (colors == "green") {
           $("#colorImage").html("<p>La couleur selectionnez est : " + colors + " </p>"); 
           $("#colorImage").css("color",colors); 
        } 
        if (colors == "blue") {
           $("#colorImage").html("<p>La couleur selectionnez est : " + colors + " </p>"); 
           $("#colorImage").css("color",colors); 
        } 
    })  
})
// Exercice 17
$(function scrollsTop() {
    $("#btn-1").on("click", function () {
        console.log($(window).scrollTop());
        $(window).scrollTop(0);
    })  
})
// $(function scrollsLeft() {
//     $("#btn-2").on("click", function () {
//         console.log($(window).scrollLeft());
//         $(window).scrollLeft(-200);
//     })  
// })
// $(function scrollsRight() {
//     $("#btn-3").on("click", function () {
//         console.log($(window).scrollLeft());
//     })  
// })
// Exercice 18
$(function backgroundRed() {
    let background1 = $("#colorBox1").html();
    // console.log("🚀 ~ file: exoJquery.js:235 ~ background1:", background1)
    $("#colorBox1").on("click", function () {
        if (background1 === "Rouge") {
            $("#colorChangeDiv").css("background-color","red")
        }
    })  
})
$(function backgroundPurple() {
    let background2 = $("#colorBox2").html();
    // console.log("🚀 ~ file: exoJquery.js:235 ~ background2:", background2)
    $("#colorBox2").on("click", function () {
        if (background2 === "Violet") {
            $("#colorChangeDiv").css("background-color","purple")
        }
    })  
})
$(function backgroundAqua() {
    let background3 = $("#colorBox3").html();
    // console.log("🚀 ~ file: exoJquery.js:235 ~ background3:", background3)
    $("#colorBox3").on("click", function () {
        if (background3 === "Aqua") {
            $("#colorChangeDiv").css("background-color","aqua")
        }
    })  
})
// Exercice 19
$(function list() {   
    $("#btn20").on("click", function () {
        let input = $("#listInput").val();
        // console.log("🚀 ~ file: exoJquery.js:277 ~ list ~ input:", input)
        let list = $("#list");
        // console.log("🚀 ~ file: exoJquery.js:279 ~ list ~ list:", list)
        let listItem = $("#list").append("<li>" + input + "</li>");
        return listItem;
    })  
})
