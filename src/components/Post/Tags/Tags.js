import React from 'react'
import { Link } from 'gatsby'
import styles from './index.module.css'

const Tags = ({tags}) => (
    <div className={styles.tags}>
        <ul className={styles.tagsList}>
            {tags.map(tag => (
                <li className={styles.tagsListItem} key={tag.id} >
                    <Link to={`/tag/${tag.slug}/`}  className={styles.tagListItemLink}>{tag.title} &ensp;</Link>
                </li>
            ))}
        </ul>
    </div>
)

export default Tags