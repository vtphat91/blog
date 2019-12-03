import React from "react"
import avatar from "../../../../images/Author.jpg"
import { withPrefix, Link } from "gatsby"

import styles from './Author.module.css'


const Author = () => (
    <div>
        <Link to="/">
      
            <img className={styles.authorPhoto} src={withPrefix(avatar)} width="75" height="75"/>
            <h1 className={styles.authorTitle} >
                <Link to="/" className={styles.authorTitleLink} >PhatVt</Link>
            </h1>
        </Link>
        <p className={styles.authorSubtitle}> Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu.</p>
    </div>
)

export default Author ;