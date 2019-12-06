import React from 'react'
import { graphql, Link } from 'gatsby'
import Post from '../components/Post'
import SEO from '../components/SEO'

const PostTemplate = ({data : {post}}) => {
    const {title, slug } = post ;

    return (
        <>
            <SEO  title={`Posts - ${title}`} pageUrl={slug} customSEO/>
            <Post post={post} />   
        </>
    )

}

export default PostTemplate 


export const pageQueryPosts = graphql`
    query PostBySlug($slug: String!) {
        post : contentfulBlogPost(slug: {eq: $slug}) {
            title
            createdAt
            slug
            tags {
              id
              slug
              title
            }
            body {
                    childMarkdownRemark {
                        html
                    }
                  }
            }
    }
    `