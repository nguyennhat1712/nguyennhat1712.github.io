$(document).ready(function () {
    var myNavBar = {

        flagAdd: true,



        add: function () {
            if (this.flagAdd) {

                document.getElementById("navbar").className += "fixed-top";

                this.flagAdd = false;
            }
        },

        remove: function () {

            document.getElementById("navbar").className =
                document.getElementById("navbar").className.replace(/(?:^|\s)fixed-top(?!\S)/g, '');

            this.flagAdd = true;
        }

    };

    /**
     * Init the object. Pass the object the array of elements
     * that we want to change when the scroll goes down
     */


    /**
     * Function that manage the direction
     * of the scroll
     */
    function offSetManager() {

        var yOffset = 0;
        var currYOffSet = window.pageYOffset;

        if (yOffset < currYOffSet) {
            myNavBar.add();
        }
        else if (currYOffSet == yOffset) {
            myNavBar.remove();
        }

    }

    /**
     * bind to the document scroll detection
     */
    window.onscroll = function (e) {
        offSetManager();
    }
    $(".nav-port span").on('click', function (e) {
        e.preventDefault();
        $(this).parents('div').find('span').removeClass('selected');
        $(this).addClass('selected');

    });

    // $(".show-more").on('click', function(){
    //     $(".project").fadeIn();
    //     $(".template").fadeIn();
    //     $(this).hide();
    //     console.log("click");
    // });

    $("#item-all, #item-template, #item-project").on('click', function () {
        $(".show-more").hide()
    });

    // $(".nav-link").on('click',function (e) {
    //     e.preventDefault();
    //     var target = this.hash;
    //     $target = $(target);
    //     $("html, body").stop().animate({
    //         'scrollTop':  $target.offset().top
    //     }, 900, 'swing', function () {
    //         window.location.hash = target;
    //     });
    //     console.log(1);
    // });
})
