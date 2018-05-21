$(document).ready(function () {
//VARIABLES-----------------------------------------------------------------------------------------------------
var themeColor = "#727fda";
var themeClass = "purple";
var topLabel = "APP DEVELOPMENT";
var currentThemeClass = themeClass;
var showingAbout = false;

//FUNCTIONS-----------------------------------------------------------------------------------------------------

//Showing the label
function showLabel(target) {
    let label = $(target).find(".label");
    label.addClass("showLabel");

    setTimeout(function () {
        label.css("opacity", "0");
        label.removeClass("showLabel");
    }, 3000);
}

//Applying Theme Colors
function applyThemeColors() {
    //Color Settings
    $("#greeting, .media, #workingAnimation span, #skillsleft, #topRibbon, #bottomRibbon").css("background", themeColor);
    $("#bubble").css("border-left-color", themeColor);
    $(".active").css("color",themeColor);
    $("#gitHub, #sendMail").removeClass(currentThemeClass);
    $("#gitHub, #sendMail").addClass(themeClass);

    //Handle the top Text Animation
    $("#topLabel").css("opacity", 0);
    $("#topLabel").removeClass(currentThemeClass)
    
    setTimeout(function(){
        $("#topLabel").html(topLabel);
        $("#topLabel").addClass(themeClass);
        $("#topLabel").css("opacity","1");
        
    }, 500);

    currentThemeClass = themeClass;
}

//Handle the Category Change
function handleCategoryChange(category) {
    switch (category) {
        case "game":
            themeColor = "#49ccc1";
            themeClass = "green";
            topLabel="GAMES";
        break;
        case "art":
            themeColor = "#ff436c";
            themeClass = "red";
            topLabel="ART";
        break;
        case "animation":
            themeColor = "#6d7cd1";
            themeClass = "blue";
            topLabel="ANIMATIONS";
        break
        default:
            themeColor = "#7e76d3";
            themeClass = "purple";
            topLabel="APP DEVELOPMENT";
    }
    //Change Theme Color
    applyThemeColors();
}

//Scroll Functions
function setHeaderBackground(scroll) {
    var alpha = scroll / 720 * 0.5;
    $("header").css("background", "rgba(44,44,50," + alpha + ")");
}

function addAnimation(target, test, scroll){
    if (scroll >= test){
        $(target).addClass("animate");
    }else{
        $(target).removeClass("animate");
    }
}



//THE CIRCULAR ICON BUTTONS
var type = 0.5; 
var radius = '22vw'; 
var start = 180; 
var $elements = $('.options li');
var numberOfElements = (type === 1) ? $elements.length : $elements.length - 1;
var slice = 360 * type / numberOfElements;

$elements.each(function (i) {
    var $self = $(this);
    var rotate = slice * i + start;
    var rotateReverse = rotate * -1;

    $self.css({
        'transform': 'rotate(' + rotate + 'deg) translate(' + radius + ') rotate(' + rotateReverse + 'deg)'
    });
});


//SHOW THE LABEL ON CLICK OR HOVER
$(".options li").click(function(){
    let target = this;
    $(this).find("img").click(function () {
        showLabel(target);    
    });
        
    handleCategoryChange(this.className);
});

$(".options li").mouseover(function () {
    let target = this;
    showLabel(target);   
});

//APPLY THEMES
applyThemeColors();

//HANDLE SCROLL FUNCTIONS
$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    setHeaderBackground(scroll);
    addAnimation("#wavingHand",200,scroll);
    addAnimation("#worksContainer",800,scroll);
    addAnimation(".media",2600,scroll)
});


//THE ABOUT SECTION--------------------------------------------------------------------------------------------------

//Toggle buttons
$("#aboutNav, #moreAbout").click(function () {
    toggleAbout();
 });

 //Dissmiss buttons
$(".logo, #cancelAbout").click(function () {
    if(showingAbout){
        removeAbout();
        showingAbout = false;
    }
});

//Toggle the About Section
function toggleAbout() {
    if(showingAbout){
        removeAbout();
        showingAbout = false;
    }else{
        showAbout();
        showingAbout = true;
    }
}

//ABOUT FUNCTIONS
function showAbout(){
    $("body").css("overflow","hidden");

    //Set the header color
    $("header").addClass("aboutHeader");

    //Show the about
    $("#about").css("display","block");

    //roll the ribbons
    setTimeout(function(){
        $("#topRibbon").addClass("roll");
        $("#bottomRibbon").addClass("roll");
    }, 100);

    //Bring up the Greeting
    setTimeout(function () {
        $("#aboutTitle h1").addClass("roll");
    }, 600);

    //Bring up the Avatar
    setTimeout(function () {
        $("#avatar img").addClass("roll");
    }, 1200);
}

function removeAbout(){
    $("body").css("overflow", "visible");

    //Remove the header color
    $("header").removeClass("aboutHeader");

    //Slide down the about title
    $("#aboutTitle h1, #avatar img").removeClass("roll");

    //remove ribbons
    setTimeout(function () {
        $("#topRibbon,#bottomRibbon").removeClass("roll");
    }, 300);

    //hide the about
    setTimeout(function () {
        $("#about").css("display", "none");
    },1000);
}

});