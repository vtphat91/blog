const path = require('path');

const siteConfig = require('../../config/siteConfig');


module.exports = async (graphql, actions) => {
    const { createPage } = actions;
  
    const result = await graphql(`
      {
        postPages: allContentfulBlogPost {
            totalCount
        }
      }
    `);
    const { postsPerPage } = siteConfig;
    const numPages = Math.ceil(result.data.postPages.totalCount / postsPerPage);

    for (let i = 0; i < numPages; i += 1) {
        createPage({
          path: i === 0 ? '/' : `/page/${i}`,
          component: path.resolve('./src/templates/index-template.js'),
          context: {
            currentPage: i,
            postsLimit: postsPerPage,
            postsOffset: i * postsPerPage,
            prevPagePath: i <= 1 ? '/' : `/page/${i - 1}`,
            nextPagePath: `/page/${i + 1}`,
            hasPrevPage: i !== 0,
            hasNextPage: i !== numPages - 1
          }
        });
      }

  };
  