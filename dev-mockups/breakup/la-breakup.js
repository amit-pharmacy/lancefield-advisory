/* Lancefield: break up long hub and subpages, sticky header. Paste once, site-wide, before </body>. */
(function () {
  function lum(c) { var m = c.match(/[\d.]+/g); return m ? 0.299 * m[0] + 0.587 * m[1] + 0.114 * m[2] : 255; }
  function clear(c) { var m = c.match(/[\d.]+/g); return !m || (m.length > 3 && +m[3] === 0); }
  function slug(t) { return t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 60); }
  function esc(t) { return t.replace(/&/g, '&amp;').replace(/</g, '&lt;'); }
  function bgOf(el) { while (el) { var c = getComputedStyle(el).backgroundColor; if (!clear(c)) return c; el = el.parentElement; } return 'rgb(255, 255, 255)'; }

  // MOVE 4: pass the sticky header's height to the CSS so contents links land below it
  function headH() {
    var h = 0;
    document.querySelectorAll('#masthead .main-header-bar').forEach(function (b) { h = Math.max(h, b.offsetHeight); });
    document.documentElement.style.setProperty('--la-head', h + 'px');
  }

  function run() {
    headH();
    window.addEventListener('resize', headH);
    var page = document.querySelector('[data-elementor-type="wp-page"]');
    if (!page) return;

    // MOVE 3: tag dark body text on light backgrounds, and boxes that are real cards
    // (own background colour, a shadow or a left bar) so they keep their inner padding
    page.querySelectorAll('.elementor-widget-text-editor, .elementor-icon-box-description').forEach(function (el) {
      if (lum(getComputedStyle(el).color) < 140) el.classList.add('la-body');
    });
    page.querySelectorAll('.e-con .e-con').forEach(function (c) {
      var s = getComputedStyle(c);
      var ownBg = !clear(s.backgroundColor) && s.backgroundColor !== bgOf(c.parentElement);
      if (ownBg || s.boxShadow !== 'none' || parseFloat(s.borderLeftWidth)) c.classList.add('la-card');
    });

    // MOVE 2: number every heading tagged la-chapter and build the contents box
    var heads = page.querySelectorAll('.la-chapter');
    if (heads.length < 3) return;
    var items = '';
    heads.forEach(function (w, i) {
      var n = (i < 9 ? '0' : '') + (i + 1);
      var title = w.textContent.trim();
      if (!w.id) w.id = slug(title);
      items += '<li><a href="#' + w.id + '"><span>' + n + '</span>' + esc(title) + '</a></li>';
      var mark = document.createElement('div');
      mark.className = 'la-mark';
      mark.innerHTML = '<span>' + n + '</span><i></i><a href="#on-this-page">Contents &uarr;</a>';
      w.insertBefore(mark, w.firstChild);
      // MOVE 3: first paragraph straight after the heading becomes the lead
      var next = w.nextElementSibling;
      if (next && next.classList.contains('elementor-widget-text-editor')) (next.querySelector('p') || next).classList.add('la-lead');
    });
    var band = heads[0];
    while (band.parentElement !== page) band = band.parentElement;
    var toc = document.createElement('div');
    toc.className = 'la-toc-band';
    toc.innerHTML = '<nav class="la-toc" id="on-this-page" aria-label="On this page"><p>On this page</p><ol>' + items + '</ol></nav>';
    page.insertBefore(toc, band);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run); else run();
})();
