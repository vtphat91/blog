import React from 'react'
import { graphql, Link } from 'gatsby'
import Post from '../components/Post'

const PostTemplate = ({data : {post}}) => {

    return (
        <>
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