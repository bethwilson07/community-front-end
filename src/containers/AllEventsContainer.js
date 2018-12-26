import React from 'react';
import EventCard from '../components/EventCard'
import {Header} from 'semantic-ui-react'

const AllEventsContainer = () => {
  return(
    <div>
      <Header as='h4'>Group Events</Header>
      <EventCard />

    </div>
  )
}

export default AllEventsContainer;
