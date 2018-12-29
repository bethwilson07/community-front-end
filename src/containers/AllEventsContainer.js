import React from 'react';
import EventCard from '../components/EventCard'
import {Header, Segment} from 'semantic-ui-react'

const AllEventsContainer = (props) => {
  console.log(props)
  return(
      <div>
        <Header as='h4'>Group Events</Header>
        <Segment className="belt">
          {props.events.map(ev => <EventCard key={ev.id} eventObj={ev}/>)}
        </Segment>

      </div>

  )
}

export default AllEventsContainer;
