import React from 'react'
import styles from './Page.module.css'

const Page = ({children, title}) => (
    
    <div className={styles.page}>
        
        <div className={styles.pageInner}>
            { title && <h1 className={styles.pageTitle}>{title}</h1>}
            <div className={styles.pageBody}>
                  {children}
            </div>
        </div>
    </div>
)

export default Page
