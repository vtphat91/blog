const path = require('path');

const siteConfig = require('../../config/siteConfig');
const _ = require('lodash');


module.exports = async (graphql, actions) => {
    const { createPage } = actions;
  
    const result = await graphql(`
      {
        postsTags: allContentfulBlogPost {
          group(field: tags___title) {
            fieldValue
            totalCount
          }
        }
      }
    `);
    const { postsPerPage } = siteConfig;

    result.data.postsTags.group.forEach(tag => {
      
      const numPages = Math.ceil(tag.totalCount / postsPerPage);
      const tagSlug = `/tag/${_.kebabCase(tag.fieldValue)}`;

      for (let i = 0; i < numPages; i += 1) {
          createPage({
            path: i === 0 ? tagSlug : `${tagSlug}/page/${i}`,
            component: path.resolve('./src/templates/tags-template.js'),
            context: {
              tag: tag.fieldValue,
              currentPage: i,
              postsLimit: postsPerPage,
              postsOffset: i * postsPerPage,
              prevPagePath: i <= 1 ? tagSlug : `${tagSlug}/page/${i - 1}`,
              nextPagePath: `${tagSlug}/page/${i + 1}`,
              hasPrevPage: i !== 0,
              hasNextPage: i !== numPages - 1
            }
          });
        }
    });
  };
  