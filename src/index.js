const loaderUtils = require('loader-utils');
const MarkdownIt = require('markdown-it');
const highlight = require('./highlight')
const frontMatter = require('front-matter');

function wrapper(content) {
  let encodeContent = encodeURIComponent(content);
  return `
    <template>
      <section class="l-markdow" v-html="content"/>
    </template>
  
  <script>
  export default {
    created() {
      this.content = decodeURIComponent(\`${encodeContent}\`);
    },
    mounted() {
    }
  };
  </script>
  `;
  }

const parser = new MarkdownIt({
  html: true,
  highlight
});

module.exports = function(source){
  let options = loaderUtils.getOptions(this) || {};
  this.cacheable && this.cacheable();
  options = {
    wrapper,
    ...options
  };
  let fm;

  if (options.enableMetaData) {
    fm = frontMatter(source);
    source = fm.body;
  }

  return options.wrapper(parser.render(source), fm);
}