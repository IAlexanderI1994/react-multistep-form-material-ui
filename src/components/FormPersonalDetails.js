import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

class FormPersonalDetails extends Component {

  continue = e => {
    e.preventDefault()
    this.props.nextStep()
  }
  back = e => {
    e.preventDefault()
    this.props.prevStep()
  }

  render () {

    const { values, handleChange } = this.props

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter Personal details"/>
          <TextField
            hinttext="Occupation"
            name="occupation"
            floatingLabelText="Occupation"
            onChange={handleChange}
            defaultValue={values.occupation}
          />
          <br/>
          <TextField
            hinttext="Enter your city"
            name="city"
            floatingLabelText="City"
            onChange={handleChange}
            defaultValue={values.city}
          />
          <br/>
          <TextField
            hinttext="Enter your bio"
            name="bio"
            floatingLabelText="bio"
            onChange={handleChange}
            defaultValue={values.bio}
          />
          <br/>
          <RaisedButton
            label="Continue"
            primary={true}
            styles={styles.button}
            onClick={this.continue}

          />
            <RaisedButton
            label="Back"
            primary={false}
            styles={styles.button}
            onClick={this.back}

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

export default FormPersonalDetails