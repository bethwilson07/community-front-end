import React from 'react';
import EventCard from '../components/EventCard'
import {Header} from 'semantic-ui-react'
import {Link} from 'react-router-dom'


const MemberEventsContainer = () => {
  return(
    <div>
      <Header as='h4'>My Events</Header>
      <EventCard />

      <Link to='/events/new'>Create New Event</Link>
    </div>
  )
}

export default MemberEventsContainer;
