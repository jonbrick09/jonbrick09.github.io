//
// $(document).scroll(function(event) {
//   if (this.scrollTop > 0) {
//     $(".container-fluid").addClass("gray-background");
//
//   }
//   else {
//     $(".container-fluid").removeClass("gray-background");
//   }
//
// });

$(document).ready(function() {

  $(".burger").click(function() {
    //toggle nav
    console.log("click!");
    $(".header-nav").slideToggle();
    //
  }); //end click

  $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      console.log(scroll);
      if (scroll > 5) {
        $(".container-fluid").addClass("gray-background");
        $("nav").addClass("white-letters");

      }
      else if (scroll <= 5) {
        $(".container-fluid").removeClass("gray-background");
        $("nav").removeClass("white-letters");
      }

  });

  var number = 1;

  var newLine =
    '<div class="line-item">' +
      '<div class="whole-line">' +
        '<input class="todo-input" placeholder="Enter Group Name" />' +
        '<div class="add-member-button">' +
          'Add Member' +
        '</div>' +
        '<div class="delete-button">' +
          'X' +
        '</div>' +
      '</div>' +
      '<div class="save-button">' +
        'Save' +
      '</div>' +
    '</div>'

  //click on todo-input
  $('.list').on('click', '.todo-input', function(event) {
    event.preventDefault();
    $(this).parents('.line-item').children('.save-button').slideDown('fast');
  });

  $('.list').on('click', '.delete-button', function() {
    $(this).parents('.line-item').remove();
    number--;
    console.log($(this).closest('div').attr('id'));
  });

  //click on save-button
  $('.list').on('click', '.save-button', function(event) {
    $(this).siblings('.whole-line').replaceWith(
      '<div class="whole-line">' +
        '<input class="todo-input"  val="' +
        $(this).siblings().children('.todo-input').val() +
        '"' +
        'placeholder="' +
        $(this).siblings().children('.todo-input').val() +
        '"/>' +
        '<div class="add-member-button">' +
          'Add Member' +
        '</div>' +        
        '<div class="delete-button">' +
          'X' +
        '</div>' +
      '</div>');

    $(this).hide();

    console.log('Saving' + 'HOW TO NAME LINE NUMBER?');
  }); //end click save-button

  //Adding an item - listen for click on add-item-button
  $('.add-button').click(function(event) {
    event.preventDefault();
    $('.list').prepend(newLine);
    console.log('Added Item!');
  }); //end click of add-item

    var number = 1;

    addInputFunction(number);

    function addInputFunction(currentnumber) {
      var input = '<div class="listitem' + currentnumber + '">' +
        '<div class="check">' +
        '<input type="text" class="to-do-input" name="item' + currentnumber + '" placeholder="to do ' + currentnumber + '"/>' +
        ' <div class="delete-input">x</div></div>';


      $('.inputRow').prepend(input);

      number++;
    };

    $('.addButton').click(function() {
      addInputFunction(number);
    });


    $('.inputRow').on('click', '.delete-input', function() {
      $(this).parent().parent().remove();
      number--;
      console.log('Deleted: ' + $(this).parents('.listitem').currentnumber);
    });




});//end ready


//jQuery is required to run this code
// $( document ).ready(function() {
//
//     scaleVideoContainer();
//
//     initBannerVideoSize('.video-container .poster img');
//     initBannerVideoSize('.video-container .filter');
//     initBannerVideoSize('.video-container video');
//
//     $(window).on('resize', function() {
//         scaleVideoContainer();
//         scaleBannerVideoSize('.video-container .poster img');
//         scaleBannerVideoSize('.video-container .filter');
//         scaleBannerVideoSize('.video-container video');
//     });
//
// });
//
// function scaleVideoContainer() {
//
//     var height = $(window).height() + 5;
//     var unitHeight = parseInt(height) + 'px';
//     $('.homepage-hero-module').css('height',unitHeight);
//
// }
//
// function initBannerVideoSize(element){
//
//     $(element).each(function(){
//         $(this).data('height', $(this).height());
//         $(this).data('width', $(this).width());
//     });
//
//     scaleBannerVideoSize(element);
//
// }
//
// function scaleBannerVideoSize(element){
//
//     var windowWidth = $(window).width(),
//     windowHeight = $(window).height() + 5,
//     videoWidth,
//     videoHeight;
//
//     console.log(windowHeight);
//
//     $(element).each(function(){
//         var videoAspectRatio = $(this).data('height')/$(this).data('width');
//
//         $(this).width(windowWidth);
//
//         if(windowWidth < 1000){
//             videoHeight = windowHeight;
//             videoWidth = videoHeight / videoAspectRatio;
//             $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});
//
//             $(this).width(videoWidth).height(videoHeight);
//         }
//
//         $('.homepage-hero-module .video-container video').addClass('fadeIn animated');
//
//     });
// }
