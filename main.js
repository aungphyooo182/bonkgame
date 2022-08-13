jQuery(document).ready(function () {

    var add = 0;
    var checkDeadInterval;
    var name = null;

    function startInterval() {
        console.log("start timer")
        checkDeadInterval = setInterval(checkDead, 100);
    }

    function stopInterval() {
        console.log("call clear interval")
        clearInterval(checkDeadInterval);
        checkDeadInterval = undefined;
    }

    function game_over() {
        var gameover = $("#gameover")[0];
        gameover.play();
        jQuery('.mole').stop().animate({ 'top': '100%' }, 0);
        jQuery('.mole').animate({ 'top': '100%' }, 0);
        jQuery('.score').html('GAME OVER');
        jQuery('.score').append('<div class="try_again">TRY AGAIN</div>');
        jQuery('.try_again').click(function () {
            start();
            startInterval();
        });
        stopInterval();
    }

    function start() {
        add = 0;
        jQuery('.score').html('Score: ' + add);
        jQuery('.mole').animate({ 'top': '0%' }, 5000);
        jQuery('.score').html(name + "\'s Score:" + add);
    }

    function checkDead() {
        var mole1 = 1
        var mole2 = 1
        var mole3 = 1
        var element1 = $("#mole1")[0]
        var element2 = $("#mole2")[0]
        var element3 = $("#mole3")[0]
        console.log(element1)
        if (element1)
            mole1 = parseInt(window.getComputedStyle(element1, "").getPropertyValue("top"));
        if (element2)
            mole2 = parseInt(window.getComputedStyle(element1, "").getPropertyValue("top"));
        if (element3)
            mole3 = parseInt(window.getComputedStyle(element1, "").getPropertyValue("top"));

        if (mole1 == 0 || mole2 == 0 || mole3 == 0) {
            game_over()
        }
    }
    $('.start-btn').click(function () {
        name = prompt("How do I call you?")
        if (name != null) {
            $(this).css('display', 'none');
            $(".content").css('display', 'flex');
            start();
            startInterval();
        } else {

        }

    })

    jQuery('.mole').hover(function () {
        var bonk = $("#bonk")[0];
        bonk.play();
        jQuery(this).css('background-image', 'url(hurt.png)');
        jQuery(this).stop().animate({ 'top': '100%' }, 300, function () {

            add = add - (-1);
            jQuery('.score').html(name + ' Score: ' + add);
            jQuery(this).css('background-image', 'url(normal.png)');
            jQuery(this).animate({ 'top': '0%' }, 5000);

        });
    });
    
//     jQuery('.mole').hover(function () {
//         var bonk = $("#bonk")[0];
//         bonk.play();
//         jQuery(this).css('background-image', 'url(hurt.png)');
//         jQuery(this).stop().animate({ 'top': '100%' }, 300, function () {

//             add = add - (-1);
//             jQuery('.score').html(name + ' Score: ' + add);
//             jQuery(this).css('background-image', 'url(normal.png)');
//             jQuery(this).animate({ 'top': '0%' }, 5000);

//         });
//     });




});

