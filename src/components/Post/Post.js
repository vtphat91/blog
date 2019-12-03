import React from 'react'
import styles from './Post.module.css'
import { Link } from 'gatsby'
import Content from './Content'
import Footer from './Footer'

const Post = ({post}) => (

    <>
        <Link className={styles.postHomeButton} to="/">All Articles</Link>
        <div className={styles.postContent}>
                <Content title={post.title} body={post.body} />
        </div>  
        <Footer createAt={post.createAt} tags={post.tags}/>
    </>  
)

export default Post;