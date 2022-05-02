// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import {intro, heading, mainContent3} from '../components/layout.module.css'


// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <div className={intro}>
      <h2 className={heading}>Demo</h2>
        Our custom trading algorithm makes it easy for the average person to know when to buy and sell their stocks! Work with us and
        make easy money from the comfort of your own home.
        <Link to="/about"><br/>Click here to learn more!</Link>
        </div>
      <div className={mainContent3}>
      </div>
    </Layout>
  )
}

// Step 3: Export your component
export default IndexPage

