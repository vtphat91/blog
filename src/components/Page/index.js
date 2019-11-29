import React from 'react'
import styles from './index.module.css'
import Feed from '../Feed'

const Page = () => (
    <div className={styles.page}>
        <div className={styles.pageInner}>
            <div className={styles.pageBody}>
                <Feed />
                <Feed />
                <Feed />
                <Feed />
                <Feed />
            </div>
        </div>
    </div>
)

export default Page
