const path = require('path');

const siteConfig = require('../../config/siteConfig');
const _ = require('lodash');


module.exports = async (graphql, actions) => {
    const { createPage } = actions;
  
    const result = await graphql(`
      {
        postsCategory: allContentfulBlogPost {
          group(field: category___title) {
            fieldValue
            totalCount
          }
        }
      }
    `);
    const { postsPerPage } = siteConfig;

    result.data.postsCategory.group.forEach(category => {
      
      const numPages = Math.ceil(category.totalCount / postsPerPage);
      const categorySlug = `/category/${_.kebabCase(category.fieldValue)}`;
      
      for (let i = 0; i < numPages; i += 1) {
          createPage({
            path: i === 0 ? categorySlug : `${categorySlug}/page/${i}`,
            component: path.resolve('./src/templates/category-template.js'),
            context: {
              category: category.fieldValue,
              currentPage: i,
              postsLimit: postsPerPage,
              postsOffset: i * postsPerPage,
              prevPagePath: i <= 1 ? categorySlug : `${categorySlug}/page/${i - 1}`,
              nextPagePath: `${categorySlug}/page/${i + 1}`,
              hasPrevPage: i !== 0,
              hasNextPage: i !== numPages - 1
            }
          });
        }
    });
  };
  