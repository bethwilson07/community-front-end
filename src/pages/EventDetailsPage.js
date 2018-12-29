import React from 'react';
import MembersAttendingContainer from '../containers/MembersAttendingContainer'
import {Header, Segment, Form, Checkbox, Button, Grid} from 'semantic-ui-react'

const EventDetailsPage = (props) => {
  console.log(props.eventObj)

  return(
    <div>

      <Segment clearing className="details">
        <Header as='h2' floated='right'>
          <Form>
            <Grid>
              <Grid.Row columns={4}>
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

      { props.eventObj ?
        <React.Fragment>
          <Segment className="details">
          <h5>What:</h5>
          {props.eventObj.description}
          </Segment>

          <Segment className="details">
            <h5>Where:</h5>
            {props.eventObj.location}
          </Segment>

          <Segment className="details">
            <h5>When:</h5>
            Date: {Date.parse(props.eventObj.when, "%m, %d, %Y")}
            Time: {props.eventObj.when}
          </Segment>

          <Segment className="attending">
            <MembersAttendingContainer />
          </Segment>
        </React.Fragment>
        : null
      }
    </div>
  )
}

export default EventDetailsPage;
