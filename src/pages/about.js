// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import {intro, heading} from '../components/layout.module.css'


// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <div className={intro}>
      <h2 className={heading}>What is Trading Algorithm?</h2>
      Trading Algorithm is the site component intended to house an algorithm that allows users to automatically buy 
      and sell stocks based on current prices. Originally created for a computer science project, Trading algorithm was created and developed
      by Sydney Stokes, Angel Cairo, and Paul Gabriel in April 2022.
      </div>
    </Layout>
  )
}
// Step 3: Export your component
export default AboutPage