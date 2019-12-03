import React from 'react'
import moment from 'moment';
import styles from './Footer.module.css'
import Tags from '../Tags'

const Footer = ({tags, createAt}) => (
    <div className={styles.postFooter}>
        <div>
            <p className={styles.postMetaDate}>Published {moment(createAt).format('D MMM YYYY')}</p>
        </div>
        <Tags tags={tags} />
    </div>
)

export default Footer;