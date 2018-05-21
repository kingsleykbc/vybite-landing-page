(function () {

    // Will it be a storm or peaceful?
    var COUNT = 10;

    // Create the canvas element
    var canvas = document.getElementById('snowEffect');
    var ctx = canvas.getContext('2d');

    var width = window.outerWidth;
    var height = window.outerHeight-50;
    var i = 0;
    var active = false;

    function onResize() {
        canvas.width = width;
        canvas.height = height;
        ctx.fillStyle = '#2f2f35';

        requestAnimFrame(update);
    }

    var Snowflake = function () {
        this.x = 0;
        this.y = 0;
        this.vy = 0;
        this.vx = 0;
        this.r = 0;

        this.reset();
    }

    // You can set up the 
    Snowflake.prototype.reset = function () {
        this.x = Math.random() * width;
        this.y = Math.random() * -height;

        // More speed? Change this
        this.vy = 1 + Math.random()*0.8;
        this.vx = 0.5 - Math.random();

        // Bigger snow?
        this.r = 1 + Math.random() * 150; //Radius

        this.o = 1; //Opacity
    }


    var snowflakes = [], snowflake;
    for (i = 0; i < COUNT; i++) {
        snowflake = new Snowflake();
        snowflake.reset();
        snowflakes.push(snowflake);
    }

    function update() {

        ctx.clearRect(0, 0, width, height);

        for (i = 0; i < COUNT; i++) {
            snowflake = snowflakes[i];
            snowflake.y += snowflake.vy;
            snowflake.x += snowflake.vx;

            ctx.globalAlpha = snowflake.o;
            ctx.beginPath();
            ctx.arc(snowflake.x, snowflake.y, snowflake.r, 0, Math.PI * 2, false);
            ctx.closePath();
            ctx.fill();

            if (snowflake.y > height) {
                snowflake.reset();
            }
        }

        requestAnimFrame(update);
    }

    // shim layer with setTimeout fallback
    window.requestAnimFrame = (function () {
        return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            function (callback) {
                window.setTimeout(callback, 1000 / 60);
            };
    })();

    onResize();
    window.addEventListener('resize', onResize, false);
})();