

(function() {
  // If the search embed is already loaded, don't repeat the process.
  if (window.dc && window.dc.loaded) return;

  window.dc = window.dc || {};
  window.dc.recordHit = "//dev.dcloud.org/pixel.gif";

  var loadCSS = function(url, media) {
    var link   = document.createElement('link');
    link.rel   = 'stylesheet';
    link.type  = 'text/css';
    link.media = media || 'screen';
    link.href  = url;
    var head   = document.getElementsByTagName('head')[0];
    head.appendChild(link);
  };

  /*@cc_on
  /*@if (@_jscript_version < 5.8)
    loadCSS('//dev.dcloud.org/search_embed/search_embed.css');
  @else @*/
    loadCSS('//dev.dcloud.org/search_embed/search_embed-datauri.css');
  /*@end
  @*/

  // Record the fact that the embed is loaded.
  dc.loaded = true;

  // Request the embed JavaScript.
  document.write('<script type="text/javascript" src="//dev.dcloud.org/search_embed/search_embed.js"></script>');
})();
