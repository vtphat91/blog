const locales = require(`../config/i18n`)
const {
  localizedSlug,
  findKey,
  removeTrailingSlash,
} = require(`../src/utils/gatsby-node-helpers`)


const onCreatePage = ({ page, actions }) => {
    const { createPage, deletePage } = actions
    // First delete the incoming page that was automatically created by Gatsby
    // So everything in src/pages/
    deletePage(page)
    // Grab the keys ('en' & 'de') of locales and map over them
    Object.keys(locales).map(lang => {
      // Use the values defined in "locales" to construct the path
      const localizedPath = locales[lang].default
        ? page.path
        : `${locales[lang].path}${page.path}`
      
      return createPage({
        // Pass on everything from the original page
       
        ...page,
        // Since page.path returns with a trailing slash (e.g. "/de/")
        // We want to remove that
        path: removeTrailingSlash(localizedPath),
        // Pass in the locale as context to every page
        // This context also gets passed to the src/components/layout file
        // This should ensure that the locale is available on every page
        context: {
          ...page.context,
          locale: locales[lang].locale, //get locale en-US, vi-VN
          dateFormat: locales[lang].dateFormat,
          urlLang: locales[lang].path   //url language : en/vi /
        },
      })
    })
  }

  module.exports = onCreatePage;