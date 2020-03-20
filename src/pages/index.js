import React from 'react'
import { Link } from 'gatsby'
import myScript from '../myscript/myScript'

import Layout from '../components/layout'
import Head from '../components/head'

const HomePage = () => {
    return(
        <Layout>
            <Head title="Home" />
            <h1>Hello.</h1>
            <h2>I`m KejuCoklat, send message from nice beautiful town called Tokyo.</h2>
        </Layout>
    )
}

export default HomePage