$(document).ready(function() {

	// Do cool stuff

    $('#menu-icon').on("click", function(){

        $('#menu').toggleClass('slide-menu');
        $('#menu-icon')
            .toggleClass('fa-bars')
            .toggleClass('fa-times')
            .toggleClass('fixed-icon');

        $('body').toggleClass('overflow-hidden');
    });

});