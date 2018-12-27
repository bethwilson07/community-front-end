import React from 'react';
import EventCard from '../components/EventCard'
import {Header, Segment} from 'semantic-ui-react'

const AllEventsContainer = (props) => {
  console.log(props.events)
  return(
    <div>
      <Header as='h4'>Group Events</Header>
        <Segment className="belt">
          {props.events.map(event => <EventCard key={event.id} event={event} /> )}
        </Segment>
    </div>
  )
}

export default AllEventsContainer;
