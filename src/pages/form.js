// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import {form, formBlocks, inputBox} from '../components/layout.module.css'


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
            <button type="submit" >Submit</button>
        </form>
        </Layout>
    )
    }
}
