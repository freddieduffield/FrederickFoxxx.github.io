$(() => {
  $('#body').css('min-height', screen.height);

  $('#work-link').click(function() {
    $('div.work-cont').show('slow');
    $('div.about-content').hide('slow');
    $('div.contact-content').hide('slow');
    $('.header-ani').css('color', '#CBC5EA');

  });

  $('#about-link').click(function() {
    $('div.about-content').show('slow');
    $('div.work-cont').hide('slow');
    $('div.contact-content').hide('slow');
    $('.header-ani').css('color', '#D46A6A');
  });

  $('#contact-link').click(function() {
    $('div.contact-content').show('slow');
    $('div.work-cont').hide('slow');
    $('div.about-content').hide('slow');
    $('.header-ani').css('color', 'aquamarine');
  });
});
