import React from 'react'
import { graphql } from 'gatsby'

import SlideBar from "../components/SlideBar"
import Page from '../components/Page'
import Pagination from '../components/Pagination'
import Feed from '../components/Feed'
import SEO from '../components/SEO'

const IndexTemplate = ({data, pageContext}) => {

  const {
    currentPage,
    hasNextPage,
    hasPrevPage,
    prevPagePath,
    nextPagePath
  } = pageContext;

  return (
        <>
          <SEO />
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

export default IndexTemplate

export const queryIndexTemplate = graphql`
    query queryIndexTemplate($postsLimit: Int!, $postsOffset: Int!) {
        posts :  allContentfulBlogPost(limit: $postsLimit, skip: $postsOffset) {
                edges {
                    node {
                      id
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