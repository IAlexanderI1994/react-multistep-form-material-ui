import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails'
import FormPersonalDetails from './FormPersonalDetails'

class UserForm extends Component {

  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    occupation: '',
    city: '',
    bio: ''
  }

  // Proceed to next step
  nextStep = () => {

    const { step } = this.state
    this.setState({
      step: step + 1
    })

  }

  prevStep = () => {

    const { step } = this.state
    this.setState({
      step: step > 1 ? step - 1 : 1
    })

  }

  handleChange = ({ target }) => this.setState({ [target.name]: target.value })

  render () {

    const { step, ...values } = this.state

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}

          />
        )
      case 2:
        return <h1> Step 2</h1>
      case 3:
        return <h1> Step 3</h1>
      case 4:
        return <h1> Step 4</h1>

    }

  }
}

export default UserForm