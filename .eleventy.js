module.exports = function(eleventyConfig) {
  // Pass through copy
  eleventyConfig.addPassthroughCopy("src/assets/img");
  eleventyConfig.addPassthroughCopy("src/assets/js");
  eleventyConfig.addPassthroughCopy({ "src/assets/fonts": "assets/fonts" });
  // Copy favicon to root
  eleventyConfig.addPassthroughCopy({ "src/assets/img/favicon.svg": "favicon.svg" });

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
    return collection.getFilteredByGlob("src/content/events.md");
  });

  // Exclude README files from processing
  eleventyConfig.ignores.add("src/README.md");
  eleventyConfig.ignores.add("src/assets/img/README.md");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "components",
      layouts: "layouts",
      data: "data" // Specify data directory
    },
    templateFormats: ["md", "njk", "html"], // Include md for content files
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    passthroughFileCopy: true
  };
};
