

$(document).ready(function(){

  /* highlight the top nav as scrolling occurs */
  $('body').scrollspy({ target: '#navbar' })

  // apply lightbox listener
  $('.lightboxable').lightbox();


});



//lightbox module
(function($){

  $.fn.lightbox = function(property){

    function add_block_page(){
      var block_page = $('<div class = "block-page"></div>');
      $(block_page).appendTo('body');
    }

    function add_styles(){     
                        /*Block page overlay*/
      var pageHeight = $(document).height();
      var pageWidth = $(window).width();

      $('.block-page').css({
        'height':pageHeight,
        'width':pageWidth,
      });

    }

    function add_popup_box(clicked){
      // var title = $(clicked).children('h4').text();
      // var description = $(clicked).children('p').text();



      var pop_up = $('<div class="lightbox"><a href="#" class="close-box"></a><div class="inner-box"></div></div>');
      $(pop_up).appendTo('.block-page');

      // add contents from the clicked item
      var $clicked = $(clicked).children().clone();
      $('.inner-box').append($clicked);
                   
      $('.close-box').click(function(e){
        $('.block-page').fadeOut().remove();    
        $(this).parent().fadeOut().remove();
        e.preventDefault();
      });
    }



    return this.click(function(e){
      //do stuff here
   
      add_block_page();
      add_popup_box(this);
      add_styles();

      $('.lightbox').fadeIn();
    });

    return this;

  };

})(jQuery);



