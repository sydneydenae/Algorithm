// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import ReactPlayer from 'react-player'
import { Link } from 'gatsby'
import {intro, mainContent3, heading, video} from '../components/layout.module.css'


// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="Demo">
      <div className={intro}>
      <h2 className={heading}>Demo Algorithms</h2>
      After your information is processed and our team gets back to you, your trading will be carried 
      out by one of our state of the art algorithms created by Angel Cairo or Paul Gabriel.
      </div>
      <div className={mainContent3}>
      <ReactPlayer className = {video} url="https://www.youtube.com/watch?v=Mbh90QNGKE8"/>
      <Link to="https://replit.com/join/mdeiaochhm-alphabravochar3">Angel Web Scrapper Source Code</Link>
      <Link to="https://replit.com/join/aradqalhbj-alphabravochar3">  &nbsp; and Angel Trading Bot Source Code</Link>
      <ReactPlayer className = {video} url="https://www.youtube.com/watch?v=6lQjgpzEu7A"/>
      <Link to="https://github.com/MagentaPuppet/trading_bot.git">Paul Trading Bot Source Code</Link>

      
      </div>
    </Layout>
  )
}
// Step 3: Export your component
export default AboutPage
