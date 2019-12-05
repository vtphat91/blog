import React from "react"
import avatar from "../../../../images/Author.jpg"
import { withPrefix, Link } from "gatsby"

import styles from './Author.module.css'


const Author = ({author}) => (
    <div>
        <Link to="/">
            <img className={styles.authorPhoto} src={withPrefix(avatar)} width="75" height="75"/>
        </Link>
        <h1 className={styles.authorTitle} >
            <Link to="/" className={styles.authorTitleLink} >{author.authorTitle}</Link>
        </h1>
        <p className={styles.authorSubtitle}>{author.authorSubtitle}</p>
    </div>
)

export default Author ;