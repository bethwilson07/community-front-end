import React from 'react';
import {Button, Header, Segment, Form} from 'semantic-ui-react'

const EventForm = () => {
  return(
    <div>
      <Segment>
        <Header as='h3'>Create A New Event</Header>
        <Form>
          <Form.Field>
            <label>Event Name</label>
            <input placeholder='Event Name' />
          </Form.Field>
          <Form.Field>
            <label>Location</label>
            <input placeholder="Location" />
          </Form.Field>
          <Form.Field>
            <label>Date & Time</label>
            <input placeholder="date and time" />
          </Form.Field>
          <Form.Field>
            <label>Description</label>
            <input placeholder='Description' />
          </Form.Field>
          <Button className="create" type='submit'>Create Event</Button>
        </Form>
      </Segment>
    </div>
  )
}

export default EventForm;