import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head';

const ContactPage = () => {
    return(
        <Layout>
            <Head title="Contact"/>
            <h1>Contact</h1>
            <p>Here's how you can get in touch with me.</p>
            <p><a href="mailto: mattdisalov@gmail.com" target="_blank" rel="noreferrer">E-mail me</a></p>
            <p><a href="https://www.linkedin.com/in/mattdisalov/" target="_blank" rel="noreferrer">Linkedin</a></p>
            <p><a href="https://github.com/mattdisalov" target="_blank" rel="noreferrer">Github</a></p>
            <p><a href="https://www.mattdisalov.com" target="_blank" rel="noreferrer">Portfolio</a></p>
        </Layout>
    )
}

export default ContactPage;