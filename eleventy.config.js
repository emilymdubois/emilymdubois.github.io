export default async function(eleventyConfig) {
  // Copy unprocessed source files to public directory.
	eleventyConfig.addPassthroughCopy("./CNAME");
  eleventyConfig.addPassthroughCopy("./src/css");

  // Hot reload when the style changes.
  eleventyConfig.addWatchTarget("./src/css");

  // Return config object.
  return {
    dir: {
      input: "src",
      output: "public"
    }
  }
};