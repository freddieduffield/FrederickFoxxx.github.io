var minW = 900;

$(function () {
  CheckSizeZoom();
  $('#divWrap').css('visibility', 'visible');
});
$(window).resize(CheckSizeZoom);

function CheckSizeZoom() {
  if ($(window).width() < minW) {
    var zoomLev = $(window).width() / minW;

    if (typeof (document.body.style.zoom) !== "undefined") {
      x$(document.body).css('zoom', zoomLev);
    }
    else {
      // Mozilla doesn't support zoom, use -moz-transform to scale and compensate for lost width
      $('#divWrap').css('-moz-transform', "scale(" + zoomLev + ")");
      $('#divWrap').width($(window).width() / zoomLev + 10);
      $('#divWrap').css('position', 'relative');
      $('#divWrap').css('left', (($(window).width() - minW - 16) / 2) + "px");
      $('#divWrap').css('top', "-19px");
      $('#divWrap').css('position', 'relative');
    }
  }
  else {
    $(document.body).css('zoom', '');
    $('#divWrap').css('position', '');
    $('#divWrap').css('left', "");
    $('#divWrap').css('top', "");
    $('#divWrap').css('-moz-transform', "");
    $('#divWrap').width("");
  }
}
