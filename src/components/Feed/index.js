import React from 'react'
import styles from './index.module.css'
import { Link } from "gatsby"

const Feed = () => (
    <div className={styles.feedItem}>
        <div>
            <time className={styles.feedItemMetaTime} > AUGUST 2017 </time>
            <span className={styles.feedItemMetaDivider}></span>
            <span>
                <Link to="/" className={styles.feedItemMetaCategoryLink} >Typography</Link>
            </span>
        </div>
        <h2 className={styles.feedItemTitle}>
            <Link to="/" className={styles.feedItemTitleLink} >Humane Typography in the Digital Age</Link>    
        </h2>
        <p className={styles.feedItemDescription} >
            An Essay on Typography by Eric Gill takes the reader back to the year 1930. The year when a conflict between two worlds came to its term. The machines of the industrial world finally took over the handicrafts.
        </p>
        <Link to="/" className={styles.feedItemReadmore} >Read</Link>
    </div>
)

export default Feed