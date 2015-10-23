/**
 * Created by PaulZimmel on 10/23/15.
 */
var peopleArray = ["Paul","Dana", "Pui", "Kelly", "Charles", "Mike", "Karl", "Aesop"];

var indexTracker = 0;
//Dot Graphics
    //how do we know how many dots?
    //dynamic
    //consume something into something that figures out how to lay all of it out.

//when the cursor is highlighting a box, we want the person in the array of peopleArray at the same position


$(document).ready(function(){
    //$("#lecture").text("stuff"); //different than append("<p>stuff</p>")
    //$("#lecture").on('click', '.deleteBtn', function() {
    //    $(this).parent().remove();
    //});

    //appendDom(peopleArray);

    createCarousel(peopleArray);
    updateIndexPoint();
    updateName();


    $("#next").on('click', nextSlide);
    $("#prev").on('click', prevSlide);

});


function createCarousel(array) {
    //Create many things like:
    //the index points
    //hte next and prev buttons
    $("#lecture").append("<div class='main'></div>");
    var $el = $("#lecture").children().last();

    createNavButtons($el);
    createIndexPoints(array, $el);
    //updateName($el);
}

function nextSlide(){

    indexTracker++;
    if (indexTracker >= peopleArray.length){
        indexTracker = 0;
    }
    updateName();
    updateIndexPoint();
}

function prevSlide(){
    indexTracker--;
    if (indexTracker < 0){
        indexTracker = peopleArray.length-1;
    }
    updateName();
    updateIndexPoint();

}

function createIndexPoints(array, $el){
    //create something visual, divs will work
    for (var i =0;i<array.length; i++){
        $el.append("<div class='index-point' id = 'index" + i +"'></div>");
        //div class = 'index-point' id ='index0' for i = 0 is one of the divs

    }
}//we could also have declared our function in createCarousel and that way $el is within it's scope
//then we don't need to make $el a parameter of createIndexPoints

function createNavButtons($el){
   $el.append("<div id='prev' class ='nav-button'>Left</div>");
    $el.append("<div id = 'next' class ='nav-button'>Right</div>");


}
function updateIndexPoint(){
    for (i = 0; i<peopleArray.length;i++){
        $("#index"+i).removeClass("index-point-active");

        if(i == indexTracker){
            $("#index"+i).addClass("index-point-active");
        }
    }
}

function updateName() {
    var indexName = peopleArray[indexTracker];
    $(".active-name").remove();
    $("#lecture").children().last().append("<div class = 'active-name'>"+indexName+"</div>");

}

//Friday Morning
//function appendDom(array){
//    for(var i = 0; i<array.length; i++){
//        $("#lecture").append("<div class ='person'></div>"); //creates person container for everyone
//
//        var $el = $("#lecture").children().last();
//
//        $el.append("<p>"+array[i] + "</p>"); // or do .first().prepend()
//        $el.append("<button class ='deleteBtn'>Delete</button>");
//
//        //$(".deleteBtn").animate({color: "red"}, 1000, function(){}); //not working
//        //$("#lecture").children().first().prepend("<p>"+array[i]+"</p>");
//        //$("#lecture").children().last().append("<button>Delete</button>"); this way is gross! delete buttons in p tags!
//    }
//}