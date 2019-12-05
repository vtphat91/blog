import React, { useState } from 'react'
import Container from '../Container'
import styles from './Layout.module.css'
import SEO from '../../components/SEO'


const LocaleContext = React.createContext()

const Layout = ({ children, pageContext: { locale , urlLang}, path }) => {

  return (
    <LocaleContext.Provider value={{ locale, urlLang }}>
      <Container>
        <div className={styles.layout}>
          {children}
        </div>
      </Container>
    </LocaleContext.Provider>
  )
}

export { Layout, LocaleContext } 

