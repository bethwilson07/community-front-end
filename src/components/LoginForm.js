import React from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const LoginForm = () => {
  return(
     <div className='login-form'>
       <style>{`body > div, body > div > div, body > div > div > div.login-form { height: 100%; }`}</style>
       <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450}}>
          <Header as='h2' color='teal' textAlign='center'>Log-in to your group</Header>
          <Image src="https://thoughtcatalog.files.wordpress.com/2016/07/howimet.jpg?w=1140&h=855" />
          <Form size='large'>
            <Segment>
              <Form.Input fluid icon='user' iconPosition='left' placeholder="username" />
              <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' type='password' />
              <Form.Input fluid icon='lock' iconPosition='left' placeholder='Group Password' type='password' />
              <Link to="/group/events"><Button color='teal' fluid size='large'> Login </Button></Link>
              <Message>
                New to us? Sign Up
              </Message>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    </div>
  )
}

export default LoginForm;
