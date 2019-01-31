import React from 'react';
import EventCard from '../components/EventCard'
import {Header, Segment} from 'semantic-ui-react'

const AllEventsContainer = (props) => {
  return(
      <div>
        <Header as='h4'>Group Events</Header>
        <Segment className="belt">
          { props.events ?
            props.events.map(ev => <EventCard key={ev.id} eventObj={ev} />)
          : null}
        </Segment>

      </div>

  )
}

export default AllEventsContainer;
