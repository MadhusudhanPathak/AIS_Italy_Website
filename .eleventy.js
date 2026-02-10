const yaml = require("js-yaml");
const fs = require("fs");
const path = require("path");

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

  // Add custom filters
  eleventyConfig.addFilter("split", (str, delimiter) => {
    if (typeof str !== 'string') return [];
    return str.split(delimiter);
  });

  // Collections
  eleventyConfig.addCollection("events", function(collection) {
    return collection.getFilteredByGlob("src/content/events.md");
  });

  // Add data extensions for YAML files
  eleventyConfig.addDataExtension("yaml", contents => yaml.load(contents));
  eleventyConfig.addDataExtension("yml", contents => yaml.load(contents));

  // Load content data from root data directory
  const rootDataDir = path.join(__dirname, 'data');
  const loadDataFile = (filename) => {
    try {
      const filePath = path.join(rootDataDir, filename);
      if (fs.existsSync(filePath)) {
        const fileContents = fs.readFileSync(filePath, 'utf8');
        if (filename.endsWith('.yaml') || filename.endsWith('.yml')) {
          return yaml.load(fileContents);
        }
      }
    } catch (error) {
      console.error(`Error loading data file ${filename}:`, error);
    }
    return {};
  };

  // Load content data and make it globally available
  eleventyConfig.addGlobalData("home", () => loadDataFile('home.yaml'));
  eleventyConfig.addGlobalData("about", () => loadDataFile('about.yaml'));
  eleventyConfig.addGlobalData("events", () => loadDataFile('events.yaml'));
  eleventyConfig.addGlobalData("activities", () => loadDataFile('activities.yaml'));
  eleventyConfig.addGlobalData("community", () => loadDataFile('community.yaml'));
  eleventyConfig.addGlobalData("faq", () => loadDataFile('faq.yaml'));
  eleventyConfig.addGlobalData("contact", () => loadDataFile('contact.yaml'));
  eleventyConfig.addGlobalData("global", () => loadDataFile('global.yaml'));

  // Exclude README files from processing
  eleventyConfig.ignores.add("src/README.md");
  eleventyConfig.ignores.add("src/assets/img/README.md");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "components",
      layouts: "layouts",
      data: "data" // Point to src/data directory to maintain compatibility with existing site data
    },
    templateFormats: ["md", "njk", "html"], // Include md for content files
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    passthroughFileCopy: true
  };
};
