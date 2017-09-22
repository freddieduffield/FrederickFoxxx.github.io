$(() => {
  $('#work-link').click(function() {
    $('div.caro').show('slow');
    $('div.about-content').hide('slow');
    $('div.contact-content').hide('slow');
  });

  $('#about-link').click(function() {
    $('div.about-content').show('slow');
    $('div.caro').hide('slow');
    $('div.contact-content').hide('slow');
  });

  $('#contact-link').click(function() {
    $('div.contact-content').show('slow');
    $('div.caro').hide('slow');
    $('div.about-content').hide('slow');
  });


});
