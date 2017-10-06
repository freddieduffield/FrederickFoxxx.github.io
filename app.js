$(() => {
  $('#body').css('min-height', screen.height);

  $('#work-link').click(function() {
    $('div.work-cont').show('slow');
    $('div.about-content').hide('slow');
    $('div.contact-content').hide('slow');
  });

  $('#about-link').click(function() {
    $('div.about-content').show('slow');
    $('div.work-cont').hide('slow');
    $('div.contact-content').hide('slow');
  });

  $('#contact-link').click(function() {
    $('div.contact-content').show('slow');
    $('div.work-cont').hide('slow');
    $('div.about-content').hide('slow');
  });

  // // For the hover effects
  // if (Modernizr.touch) {
  //   // show the close overlay button
  //   $('.close-overlay').removeClass('hidden');
  //   // handle the adding of hover class when clicked
  //   $('.img').click(function(e){
  //     if (!$(this).hasClass('hover')) {
  //       $(this).addClass('hover');
  //     }
  //   });
  //   // handle the closing of the overlay
  //   $('.close-overlay').click(function(e){
  //     e.preventDefault();
  //     e.stopPropagation();
  //     if ($(this).closest('.img').hasClass('hover')) {
  //       $(this).closest('.img').removeClass('hover');
  //     }
  //   });
  // } else {
  //   // handle the mouseenter functionality
  //   $('.img').mouseenter(function(){
  //     $(this).addClass('hover');
  //   })
  //   // handle the mouseleave functionality
  //   .mouseleave(function(){
  //     $(this).removeClass('hover');
  //   });
  // }

});
