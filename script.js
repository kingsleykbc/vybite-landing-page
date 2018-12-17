// Set the date we're counting down to
var countDownDate = new Date("Feb 14, 2019 24:00:00").getTime();

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
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // If the count down is finished, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 1000);



// Toggle the Lightbox
function toggleBox() {
    var box = document.getElementById("lightbox");
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