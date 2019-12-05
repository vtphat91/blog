import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import author from '../../../images/Author.jpg'
import siteConfig from '../../../config/siteConfig'

const SEO = ({ description, title, pageUrl, customSEO }) => {
  
    let siteDescription ;
    let siteTitle ;
    let sitePageUrl ;
    let image = author ;

    if(customSEO){
        sitePageUrl = siteConfig.siteUrl;
        siteDescription = siteConfig.siteDescription;
        siteTitle = siteConfig.siteTitle;
    }else{
       siteDescription = description;
       siteTitle = title;
       sitePageUrl = pageUrl;
    }

  return (
    <Helmet>
    {/* General tags */}
    <meta name="image" content={image} />
    <meta name="description" content={siteDescription} />


    {/* OpenGraph tags */}
    <meta property="og:title" content={siteTitle} />
    {!customSEO ? <meta property="og:type" content="article" /> : null}
    <meta property="og:url" content={sitePageUrl} />
    <meta property="og:image" content={image} />
    <meta property="og:description" content={siteDescription} />

  </Helmet>
  )
}

SEO.defaultProps = {
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string.isRequired,
}

export default SEO