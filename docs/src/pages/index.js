import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

export default () => (
  <Layout>
    <div>
      <h1>Home</h1>
      <p>
        Check out our <Link to='guides'>guides</Link> or <Link to='api'>API</Link>.
      </p>
    </div>
  </Layout>
)
