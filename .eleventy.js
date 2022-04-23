const htmlmin = require("html-minifier");
const CleanCSS = require("clean-css");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("favicon.png");
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("analytics.js");
  eleventyConfig.addPassthroughCopy("cms/config.yml");
  eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
    if (outputPath.endsWith(".html")) {
      return htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
        minifyJS: true,
        minifyCSS: true,
      });
    }

    return content;
  });
  eleventyConfig.addTransform("cssmin", function (content, outputPath) {
    if (outputPath.endsWith(".css")) {
      return new CleanCSS({}).minify(content);
    }
    return content;
  });
  require("./imageResolve.js");
};
