import React from 'react'
import { graphql } from 'gatsby'

import SlideBar from "../components/SlideBar"
import Page from '../components/Page'
import Pagination from '../components/Pagination'
import Feed from '../components/Feed'


const CategoryTemplate = ({data, pageContext}) => {

    const {
      category,
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

export default CategoryTemplate


export const queryCategoryTemplate = graphql`
query queryCategoryTemplate($category: String!, $postsLimit: Int!, $postsOffset: Int!) {
    posts :  allContentfulBlogPost( limit: $postsLimit,
                                    skip: $postsOffset,
                                    filter: {category: {title: {eq: $category}}}) {
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