// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import {form, intro, heading, formBlocks, inputBox, submitButton} from '../components/layout.module.css'


// Step 2: Define your component
export default class FormPage extends React.Component{
    state = {
        firstName: "",
        lastName: "",
    }

    handleInputChange = event => {
        const target = event.target
        const value = target.value
        const name = target.name
        this.setState({
          [name]: value,
        })
      }

    handleSubmit = event => {
        event.preventDefault()
        alert(`Thank you ${this.state.firstName} ${this.state.lastName} for submitting!`)
    }
      
    render () {
    return (
        <Layout pageTitle="Form">
        <div className={intro}>
        <h2 className={heading}>Get started today!</h2>
        Enter your information to recieve pricing information and further details regarding 
        your trading journey.</div>
        <form onSubmit={this.handleSubmit} className={form}>
            <label className={formBlocks}>
            First Name:&nbsp;
            <input className={inputBox}
                type="text"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleInputChange}
            />
            </label>
            <label className={formBlocks}>
            Last Name:&nbsp;
            <input className={inputBox}
                type="text"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleInputChange}
            />
            </label>
            <label className={formBlocks}>
            E-mail:&nbsp;
            <input className={inputBox}
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.handleInputChange}
            />
            </label>
            <label></label>
            <button type="submit" className={submitButton} >Submit</button>
        </form>
        </Layout>
    )
    }
}
