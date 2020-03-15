import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'

const ContactPage = () => {
    return(
        <Layout>
            <Head title="Contact" />
            <h1>Contact</h1>
            <p>You can contact me if you around Tokyo.</p>
            <p>Or you can click this Link to go to my <a target="__blank" href="https://twitter.com/faizal_abadi">Twitter</a></p>
        </Layout>
    )
}

export default ContactPage