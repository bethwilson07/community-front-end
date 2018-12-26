import React from 'react';
import NavBarMenu from '../components/NavBarMenu'
import MembersAttendingContainer from '../containers/MembersAttendingContainer'
import {Header, Segment} from 'semantic-ui-react'

const EventDetailsPage = () => {
  return(
    <div>
      <NavBarMenu />

      <Segment >
        <Header as='h3'>Event Details</Header>
      </Segment>

      <Segment>
      Description
      </Segment>

      <Segment >
        Date
        Time
      </Segment>
      <Segment >
        Location
      </Segment>

      <Segment className="attending">
        <MembersAttendingContainer />
      </Segment>

    </div>
  )
}

export default EventDetailsPage;
