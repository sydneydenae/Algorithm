// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import {intro, mainContent} from '../components/layout.module.css'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <div className={intro}> Our custom trading algorithm makes it easy for the average person to know when to buy and sell their stocks!</div>
      <div className={mainContent}>Main Content</div>
    </Layout>
  )
}

// Step 3: Export your component
export default IndexPage