module.exports = function(eleventyConfig) {
  // Pass through copy
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  
  // Watch targets
  eleventyConfig.addWatchTarget("src/assets/css/");
  
  // Filters
  eleventyConfig.addFilter("readableDate", dateObj => {
    return new Date(dateObj).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  });

  // Collections
  eleventyConfig.addCollection("events", function(collection) {
    return collection.getFilteredByGlob("src/pages/events/*.md");
  });

  eleventyConfig.addCollection("resources", function(collection) {
    return collection.getFilteredByGlob("src/pages/resources/*.md");
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts"
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    passthroughFileCopy: true
  };
};
