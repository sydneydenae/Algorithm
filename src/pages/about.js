import * as React from "react"
import Layout from "../components/layout"

// styles
const pageStyles = {
    color: "#232129",
    padding: "96px",
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
  }
  const headingStyles = {
    marginTop: 0,
    marginBottom: 64,
    maxWidth: 320,
  }
  
  const paragraphStyles = {
    marginBottom: 48,
  }
  const codeStyles = {
    color: "#8A6534",
    padding: 4,
    backgroundColor: "#FFF4DB",
    fontSize: "1.25rem",
    borderRadius: 4,
  }

const AboutPage = () => {
    return (
        <Layout>
            <main style={pageStyles}>
                <title>About</title>
                <h1 style={headingStyles}>What is Trading Algorithm?</h1>
                <p style={paragraphStyles}>
                Trading Algorithm is a site that anyone can use to trade. Our algorithm is designed to help
                beginners know when to buy and sell assets!
                </p>
            </main>
        </Layout>
    )
  }
  
  export default AboutPage