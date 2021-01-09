(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  // https://stackoverflow.com/questions/273789/is-there-a-version-of-javascripts-string-indexof-that-allows-for-regular-expr

  nx.regexIndexOf = function (inString, inRe, inStartPos) {
    if (!inString) return -1;
    var start = inStartPos || 0;
    var idx = inString.substring(start).search(inRe);
    return idx >= 0 ? idx + start : idx;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.regexIndexOf;
  }
})();
