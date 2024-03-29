(function(window, document, undefined) {
  $(document).ready(function() {

    var path = window.location.pathname;
    if (path === '/' || path === '/index.html') {
      $('.sidebar-left .links a[name="home"]').toggleClass('selected');
    } else if (path === '/about/') {
      $('.sidebar-left .links a[name="about"]').toggleClass('selected');
    } else if (path === '/contact/') {
      $('.sidebar-left .links a[name="contact"]').toggleClass('selected');
    } else if (path === '/officers/') {
      $('.sidebar-left .links a[name="officers"]').toggleClass('selected');
    } else if (path === '/sponsors/') {
      $('.sidebar-left .links a[name="sponsors"]').toggleClass('selected');
    }
  });

  $(document).mousemove(function(e) {
    $('svg.gear').css('transform', 'rotate('+(((e.pageX/5)%360)+((e.pageY/5)%360))+'deg)');
  });

})(this, this.document);
