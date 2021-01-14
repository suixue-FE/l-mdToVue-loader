const hljs = require('highlight.js');

module.exports = function highlight(str,lang){
  if (lang && hljs.getLanguage(lang)) { // js等语法类型
    return hljs.highlight(lang, str, true).value;
  }

  return '';
}