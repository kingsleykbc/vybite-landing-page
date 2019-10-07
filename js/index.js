$(document).ready(function () {
  
  // =======================================================================
  //  HEADER SECTION
  // =======================================================================
  var showingDropDown = false;

  function toggleDropDown() {
    if (showingDropDown) {
      $("#resMenu").css("width", "0");
      showingDropDown = false;
    } else {
      $("#resMenu").css("width", "100%");
      showingDropDown = true;
    }
  }
  $(".hamburgerMenu").click(function () {
    toggleDropDown();
  });


  // =======================================================================
  //  SMOOTH SCROLLING
  // =======================================================================
  var scrollLink = $('header a, #backtoTop, #footerMenu a, #resMenu a');

  //  Smooth scrolling
  scrollLink.click(function (e) {
    toggleDropDown();
    if (!showingAbout) {
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

  //  Active link switching
  function scrollLinkSwitch(scrollbarLocation) {
    scrollLink.each(function () {
      var sectionOffset = $(this.hash).offset().top - 20;

      if (sectionOffset <= scrollbarLocation) {
        $("#contactButton").removeClass('active');

        $(this).addClass('active');
        $(this).siblings().removeClass('active');

      }
    })
  }


  // =======================================================================
  //  ABOUT SECTION
  // =======================================================================
  var showingAbout = false;

  // Toggle buttons
  $("#aboutButton, #moreAbout, #footerAbout").click(function () {
    toggleDropDown();
    toggleAbout();
  });

  // Dissmiss buttons
  $(".logo, #cancelAbout").click(function () {
    if (showingAbout) {
      removeAbout();
      showingAbout = false;
    }
  });

  // Toggle the About Section
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

    // Prevent double scrollbars
    $("body").css("overflow", "hidden");

    // Show the about
    $("#about").css("display", "block");

    // roll the ribbons
    setTimeout(function () {
      $("#topRibbon").addClass("roll");
      $("#bottomRibbon").addClass("roll");
    }, 100);

    // Slide up the Content
    setTimeout(function () {
      $("#aboutContent").addClass("roll");
    }, 400);

    // Bring up the Avatar
    setTimeout(function () {
      $("#aboutAvatar img").addClass("roll");
    }, 1200);
  }

  function removeAbout() {
    $("body").css("overflow", "visible");

    // Slide down the content
    $("#aboutContent").removeClass("roll");
    $("#aboutAvatar img").removeClass("roll");

    // remove ribbons
    setTimeout(function () {
      $("#topRibbon,#bottomRibbon").removeClass("roll");
    }, 400);

    // hide the about
    setTimeout(function () {
      $("#about").css("display", "none");
    }, 1000);
  }

  //  =======================================================================
  //   SKILLS SECTION
  //  =======================================================================
  var dom = $("#tools ul");
  var content = "";
  var skills = [
    {
      img: "./images/logo_html.png",
      title: "HTML 5",
      description: "I use HTML to build static websires or PHP-based web applications.",
      proficiency: "95%"
    },
    {
      img: "./images/logo_css.png",
      title: "CSS 4",
      description: "I use CSS with HTML and JSX to style web pages.",
      proficiency: "95%"
    },
    {
      img: "./images/logo_js.png",
      title: "JavaScript (ES6)",
      description: "I use JavaScript to build Client-side and Server-Side applications",
      proficiency: "75%"
    },
    {
      img: "./images/logo_react.png",
      title: "React.js",
      description: "This is my main front-end development tool, and I use it for all non-PHP web applications.",
      proficiency: "90%"
    },
    {
      img: "./images/logo_node.png",
      title: "Node.js",
      description: "I use Node to build servers (backend) for my web and mobile apps.",
      proficiency: "70%"
    },
    {
      img: "./images/logo_php.png",
      title: "PHP 7",
      description: "I use PHP to build smaller web applications with minimal functionality.",
      proficiency: "70%"
    },
    {
      img: "./images/logo_flutter.png",
      title: "Flutter SDK",
      description: "I use flutter to build Android and IOS apps. With stunning UI and great functionality.",
      proficiency: "60%"
    },

    // ART TOOLS
    {
      img: "./images/logo_illustrator.png",
      title: "Adobe Illustrator CC",
      description: "I use llustragor to design logos, posters and other 2d vector graphics.",
      proficiency: "50%"
    },
    {
      img: "./images/logo_xd.png",
      title: "Adobe XD",
      description: "I use Adobe XD do design User Interfaces for my Web and Mobile Applications.",
      proficiency: "60%"
    },
  ];

  skills.forEach(function (item) {
    content += "<li>" +
      "<div class='tool' >" +
      "<div class='toolInfo'>" +
      "<div class='toolPic'>" +
      "<img src='" + item.img + "' />" +
      "</div>" +
      "<div class='toolDescription'>" +
      "<h3>" + item.title + "</h3>" +
      "<p>" + item.description + "</p>" +
      "</div>" +
      "</div>" +
      "<div class='toolBack'>" +
      "<div>" +
      "<h2>" + item.proficiency + "</h2>" +
      "</div>" +
      "<p>Proficiency</p>" +
      "</div>" +
      "</div >" +
    "</li>";
  });
  dom.html(content);


  //  =======================================================================
  //   SKILL SECTION
  //  =======================================================================
  function scrollTools(isLeft) {
    if (isLeft) {
      scrollNo = (scrollNo <= 0) ? 0 : scrollNo - 400;
    } else {
      scrollNo = (scrollNo >= $("#skills ul").outerWidth()) ? $("#skills ul").outerWidth() : scrollNo + 400;
    }

    $('#skills ul').animate({
      scrollLeft: scrollNo
    }, 600);

    var content = (scrollNo >= 800) ? "Design Tools" : "Development Tools";

    // Change Label
    $('#toolsLabel').html(content);
  }

  //  SCROLLING THE SKILLS SECTION
  var scrollNo = 0; // you can use this number to manipulate the label

  $('#left').click(function () {scrollTools(true);});
  $('#right').click(function () {scrollTools(false);});

});


// =======================================================================
//  PORTFOLIO SECTION
// =======================================================================
const portfolio = [
  {
    title: "Student Disciplinary System",
    image: './images/portfolioScreenshots/sds3.PNG',
    description: `
      A web application to help school administrators record infractions, track merit points, dole out punishments,
      add and remove students from groups, etc. In addition, it helps students keep track of their offenses and 
      points, and also appeal certain punishments where necessary.
    `,
    content: `
      <img src="./images/portfolioScreenshots/sds.PNG"/>
      <img src="./images/portfolioScreenshots/sds2.PNG"/>
      <img src="./images/portfolioScreenshots/sds3.PNG"/>
    `,
    toolsUsed: "HTML5, CSS3, PHP",
    link: "https://github.com/kingsleykbc/online-law-management-system"
  },

  {
    title: "Montego Pool Cars",
    image: './images/portfolioScreenshots/poolcar2.PNG',
    description: `
      A web application developed for Montego Upstream Services to help fleet managers, drivers and staff, book, organize
      track and document trips taken in the office. The app is divided into three sub-systems (one for each entity).
    `,
    content: `
      <img src="./images/portfolioScreenshots/poolcar1.PNG"/>
      <img src="./images/portfolioScreenshots/poolcar2.PNG"/>
      <img src="./images/portfolioScreenshots/poolcar3.PNG"/>
    `,
    toolsUsed: "HTML5, CSS3, PHP",
    link: "http://poolcar.montego-holdings.com/"
  },

  {
    title: "Lagos Business Hub ",
    image: './images/portfolioScreenshots/lbh1.PNG',
    description: `
      An Online Marketplace and Business directory application, where small businesses can upload and sell their products
      and services, without needing to setup an online store. In addition, users can find and post small jobs and get instant
      response. <b>This application is still under development</b>
    `,
    content: `
      <img src="./images/portfolioScreenshots/lbh1.PNG"/>
      <img src="./images/portfolioScreenshots/lbh2.PNG"/>
      <img src="./images/portfolioScreenshots/lbh3.PNG"/>
    `,
    toolsUsed: "React.js, Node.js (Express)",
    link: "http://lagosbusinesshub.com/"
  },

  {
    title: "Vybite",
    image: './images/portfolioScreenshots/vybite1.PNG',
    description: `
      An AI-integrated Event recommendation and ticketing application. It is a mobile and Web application, where
      users can ger recommended various movies, concerts, shows, etc. It also provides a seamless way to purchase
      and use tickets. 
    `,
    content: `
      <img src="./images/portfolioScreenshots/vybite1.PNG"/>
      <img src="./images/portfolioScreenshots/vybite2.PNG"/>
    `,
    toolsUsed: "React.js, Flutter SDK, Node.js (Express)",
    link: "http://vybite.com/"
  },

  {
    title: "Other Websites",
    image: './images/portfolioScreenshots/websites1.PNG',
    description: `
      I have also built static websites for company profiles.
    `,
    content: `
      <img src="./images/portfolioScreenshots/websites1.PNG"/>
      <img src="./images/portfolioScreenshots/websites2.PNG"/>
    `,
    toolsUsed: "HTML5, CSS3, PHP",
    link: "http://drayton-ofs.com/"
  }
];
let portfolioItems = '';


// Map the portfolio items to widgets
for (var i = 0; i < portfolio.length; i++) {
  let extraClass = "";
  if (portfolio[i].title == "Vybite") extraClass = "app";

  portfolioItems += `
    <div class="portfolioItem ${extraClass}" onClick="viewPortfolioDetails(${i})">
      <div class="portfolioPicture">
        <img src="${portfolio[i].image}"/>
      </div>
      <b>${portfolio[i].title}</b>
    </div>
  `;
}

// Show the portfolio Items
$(".portWrapper").html(portfolioItems);

/**
* View Portfolio Details
*/
function viewPortfolioDetails(index) {
  let data = portfolio[index];
  $("#splContent").html(data.content);
  $("#splTitle").html(data.title);
  $("#splDesctiption").html(data.description);
  $("#splToolsUsed").html(data.toolsUsed);
  $("#splLink").html(`<a href=${data.link} target="blank"> ${data.link} </a>`);

  toggleViewPortfolioLightBox();
}

/**
 * Toggle the View Portfolio Lightbox
 */
function toggleViewPortfolioLightBox() {
  let display = $(".selectedProjectLightBox").css("display") === "none" ? "block" : "none";
  $(".selectedProjectLightBox").css("display", display);
}