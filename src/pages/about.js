import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head';

const AboutPage = () => {
    return(
        <Layout>
            <Head title="About"/>
            <h1>About</h1>
            <p>Check out my portfolio on <Link target="_blank" to="https://www.mattdisalov.com">mattdisalov.com</Link></p>
            <p>Need a developer? <Link to="/contact">Contact Me</Link></p>
        </Layout>
    )
}

export default AboutPage;