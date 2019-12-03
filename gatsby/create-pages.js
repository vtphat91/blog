const path = require(`path`)


const createPostsPages = require('./pagination/create-posts-pages');
const createCategoriesPages = require('./pagination/create-categories-pages');
const createTagsPages = require('./pagination/create-tags-pages');

const createPages = async ({ graphql, actions }) => {
    const { createPage } = actions ;
    //BLOG CONTENFUL
  
    const blogContenful = await graphql(
      `
        {
          allContentfulBlogPost {
            edges {
              node {
                slug
              }
            }
          }
        }
      `)
  
    if (blogContenful.errors) {
      console.error(blogContenful.errors);
      return
    }
   
    const templateBlog = path.resolve('./src/templates/post-template.js')
    const blogs = blogContenful.data.allContentfulBlogPost.edges
    blogs.forEach((content, index) => {
      createPage({
        path: `posts/${content.node.slug}`,
        component: templateBlog,
        context: {
          slug: content.node.slug
        }
      });
    });

    // Feeds
    await createPostsPages(graphql, actions);
    await createCategoriesPages(graphql, actions);
    await createTagsPages(graphql, actions);
};

module.exports = createPages;