
/************* Lightbox Code  **************/

//Initializes Plugin
$(document).ready(function() {
  $('.image-link').magnificPopup({type:'image'});
});

//Run plugin
$('.popup-link').magnificPopup({
  type: 'image',
  gallery:{ //enables gallery
    enabled:true,
    navigateByImgClick: true,
    tPrev: 'Previous (Left arrow key)', // title for left button
    tNext: 'Next (Right arrow key)', // title for right button
  },
  image: //Add title and attribute to pop up
  {
    titleSrc: function(item) {
      return item.el.children().attr('title') + '<small>' + item.el.children().attr('alt') + '</small>';
    }
  }
});


/************* Disable Enter Reset  **************/
$(document).keypress(function(event){
    if (event.keyCode == 10 || event.keyCode == 13) 
        event.preventDefault();
});

/************* Sticky Search Box  **************/
// Inspiration from http://www.onlywebpro.com/2013/04/03/make-a-jquery-sticky-header-in-5-minutes/

$(function() {

  var stickySearch = $('.search').offset().top;
  
  $(window).scroll(function(){
    if( $(window).scrollTop() > stickySearch ) {
      $('.search').css({position: 'fixed', top: '0px', width: '100%'});
    } else {
      $('.search').css({position: 'static', top: '0px'});
    }
    
  });
});

/************* Search Box  **************/

$(document).ready(function() {
  /* Add "search" to the input field */
  $('#search').val('Search'); 
  /* Remove or add "Search..." based on focus */
  $('#search').focus(function(){
      if($(this).val() === "Search") {
        $(this).val("");
      }               
   });
  $('#search').blur(function(){
      if($(this).val() === "" || " ") {
        $(this).val("Search");
      }
   });
  
  
  /* Search as typing */
//Inspiration from http://www.designchemical.com/blog/index.php/jquery/live-text-search-function-using-jquery/
    
  $("#search").keyup(function(){
          //Capture search inquiry
      var search_string = $(this).val().toLowerCase();
 
        // Loop through the link list
        $("a img").each(function(){

            // If the image title does not contain the text phrase fade it out
            if ($(this).attr('title').search(new RegExp(search_string, "i")) < 0 && $(this).attr('alt').search(new RegExp(search_string, "i")) < 0) {
                $(this).fadeOut();
            // Show the list item if the phrase matches
            } else {
                $(this).show();
            }
 
            /*// If the image alt does not contain the text phrase fade it out
            if ($(this).attr('alt').search(new RegExp(search_string, "i")) < 0) {
                $(this).fadeOut();
            // Show the image if the phrase matches
            } else {
                $(this).show();
            }*/
        });
 
    });
    
   
});/* doc ready function*/
