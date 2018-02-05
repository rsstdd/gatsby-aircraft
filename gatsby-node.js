const path = require('path');
const slugify = require('./src/utils/slugify');

exports.onCreateNode = ({ node, _, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;
  if (node.internal.type === `AircraftJson`) {
    const slug = slugify(node.name);
    console.log(slug);
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allAircraftJson {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allAircraftJson.edges.map(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/aircraft-page.js`),
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            slug: node.fields.slug,
          },
        });
      });
      resolve();
    });
  });
};
