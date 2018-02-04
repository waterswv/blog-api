// Updated file structure to apiController.js from apicontroller.js
function index(req, res) {
  res.json({
    description: "This API provides data to my blog API",
    gitHub: "https://github.com/waterswv/blog-api",
    endPoints: "Coming Soon"
  });
}

module.exports = {
  index: index
};
