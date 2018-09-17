$(document).ready(function(){  
        
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
        
            $("#item-all, #item-template, #item-project").on('click', function(){
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
