import React from 'react';
import Layout from '../components/layout';

const ContactPage = () => {
    return(
        <Layout>
            <h1>Contact</h1>
            <p>Here's how you can get in touch with me.</p>
            <p><a href="mailto: mattdisalov@gmail.com" target="_blank" rel="noreferrer">E-mail me</a></p>
            <p><a href="https://www.linkedin.com/in/matt-disalov-107963197/" target="_blank" rel="noreferrer">Linkedin</a></p>
            <p><a href="https://github.com/mattdisalov" target="_blank" rel="noreferrer">Github</a></p>
        </Layout>
    )
}

export default ContactPage;