import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import { List, ListItem } from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'

class Confirm extends Component {

  continue = e => {
    e.preventDefault()
    this.props.nextStep()
  }
  back     = e => {
    e.preventDefault()
    this.props.prevStep()
  }

  render () {

    const { values: { firstName, lastName, occupation, email, city, bio } } = this.props

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Confirm user data"/>
          <List>
            <ListItem
              primaryText="First name"
              secondaryText={firstName}

            />
            <ListItem
              primaryText="Last name"
              secondaryText={lastName}

            />
            <ListItem
              primaryText="Email"
              secondaryText={email}

            />
            <ListItem
              primaryText="occupation"
              secondaryText={occupation}

            />
            <ListItem
              primaryText="City"
              secondaryText={city}

            />
            <ListItem
              primaryText="bio"
              secondaryText={bio}

            />
          </List>

          <RaisedButton
            label="Confirm & Continue"
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

export default Confirm