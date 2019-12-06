import React from 'react'
import SlideBar from '../components/SlideBar'
import SEO from '../components/SEO'
import styles from './404.module.css'
import {Link} from 'gatsby'

const NotFoundPage = () => (
    <>
        <SEO  title='Categories' customSEO/>
        <SlideBar />
            <div id="notfound">
                <div className={styles.notfound}>
                    <div className={styles.notfound404}>
                        <h1>Oops!</h1>
                    </div>
                    <h2>404 - Page not found</h2>
                    <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                    <Link to="/" >Go To Homepage</Link>
                </div>
            </div>
    </>
)

export default NotFoundPage ;