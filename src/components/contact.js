import React from 'react';
import "../styles/contact.css";
function Contact() {
    return (
        <div className={'contact'}>

            <form class="form">
                <h2>Contact Me</h2>
                <p type="Name:"><input placeholder="Your name"></input></p>
                <p type="Email:"><input placeholder="Email here"></input></p>
                <p type="Message:"><input placeholder="Your message here."></input></p>
                <button>Send Message</button>
            </form>

        </div>
    )
}

export default Contact;