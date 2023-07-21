const htmlmin = require("html-minifier");
const CleanCSS = require("clean-css");
const lazyImagesPlugin = require('eleventy-plugin-lazyimages');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(lazyImagesPlugin);
  eleventyConfig.addPassthroughCopy("favicon.png");
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("analytics.js");
  eleventyConfig.addPassthroughCopy("utils.js");
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
  eleventyConfig.addFilter("toISODate", function(value) { 
    return new Date(value).toISOString()
   });

  eleventyConfig.addShortcode("ISOdate", function () {
    return new Date().toISOString();
  });
  eleventyConfig.addTransform("cssmin", function (content, outputPath) {
    if (outputPath.endsWith(".css")) {
      return new CleanCSS({}).minify(content);
    }
    return content;
  });
  // require("./imageResolve.js");
};
