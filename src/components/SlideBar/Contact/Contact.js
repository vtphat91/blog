import React from 'react'
import styles from './Contact.module.css'
import getContactInfo from '../../../utils/getContactInfo';
import siteConfig from '../../../../config/siteConfig'

const Contact = () => (
    <div className={styles.contact}>
        <ul className={styles.contactList}>
            {
                siteConfig.contacts.map(contact => {
                    return (
                        <li className={styles.contactListItem} key={contact}>
                             <a className={styles.contactListItemLink} href={getContactInfo(contact).href} 
                             rel="noopener noreferrer" target="_blank" title={contact}>
                                <img src={getContactInfo(contact).src} className={styles.contactIcon} alt={contact}/>
                            </a>
                        </li>
                    )
                })
            }                   
        </ul>
    </div>
)

export default Contact