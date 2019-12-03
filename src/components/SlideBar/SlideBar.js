import React from 'react'
import styles from './SlideBar.module.css'

import Author from './Author'
import Menu from './Menu'
import Contact from './Contact'

const SlideBar = () => (
    <div className={styles.slidebar}>
        <div className={styles.slidebarInner}>
            <Author />
            <Menu />
            <Contact />
        </div>
    </div>
)

export default SlideBar