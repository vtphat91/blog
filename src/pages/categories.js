import React from 'react'
import SlideBar from '../components/SlideBar'
import Page from '../components/Page'
import { useStaticQuery ,graphql } from 'gatsby';

import SEO from '../components/SEO'
import Categories from '../components/Categories'

const CategoriesPage = () => {

    const { categories } = useStaticQuery(queryCategories) ;

    return (
        <>
            <SEO  title='Categories' customSEO/>
            <SlideBar />
            <Page title="Categories">
                <Categories categories={categories} />
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
