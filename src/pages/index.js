import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import myScript from '../../static/myScript'

import Layout from '../components/layout'
import Head from '../components/head'

const HomePage = () => {
    return(
        <Layout>
            <Head title="Home" />
            <h1>Hi.</h1>
            <h2>I`m KejuCoklat, send message from nice beautifull town called Tokyo.</h2>
        </Layout>
    )
}

export default HomePage