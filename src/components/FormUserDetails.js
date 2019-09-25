import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

class FormUserDetails extends Component {

  continue = e => {
    e.preventDefault()
    this.props.nextStep()
  }

  render () {

    const { values, handleChange } = this.props

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter User details"/>
          <TextField
            hinttext="Enter your first name"
            name="first-name"
            floatingLabelText="First Name"
            onChange={handleChange}
            defaultValue={values.firstName}
          />
          <br/>
          <TextField
            hinttext="Enter your last name"
            name="last-name"
            floatingLabelText="Last Name"
            onChange={handleChange}
            defaultValue={values.lastName}
          />
          <br/>
          <TextField
            hinttext="Enter your email"
            name="email"
            floatingLabelText="email"
            onChange={handleChange}
            defaultValue={values.email}
          />
          <br/>
          <RaisedButton
            label="Continue"
            primary={true}
            styles={styles.button}
            onClick={this.continue}

          />
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}

const styles = {
  button: {
    margin: 15
  }
}

export default FormUserDetails