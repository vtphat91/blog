import React from 'react'
import styles from './Content.module.css'

const Content = ({title, body}) => (
    <>
        <h1 className={styles.postContentTitle}>{title}</h1>
        <div className={styles.postContentBody}
            dangerouslySetInnerHTML={{
            __html: body.childMarkdownRemark.html,
            }}/>
    </>
)

export default Content