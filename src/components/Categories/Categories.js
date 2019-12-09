import React from 'react'
import styles from './Categories.module.css'
import { Link} from 'gatsby';
import kebabCase from 'lodash/kebabCase';

const Categories = ({categories}) => (
    <ul className={styles.categoriesList}>
        {categories.group.map((category) => (
            <li key={category.fieldValue} className={styles.categoriesListItem}>
                <Link to={`/category/${kebabCase(category.fieldValue)}/`}  className={styles.categoriesItemLink}>
                    {category.fieldValue} ({category.totalCount})
                </Link>
            </li>
        ))}
    </ul>
)

export default Categories;