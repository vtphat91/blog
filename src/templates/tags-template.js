import React from 'react'
import { graphql } from 'gatsby'

import SlideBar from "../components/SlideBar"
import Page from '../components/Page'
import Pagination from '../components/Pagination'
import Feed from '../components/Feed'


const TagsTemplate = ({data, pageContext}) => {

    const {
      tag,
      hasNextPage,
      hasPrevPage,
      prevPagePath,
      nextPagePath
    } = pageContext;
  
    return (
          <>
            <SlideBar />
            <Page posts={data.posts} >
              <Feed posts={data.posts}/>
              <Pagination   prevPagePath={prevPagePath}
                            nextPagePath={nextPagePath}
                            hasPrevPage={hasPrevPage}
                            hasNextPage={hasNextPage}
              />
            </Page>
          </>
      )
  }

export default TagsTemplate


export const queryTagsTemplate = graphql`
query queryTagsTemplate($tag: String!, $postsLimit: Int!, $postsOffset: Int!) {
    posts :  allContentfulBlogPost( limit: $postsLimit,
                                    skip: $postsOffset,
                                    filter: {tags: {elemMatch: {title: {eq: $tag}}}}) {
            edges {
                node {
                  title
                  createdAt
                  slug
                  category {
                    slug
                    title
                  }
                  description {
                    childMarkdownRemark {
                      rawMarkdownBody
                    }
                  }
                }
            }
    }
}
`