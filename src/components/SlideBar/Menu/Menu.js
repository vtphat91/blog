import React from 'react'
import styles from './Menu.module.css'
import Link from 'gatsby-link'

const Menu = ({menuList}) => (
    <nav className={styles.menu}>
        <ul className={styles.menuList}>
        {
            Object.keys(menuList).map(menu => {
                return (
                    <li className={styles.menuListItem} key={menuList[menu]}>
                        <Link to={menuList[menu]} className={styles.menuItemLink}>{menu}</Link>     
                    </li>
                )
            })
        }
        </ul>
    </nav>
)

export default Menu