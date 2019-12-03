import React from 'react'
import styles from './Pagination.module.css'
import { Link } from 'gatsby'


const Pagination = ({
                    prevPagePath,
                    nextPagePath,
                    hasNextPage,
                    hasPrevPage
                    }) => {
    return (
        <div className={styles.pagination}>
            <div className={styles.paginationPrev}>
                <Link to={prevPagePath} className={hasPrevPage ? styles.paginationPrevLink : styles.paginationPrevLinkDisable}>← PREV</Link>
            </div>
            <div className={styles.paginationNext}>
                <Link to={nextPagePath} className={hasNextPage ? styles.paginationNextLink : styles.paginationNextLinkDisable}>→ NEXT</Link>   
            </div>
        </div>
      )
 }

export default Pagination