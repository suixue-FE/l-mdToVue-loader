const hljs = require('highlight.js');

module.exports = function highlight(str,lang){
  if (lang && hljs.getLanguage(lang)) { // js/java等类型
    return hljs.highlight(lang, str, true).value;
  }

  return '';
}