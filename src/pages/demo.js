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
        After your information is processed and our team gets back to you, your trading will be carried 
        out by one of our state of the art algorithms created by Angel Cairo or Paul Gabriel.
        </div>
      <div className={mainContent3}>
      </div>
    </Layout>
  )
}

// Step 3: Export your component
export default IndexPage

