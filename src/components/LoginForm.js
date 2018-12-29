import React from 'react';
import { Button, Form, Grid, Header, Image, Segment } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

export default class LoginForm extends React.Component {

  state = {
    username: null,
    password: null
  }

  handleUserChange = (event) => {
    this.setState ({
      username: event.target.value
    })
  }

  handlePasswordChange = (event) => {
    this.setState ({
      password: event.target.value
    })
  }

  render() {
    return(
      <div className="App-header">
       <div className='login-form'>
         <style>{`body > div, body > div > div, body > div > div > div.login-form { height: 100%; }`}</style>
         <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450}}>
            <Header as='h2' color='teal' textAlign='center'>Log-in to your group</Header>
            <Image src="https://thoughtcatalog.files.wordpress.com/2016/07/howimet.jpg?w=1140&h=855" />

            <Form size='large' >
              <Segment>
                <Form.Input fluid icon='user' iconPosition='left' placeholder="Email" type='text' onChange={this.handleUserChange}/>
                <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' type='password' onChange={this.handlePasswordChange}/>
                <Form.Input fluid icon='lock' iconPosition='left' placeholder='Group Password' type='password' />
                <Link to="/group/events"><Button onClick={()=> this.props.onClick(this.state.username)}    color='teal' type='submit' fluid size='large'> Login </Button></Link>
              </Segment>
            </Form>

          </Grid.Column>
        </Grid>
      </div>
    </div>
    )
  }
}
