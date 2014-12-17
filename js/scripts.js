
$(document).ready(function(){

  /* highlight the top nav as scrolling occurs */
  $('body').scrollspy({ target: '#navbar' })


  $('.lightboxable').lightbox();


});




(function($){

  //define jQuery plugin for lightboxes
  $.fn.lightbox = function(property){

    var options = $.extend({
      height: "400",
      width: "600",
      top: "30%",
      left: "25%",

    }, property);

    function add_block_page(){
      var block_page = $('<div class = "block-page"></div>');
      $(block_page).appendTo('body');
    }

    function add_styles(){     
      $('.lightbox').css({ 
        'position':'fixed', 
        'left':options.left,
        'top':options.top,
        'display':'none',
        'padding': 'none',
        'height': options.height + 'px',
        'width': options.width + 'px',
        'border':'1px solid #fff',
        'box-shadow': '0px 2px 7px #292929',
        '-moz-box-shadow': '0px 2px 7px #292929',
        '-webkit-box-shadow': '0px 2px 7px #292929',
        'border-radius':'10px',
        '-moz-border-radius':'10px',
        '-webkit-border-radius':'10px',
        'background': '#f2f2f2', 
        'z-index':'50',
      });
      $('.close-box').css({
        'position':'absolute',
        'top':'-10px',
        'left':'-10px',
        'border-radius' : '500px',
        'border' : '1px solid black',
        'display':'block',
        'height':'30px',
        'width':'30px',
        'background': 'url(images/close.png) no-repeat',
        'background-color': '#f2f2f2',
        'background-size': '100%',
      });
                        /*Block page overlay*/
      var pageHeight = $(document).height();
      var pageWidth = $(window).width();

      $('.block-page').css({
        'position':'absolute',
        'top':'0',
        'left':'0',
        'background-color':'rgba(0,0,0,0.6)',
        'height':pageHeight,
        'width':pageWidth,
        'z-index':'10'
      });
      $('.inner-box').css({
        'position' : 'relative',
        'background-color':'#fff',
        'height':'85%',
        'width':'90%',
        'padding':'10px',
        'margin':'5% auto',
        'border-radius':'10px',
        '-moz-border-radius':'10px',
        '-webkit-border-radius':'10px',
        'text-align': 'center',
      });
    }

    function add_popup_box(clicked){
      var title = $(clicked).children('h4').text();
      var description = $(clicked).children('p').text();

      var pop_up = $('<div class="lightbox"><a href="#" class="close-box"></a><div class="inner-box"><h2>' + title + '</h2><p>' + description + '</p></div></div>');


      $(pop_up).appendTo('.block-page');
                   
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

})(jQuery); //end of plugin


