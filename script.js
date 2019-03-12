countDown(); 
getTheFeatures();
var scrollNo = 0;

$("#scrollTop").click(scrollToTop); // Top Scrolling

// TOGGLE THE HEADER
$(window).on("scroll", function () {
  var fromTop = $(window).scrollTop();
  var body = $("body");
  var scrollHeight = body[0].scrollHeight;
  body.toggleClass(
    "down", 
    (
      (fromTop > 400) && (fromTop < (scrollHeight - 500))
    )
  );
});

// TOGGLE LIGHTBOX
function toggleBox(isErrorBox) {
  var box = (isErrorBox == true) 
    ? document.getElementById("lightbox2")
    : document.getElementById("lightbox");

  if (box.style.display !== 'block') {
    var op = 0;
    var it = setInterval(() => {
      op += 0.1;

      box.style.display = 'block';
      box.style.opacity = op;

      if (op >= 1) {
        op = 1;
        clearInterval(it);
      };
    }, 20);
  } else {
    op = 1;
    it = setInterval(() => {
      op -= 0.1;
      box.style.opacity = op;

      if (op <= 0) {
        box.style.display = 'none';
        clearInterval(it);
      };
    }, 20);
  }
}

// CONTDOWN TIMER
function countDown(){
  // Set the date we're counting down to
  var countDownDate = new Date("Jun 12, 2019 12:00:00").getTime();

  // Update the count down every 1 second
  var x = setInterval(function () {

      // Get todays date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      days = days < 10 ? "0" + days : days;
      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;


      // Display the result in the element with id="countdown"
      $('.days').html(days);
      $('.hours').html(hours);
      $('.minutes').html(minutes);
      $('.seconds').html(seconds);

      // If the count down is finished, write some text 
      if (distance < 0) {
          clearInterval(x);
          document.getElementById("countdown").innerHTML = "EXPIRED";
      }
  }, 1000);
}

// SMOOTH SCROLL TO THE TOP
function scrollToTop(){
  $('body,html').animate(
    { scrollTop: 0 }, 
    1000
  );
}

// GET THE VYBITE FEATURES LIST AND MAP THEM TO LIST ITEMS
function getTheFeatures(){
  var featuresList = $("#featuresList ul");
  var features = [
    {
      image: `<img src="./images/f1.png"/>`,
      name: "Supports <b>ALL</b> types of events."
    },
    {
      image: `<img src="./images/f2.svg"/>`,
      name: "Ability to review and see reviews on ongoing events."
    },
    {
      image: `<img src="./images/f3.svg"/>`,
      name: "Simple and convenient UI."
    },
    {
      image: `<img src="./images/f4.svg"/>`,
      name: "Opportunity to claim various perks and rewards."
    },
    {
      image: `<img src="./images/f5.svg"/>`,
      name: "Ability to view events happening around you, on a virtual map."
    },
    {
      image: `<img src="./images/f6.svg"/>`,
      name: "Special event recommendations tailored to every user."
    },
    {
      image: `<img src="./images/f7.svg"/>`,
      name: "Special interactive system for hosts to create and manage events."
    },
    {
      image: `<img src="./images/f8.svg"/>`,
      name: "Searching for events based on current mood/state. e.g happy, romantic, adrenaline, tourist etc."
    }
  ];
  features = features.map( item =>
    `<li>
      <div>
        ${item.image}
      </div>
      <p>
       ${item.name}
      </p>
    </li>`
  );
  featuresList.html(features);
}

// SCROLL FEATURES HORIZONTALLY
function scrollFeatures(isLeft) {
  var featuresList = $("#featuresList");  
  var scrollVal = (isLeft) ? -500 : 500;  

  featuresList.animate({
    scrollLeft: featuresList.scrollLeft() + scrollVal
  }, 900);
} 