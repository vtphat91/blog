import React from 'react'
import styles from './Feed.module.css'
import moment from 'moment';
import { Link } from "gatsby"

const Feed = ({posts}) => (
    <>
        {posts && posts.edges.map(post=>(
            <div className={styles.feedItem} key={post.node.id}>
                <div >
                    <time className={styles.feedItemMetaTime} dateTime={moment(post.node.createAt).format('MMMM D, YYYY')}>{moment(post.node.createAt).format('MMMM D, YYYY')}</time>
                    <span className={styles.feedItemMetaDivider}></span>
                    <span>
                        <Link to={`/category/${post.node.category.slug}/`} className={styles.feedItemMetaCategoryLink} >{post.node.category.title} &ensp;</Link>
                    </span>
                </div>
                <h2 className={styles.feedItemTitle}>
                    <Link to={`posts/${post.node.slug}`} className={styles.feedItemTitleLink} >{post.node.title}</Link>    
                </h2>
                <p className={styles.feedItemDescription} >
                    {post.node.description.childMarkdownRemark.rawMarkdownBody}
                </p>
                <Link to={`posts/${post.node.slug}`} className={styles.feedItemReadmore} >Read</Link>
            </div>
        ))} 
    </>
)

export default Feed