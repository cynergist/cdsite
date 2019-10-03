const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-page-template-jsx": hot(preferDefault(require("/Users/cynthia/cdsite/src/templates/page-template.jsx"))),
  "component---src-templates-post-template-jsx": hot(preferDefault(require("/Users/cynthia/cdsite/src/templates/post-template.jsx"))),
  "component---src-templates-tag-template-jsx": hot(preferDefault(require("/Users/cynthia/cdsite/src/templates/tag-template.jsx"))),
  "component---src-templates-category-template-jsx": hot(preferDefault(require("/Users/cynthia/cdsite/src/templates/category-template.jsx"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/cynthia/cdsite/.cache/dev-404-page.js"))),
  "component---src-pages-404-jsx": hot(preferDefault(require("/Users/cynthia/cdsite/src/pages/404.jsx"))),
  "component---src-pages-categories-jsx": hot(preferDefault(require("/Users/cynthia/cdsite/src/pages/categories.jsx"))),
  "component---src-pages-index-jsx": hot(preferDefault(require("/Users/cynthia/cdsite/src/pages/index.jsx"))),
  "component---src-pages-tags-jsx": hot(preferDefault(require("/Users/cynthia/cdsite/src/pages/tags.jsx")))
}

