import facebook from   '../../static/icon/facebook.svg'
import skype from '../../static/icon/skype.svg'
import github from '../../static/icon/github.svg'
import gmail from '../../static/icon/gmail.svg'

const getContactInfo = (name) => {
    let contact = {
        src : '',
        href : ''
    } ;

    switch (name) {
        case 'facebook':
            contact.src = facebook;
            contact.href = 'https://www.facebook.com/vtphat91';
            break;
        case 'skype':
                contact.src = skype;
                contact.href = 'https://join.skype.com/invite/fS6xCjwXyTuT';
                break;    
        case 'github':
                contact.src = github;
                contact.href = 'https://github.com/vtphat91';
                break;
        case 'gmail':
                contact.src = gmail;
                contact.href = 'https://mail.google.com/mail/?view=cm&fs=1&to=vtphat91@gmail.com';
                break; 
        default : 
                contact.src = facebook;
                contact.href = 'https://www.facebook.com/vtphat91';
                break;
    }
    return contact;
}

export default getContactInfo;