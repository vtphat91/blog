import React from 'react'

import SlideBar from '../components/SlideBar'
import Page from '../components/Page'
import { Link, useStaticQuery ,graphql } from 'gatsby';
import kebabCase from 'lodash/kebabCase';

const TagsPage = () => {

    const { tags } = useStaticQuery(queryTags) ;
    console.log(tags);
    return (
        <>
            <SlideBar />
            <Page title="Tags">
                <ul>
                    {tags.group.map((tag) => (
                        <li key={tag.fieldValue}>
                        <Link to={`/tag/${kebabCase(tag.fieldValue)}/`}>
                            {tag.fieldValue} ({tag.totalCount})
                        </Link>
                        </li>
                    ))}
                </ul>
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
