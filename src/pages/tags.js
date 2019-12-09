import React from 'react'
import SlideBar from '../components/SlideBar'
import Page from '../components/Page'
import { Link, useStaticQuery ,graphql } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import SEO from '../components/SEO'
import Tags from '../components/Tags'

const TagsPage = () => {

    const { tags } = useStaticQuery(queryTags) ;

    return (
        <>
            <SEO  title='Tags' customSEO/>
            <SlideBar />
            <Page title="Tags">
                <Tags tags={tags} />
            </Page>
        </>
    )
}

export default TagsPage ;

export const queryTags = graphql`
  query queryTags {
    tags :  allContentfulBlogPost {
                group(field: tags___title) {
                    fieldValue
                    totalCount
                }
            }
  }
`
