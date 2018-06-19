$(document).ready(function () {
// RESPONSIVE HEADER ---------------------------------------------------------------------------------------
var showingDropDown = false;

function toggleDropDown(){
    if(showingDropDown){
        $("#resMenu").css("width","0");
        showingDropDown = false;
    }else{
        $("#resMenu").css("width", "100%");
        showingDropDown = true;
    }
}

$(".hamburgerMenu").click(function () {
    toggleDropDown();
});

//SMOOTH SCROLLING -----------------------------------------------------------------------------------------
var scrollLink = $('header a, #backtoTop, #footerMenu a, #resMenu a');

// Smooth scrolling
scrollLink.click(function (e) {
    toggleDropDown();
    if(!showingAbout){
        e.preventDefault();
        $('header a').removeClass('active');

        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    }
});

$(window).scroll(function () {
    scrollLinkSwitch($(this).scrollTop());
});


// Active link switching
function scrollLinkSwitch(scrollbarLocation){
    scrollLink.each(function () {
        var sectionOffset = $(this.hash).offset().top - 20;

        if (sectionOffset <= scrollbarLocation) {
            $("#contactButton").removeClass('active');

            $(this).addClass('active');
            $(this).siblings().removeClass('active');

        }
    })
}


//ABOUT SECTION -------------------------------------------------------------------------------------------------
var showingAbout = false;
//Toggle buttons
$("#aboutButton, #moreAbout, #footerAbout").click(function () {
    toggleDropDown();
    toggleAbout();
});

//Dissmiss buttons
$(".logo, #cancelAbout").click(function () {
    if (showingAbout) {
        removeAbout();
        showingAbout = false;
    }
});


//ABOUT FUNCTIONS    
//Toggle the About Section
function toggleAbout() {
    if (showingAbout) {
        removeAbout();
        $("#aboutButton").removeClass("active");
        
        showingAbout = false;
    } else {
        showAbout();
        $("#aboutButton").addClass("active");
        $('header a').removeClass('active');
        showingAbout = true;
    }
}

function showAbout() {
    //Prevent double scrollbars
    $("body").css("overflow", "hidden");

    //Show the about
    $("#about").css("display", "block");

    //roll the ribbons
    setTimeout(function () {
        $("#topRibbon").addClass("roll");
        $("#bottomRibbon").addClass("roll");
    }, 100);

    //Slide up the Content
    setTimeout(function () {
        $("#aboutContent").addClass("roll");
    }, 400);

    //Bring up the Avatar
    setTimeout(function () {
        $("#aboutAvatar img").addClass("roll");
    }, 1200);
}

function removeAbout() {
    $("body").css("overflow", "visible");

    //Slide down the content
    $("#aboutContent").removeClass("roll");
    $("#aboutAvatar img").removeClass("roll");

    //remove ribbons
    setTimeout(function () {
        $("#topRibbon,#bottomRibbon").removeClass("roll");
    }, 400);

    //hide the about
    setTimeout(function () {
        $("#about").css("display", "none");
    }, 1000);
}

// SKILLS SECTION ----------------------------------------------------------------------------------------
var dom = $("#tools ul");
var content ="";
var skills = [
    { 
        img: "./images/logo_html.png", 
        title:"HTML 5", 
        description:"This is a mark up language used for creating web pages. I use HTML to build static or PHP based websites.", 
        proficiency:"95%"
    },
    {
        img: "./images/logo_css.png",
        title: "CSS 4",
        description: "This is a styling language used to design the pages. I use CSS with HTML and JSX.",
        proficiency: "95%"
    },
    {
        img: "./images/logo_js.png",
        title: "JavaScript (ES6)",
        description: "A frontend scripting language. I use it for frontend and backend web app development.",
        proficiency: "75%"
    },
    {
        img: "./images/logo_react.png",
        title: "React.js",
        description: "A frontend JS framework for building web apps. I use is for all my non PHP based web apps.",
        proficiency: "85%"
    },
    {
        img: "./images/logo_node.png",
        title: "Node.js",
        description: "A JS multi-platform server environment. I use Node to build servers (backend) for my web and mobile apps.",
        proficiency: "70%"
    },
    {
        img: "./images/logo_php.png",
        title: "PHP 7",
        description: "A server side Scripting Language. I only use this for smaller web applications",
        proficiency: "80%"
    },

    // ART TOOLS
    {
        img: "./images/logo_flash.png",
        title: "Adobe Animate CC",
        description: "A 2D vector animation tool. I use to to create my short animation videos",
        proficiency: "85%"
    },
    {
        img: "./images/logo_illustrator.png",
        title: "Adobe illustrator",
        description: "A 2D vector image tool. I use it for vector icons and UI designs.",
        proficiency: "50%"
    },
    {
        img: "./images/logo_clip.png",
        title: "Clip Studio",
        description: "A 2D Raster image tool. I use it for drawing, as well designing icons and UI",
        proficiency: "85%"
    }
];


skills.forEach(function(item,index){
    content += "<li>"+
        "<div class='tool' >"+
            "<div class='toolInfo'>"+
                "<div class='toolPic'>"+
                    "<img src='"+item.img+"' />"+
                "</div>"+
                "<div class='toolDescription'>"+
                    "<h3>"+item.title+"</h3>"+
                    "<p>"+item.description+"</p>"+
                "</div>"+
            "</div>"+
            "<div class='toolBack'>"+
                "<div>"+
                    "<h2>"+item.proficiency+"</h2>"+
                "</div>"+
                "<p>Proficiency</p>"+
            "</div>"+
        "</div >"+
    "</li>";
});
dom.html(content);


// FUNCTION TO SCROLL TOOLS AND CHANGE LABEL
function scrollTools(isLeft) {
    if(isLeft){
        scrollNo = (scrollNo <= 0) ? 0 : scrollNo - 400;
    }else{
        scrollNo = (scrollNo >= $("#skills ul").outerWidth()) ? $("#skills ul").outerWidth() : scrollNo + 400;
    }

    $('#skills ul').animate({
        scrollLeft: scrollNo
    }, 600);

    var content = (scrollNo >= 800)?"Art and Animation Tools":"Web and App development Tools";

    //Change Label
    $('#toolsLabel').html(content);
}

// SCROLLING THE SKILLS SECTION
var scrollNo = 0; //you can use this number to manipulate the label

$('#left').click(function () {
    scrollTools(true);
});

$('#right').click(function (){
    scrollTools(false);
});


// PORTFOLIO SECTION--------------------------------------------------------------------------------------------

$("#portfolio nav div").click(function(){
    $("#portfolio nav div").removeClass("active");
    $(this).addClass("active");
    var margin = "";

    switch($(this).attr('id')){
        case "portArt":
            margin = "0";
        break;
        case "portAnimation":
            margin = "-100%";
        break;
        case "portWebsites":
            margin = "-200%";
        break;
        case "portApp":
            margin = "-300%";
        break;
    }
    $("#portArtSection").css("margin-left",margin);
});

//HANDLE PORTFOLIO ART IMAGES
var artworks = [
    {
        img:'./images/artWorks/forge.png',
        caption:"Forge Concept Art #1"
    },
    {
        img: './images/artWorks/forgeFull.png',
        caption: "Forge Concept Art #2"
    },
    {
        img: './images/artWorks/dora.png',
        caption: "Forge Concept Art #1"
    },
    {
        img: './images/artWorks/justiceMerge.png',
        caption: "Forge Concept Art #1"
    },
    {
        img: './images/artWorks/knockout.png',
        caption: "Forge Concept Art #2"
    },
    {
        img: './images/artWorks/laraCroft.png',
        caption: "Forge Concept Art #1"
    },
    {
        img: './images/artWorks/moana.png',
        caption: "Forge Concept Art #2"
    },
    {
        img: './images/artWorks/neineCover.png',
        caption: "Forge Concept Art #1"
    },
    {
        img: './images/artWorks/neineFull.png',
        caption: "Forge Concept Art #2"
    },
    {
        img: './images/artWorks/praise.png',
        caption: "Forge Concept Art #1"
    }
];

artContent = "";

artworks.forEach(function (item, index) {
    artContent += 
    "<div class='portImg' onClick=>"+
        "<img src='"+item.img+"'/>"+
        "<div class='overlay'>"+
            "<svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 24 24'>"+
                "<path d='M0 0h24v24H0z' fill='none' />"+
                "<path d='M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z'/>"+
            "</svg>"+
        "</div>"+
    "</div>";
});

$("#portArtSection").html(artContent);



});


