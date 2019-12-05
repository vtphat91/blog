import React from 'react'
import styles from './SlideBar.module.css'

import Author from './Author'
import Menu from './Menu'
import Contact from './Contact'

const siteConfig = require('../../../config/siteConfig');

const {author, menu} = siteConfig;

const SlideBar = () => (
    <div className={styles.slidebar}>
        <div className={styles.slidebarInner}>
            <Author author={author}/>
            <Menu menuList={menu} />
            <Contact />
        </div>
    </div>
)

export default SlideBar