import React from 'react';
import "../styles/footer.css";
function Footer() {
    return (

        <div className={'footer'}>
            <div clasName={'links'}><a clasName={'links'} href={'https://www.linkedin.com/in/david-kovalchuk-a9239916b/'}>LinkedIn</a></div>
            <div><a clasName={'links'} href={'https://www.github.com/itsDavidK'}>Github</a></div>
            <div><a href="mailto:davidakovalchuk@gmail.com">davidakovalchuk@gmail.com</a></div>
        </div>
    )
}

export default Footer;