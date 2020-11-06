import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const AboutPage = () => {
    return(
        <Layout>
            <h1>About</h1>
            <p>This is where the bio will show up later on when I add it.</p>
            <p>Need a developer? <Link to="/contact">Contact Me</Link></p>
        </Layout>
    )
}

export default AboutPage;