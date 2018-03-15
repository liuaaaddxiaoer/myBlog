(function(doc, win) {
  var docEl = doc.documentElement,
      resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
      recalc = function() {
        var clientWidth = docEl.clientWidth < docEl.clientHeight ? docEl.clientWidth : docEl.clientHeight;
        if (!clientWidth) return;
        if (clientWidth > 500) {
          clientWidth = 375;
        } 
        docEl.style.fontSize = 20 * (clientWidth / 375) + 'px';
      }
      if (!doc.addEventListener) return;
      win.addEventListener(resizeEvt, recalc, false);
      doc.addEventListener('DOMContentLoaded', recalc, false);
})(document,window);