import React from 'react'
import styles from './index.module.css'
import Link from 'gatsby-link'

const Menu = () => (
    <nav className={styles.menu}>
        <ul className={styles.menuList}>
            <li className={styles.menuListItem}>
                <Link to="/" className={styles.menuItemLink}>Test1</Link>     
            </li>
            <li className={styles.menuListItem}>
                <Link to="/" className={styles.menuItemLink}>Test2</Link>     
            </li>
            <li className={styles.menuListItem}>
                <Link to="/" className={styles.menuItemLink}>Test3</Link>     
            </li>
        </ul>
    </nav>
)

export default Menu