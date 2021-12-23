function hbc1() {
    var x = document.getElementsByClassName("choice1");
    x[0].style.cssText = "display: none"
    x[1].style.cssText = "display: none"
    x[2].style.cssText = "display: none"
    x[3].style.cssText = "display: none"
    x[4].style.cssText = "display: none"
    x[5].style.cssText = "display: none"
}

function hbc2() {
    var x = document.getElementsByClassName("choice2");
    x[0].style.cssText = "display: none"
    x[1].style.cssText = "display: none"
}

function openFullScreen() {
    var elem = document.documentElement
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    }
}

function start() {
    document.getElementById("start").innerHTML = 
    "White... pure white... that is all you can see currently. Just white all around you, streching as far as\
    the eye can see. The white begins to turn into more colors... greens, blues... and before you know it,\
    you are standing in the middle of an open field. It is peaceful here... the birds are singing,\
    and the breeze is gentle.";

    $(window).scrollTop($("*:contains('White... pure white...'):last").offset().top);

    document.getElementById("start_button_choice1").style.cssText = "display: initial"
    document.getElementById("start_button_choice2").style.cssText = "display: initial"
    document.getElementById("startbutton").style.cssText = "display: none"
}

    function start_choice1() {
        document.getElementById("start_choice1").innerHTML = 
        "You look around... There is not much out of the ordinary...";

        $(window).scrollTop($("*:contains('White... pure white...'):last").offset().top);

        var x = document.getElementsByClassName("choice1");
        x[0].style.cssText = "display: none"

        document.getElementById("start_button_choice2").style.bottom = "-15vh"
    }

    function start_choice2() {
        document.getElementById("start_choice2").innerHTML =
        "You look up into the bright blue sky... The gentle breeze hits the side of your face as you stare \
        at the swiftly moving clouds. However, you notice something directly above you... \
        an outline of sorts... it's in the shape of a hexagon, and it's flickering with smoke coming off of it. \
        All of a sudden... the shape appears to be getting bigger... until you realize that it is falling! The strange \
        shape crashes down next to you... with the screen still flickering the blue sky with part of a cloud.\
        You look up again to see a hole where it was once was. All of a sudden, the sky turns blood red. \
        Text flies across the sky, and the world begins to melt away into blackness...";

        $(window).scrollTop($("*:contains('You look up'):last").offset().top);

        var x = document.getElementsByClassName("choice1");
        x[0].style.cssText = "display: none"

        var x = document.getElementsByClassName("choice2");
        x[0].style.cssText = "display: none"

        document.getElementById("ch1_button_start").style.cssText = "display: initial"

        document.getElementById("ch1_button_start").style.cssText = "bottom: -15vh"
    }

function ch1() {
    document.getElementById("ch1").innerHTML =
    "The blackness morphs into light once again... however this time the light is more harsh... \
    as if it were artifical. Your vision is blurry, but it soon adjusts. You are sitting in a cold metal chair.\
    The room is small and blank, with no windows or doors...There are all sorts of wires coming out of the various parts\
    of you, and you also feel some sort of contraption strapped to your head. You begin to stand up... but you realize there\
    are restraints around you... stopping you from any type of movement. You begin to struggle, but it's no use..."
    
    $(window).scrollTop($("*:contains('The blackness'):last").offset().top);

    document.getElementById("ch1_button_start").style.cssText = "display: none"

    document.getElementById("ch1_button_choice1").style.cssText = "display: initial"
}

    function ch1_choice1() {
        document.getElementById("ch1_choice1").innerHTML =
        "You try struggling against the restraints again... this time only harder. All of a sudden...\
        you struggle hard enough to pop off the rusted restraints! You get up. After standing up... you rip off\
        all the wires attached. The computer in which the wires led into starts to beep, displaying the words\
        'ROGUE SUBJECT... CODE x430B5' on the screen. Intrigued, you step over to the computer and begin to investigate...";

        $(window).scrollTop($("*:contains('You try'):last").offset().top);

        document.getElementById("ch1_button_choice1").style.cssText = "display: none"

        document.getElementById("ch2_button_choice1").style.cssText = "display: initial"

        document.getElementById("ch2_button_choice1").style.cssText = "font-size: 40px"

        document.getElementById("ch2_button_choice2").style.cssText = "display: initial"

        document.getElementById("ch2_button_choice2").style.cssText = "font-size: 40px"
    }

function ch2_choice1() {
    document.getElementById("ch2_choice1").innerHTML =
    "Upon opening up the folder... it is empty.";

    $(window).scrollTop($("*:contains('You try'):last").offset().top);

    document.getElementById("ch2_button_choice1").style.cssText = "display: none"

    document.getElementById("ch2_button_choice2").style.cssText = "bottom: -15vh"
}

function ch2_choice2() {
    document.getElementById("ch2_choice2").innerHTML =
    "You open the folder... there are many different programs... however out of all of them...\
    one stands out to you the most.";

    $(window).scrollTop($("*:contains('You open the'):last").offset().top);

    document.getElementById("ch2_button_choice2").style.cssText = "display: none"

    document.getElementById("ch2_button_choice1").style.cssText = "display: none"

    document.getElementById("ch3_button_start").style.cssText = "display: initial"
}

function ch3() {
    document.getElementById("ch3").innerHTML =
    "You double click the program... and a bunch of new windows open up with text flying across the\
    screen. The walls around begin to hiss, and one by one, each wall falls revealing a huge warehouse...\
    full of more four-walled rooms... the same type of room you were just in...";

    $(window).scrollTop($("*:contains('You double click'):last").offset().top);

    document.getElementById("ch3_button_start").style.cssText = "display: none"

    document.getElementById("ch3_button_choice1").style.cssText = "display: initial"
}

    function ch3_choice1() {
        document.getElementById("ch3_choice1").innerHTML =
        "END OF DEMO - THANK YOU SO MUCH FOR PLAYING!!!";
  
        $(window).scrollTop($("*:contains('You double click'):last").offset().top);

        document.getElementById("ch3_button_choice1").style.cssText = "display: none"

        var audio = new Audio("media/dd.mp3")
        audio.play()
    }