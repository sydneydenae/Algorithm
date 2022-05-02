// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import {intro, mainContent2, heading} from '../components/layout.module.css'


// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About">
      <div className={intro}>
      <h2 className={heading}>What is Trading Algorithm?</h2>
      Trading Algorithm is a custom algorithm that takes in data from Yahoo Finance and automatically buys and sells stocks based on current prices.
      This allows for users to buy and sell smarter! Originally created for a computer science project, Trading algorithm was developed
      by Sydney Stokes, Angel Cairo, and Paul Gabriel in April 2022.
      <Link to="/form"><br/>Click here to get started!</Link>
      </div>
      <div className={mainContent2}></div>
    </Layout>
  )
}
// Step 3: Export your component
export default AboutPage