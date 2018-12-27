import React from 'react';
import EventCard from '../components/EventCard'
import {Header, Segment} from 'semantic-ui-react'

const AllEventsContainer = () => {
  return(
    <div>
      <Header as='h4'>Group Events</Header>
        <Segment className="belt">
          <EventCard />
          <EventCard />
        </Segment>
    </div>
  )
}

export default AllEventsContainer;
