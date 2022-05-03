// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import ReactPlayer from 'react-player'
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
      <ReactPlayer className = {video} url="https://www.youtube.com/watch?v=6lQjgpzEu7A"/>
      </div>
    </Layout>
  )
}
// Step 3: Export your component
export default AboutPage

// // Step 1: Import React
// import * as React from 'react'
// import Layout from '../components/layout'
// import ReactPlayer from 'react-player'
// import {intro, heading, mainContent3} from '../components/layout.module.css'


// // Step 2: Define your component
// const IndexPage = () => {
//   return (
//     <Layout pageTitle="Home Page">
//       <div className={intro}>
//       <h2 className={heading}>Demo</h2>
//         After your information is processed and our team gets back to you, your trading will be carried 
//         out by one of our state of the art algorithms created by Angel Cairo or Paul Gabriel.
//         </div>
//       <div className={mainContent3}>
//       <ReactPlayer url="https://www.youtube.com/watch?v=Mbh90QNGKE8"/>
//       <ReactPlayer url="https://vimeo.com/705500732/969c38f9e5"/>
//       </div>
//     </Layout>
//   )
// }

// // Step 3: Export your component
// export default IndexPage

