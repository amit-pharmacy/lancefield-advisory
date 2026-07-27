// Lancefield page-builder — shared behaviours (FAQ, mobile nav, sticky CTA).
document.addEventListener('DOMContentLoaded', function () {
  // FAQ accordion — one open at a time optional; here simple toggle.
  document.querySelectorAll('.faq__q').forEach(function (q) {
    q.addEventListener('click', function () {
      q.closest('.faq__item').classList.toggle('active');
    });
  });
  // Mobile nav
  var t = document.getElementById('mobileToggle'), m = document.getElementById('mobileNav');
  if (t && m) t.addEventListener('click', function () { m.classList.toggle('active'); });
  // Sticky consult CTA reveals once the hero has scrolled away
  var sticky = document.getElementById('stickyCta');
  if (sticky) {
    var hero = document.querySelector('.page-hero');
    var trigger = hero ? hero.offsetHeight - 80 : 480;
    var onScroll = function () {
      if (window.scrollY > trigger) sticky.classList.add('show');
      else sticky.classList.remove('show');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }
});
