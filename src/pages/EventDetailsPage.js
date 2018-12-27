import React from 'react';
import NavBarMenu from '../components/NavBarMenu'
import MembersAttendingContainer from '../containers/MembersAttendingContainer'
import {Header, Segment, Form, Checkbox, Button, Grid} from 'semantic-ui-react'

const EventDetailsPage = () => {
  return(
    <div>
      <NavBarMenu />

      <Segment clearing className="details">
        <Header as='h2' floated='right'>
          <Form>
            <Grid>
              <Grid.Row relaxed container columns={4}>
            <Form.Field>
                <Checkbox label='Going ' />
            </Form.Field>
            <Form.Field>
                <Checkbox label='Maybe ' />
            </Form.Field>
            <Form.Field>
                <Checkbox label='Not Going ' />
            </Form.Field>
            <Button size="mini" compact type='submit'>Save</Button>
              </Grid.Row>
            </Grid>
          </Form>
        </Header>
        <Header as='h2' floated='left'>
          Event Details
        </Header>
      </Segment>

      <Segment className="details">
      Description
      </Segment>

      <Segment className="details">
        Date
        Time
      </Segment>
      <Segment className="details">
        Location
      </Segment>

      <Segment className="attending">
        <MembersAttendingContainer />
      </Segment>

    </div>
  )
}

export default EventDetailsPage;
