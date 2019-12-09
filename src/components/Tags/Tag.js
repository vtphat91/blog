import React from 'react'
import styles from './Tag.module.css'
import { Link} from 'gatsby';
import kebabCase from 'lodash/kebabCase';

const Tag = ({tags}) => (
    <ul className={styles.TagList}>
        {tags.group.map((tag) => (
            <li key={tag.fieldValue} className={styles.TagListItem}>
                <Link to={`/tag/${kebabCase(tag.fieldValue)}/`} className={styles.TagItemLink}>
                    {tag.fieldValue} ({tag.totalCount})
                </Link>
            </li>
        ))}
    </ul>
)

export default Tag;