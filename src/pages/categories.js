import React from 'react'

import SlideBar from '../components/SlideBar'
import Page from '../components/Page'
import { Link, useStaticQuery ,graphql } from 'gatsby';
import kebabCase from 'lodash/kebabCase';

const CategoriesPage = () => {

    const { categories } = useStaticQuery(queryCategories) ;
    return (
        <>
            <SlideBar />
            <Page title="Categories">
                <ul>
                    {categories.group.map((category) => (
                        <li key={category.fieldValue}>
                        <Link to={`/category/${kebabCase(category.fieldValue)}/`}>
                            {category.fieldValue} ({category.totalCount})
                        </Link>
                        </li>
                    ))}
                </ul>
            </Page>
        </>
    )
}

export default CategoriesPage ;

export const queryCategories = graphql`
  query queryCategories {
    categories :  allContentfulBlogPost {
            group(field: category___title) {
                fieldValue
                totalCount
            }
            }
  }
`
