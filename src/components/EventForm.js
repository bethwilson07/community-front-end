import React from 'react';
import {Button, Header, Segment, Form} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const EventForm = (props) => {

  console.log(props.onChange)
  return(
    <div>

    <Segment className="form">
        <Header as='h3'>Create A New Event</Header>
        <Form onSubmit={props.onSubmit}>
          <Form.Field onChange={props.onChange}>
            <label>Event Name</label>
            <input name='formName' placeholder='Event Name' />
          </Form.Field>
          <Form.Field onChange={props.onChange}>
            <label>Location</label>
            <input name='formLocation' placeholder="Location" />
          </Form.Field>
          <Form.Field onChange={props.onChange}>
            <label>Date & Time</label>
            <input name='formTime' placeholder="date and time" />
          </Form.Field >
          <Form.TextArea label="Description" name="formDescription"placeholder="Description" onChange={props.onChange} />
          <Link to='/group/events'><Button className="create" type='submit'>Create Event</Button></Link>
        </Form>
      </Segment>

    </div>
  )
}

export default EventForm;
