import React from 'react';
import NavBarMenu from '../components/NavBarMenu'
import MembersAttendingContainer from '../containers/MembersAttendingContainer'

const EventDetailsPage = () => {
  return(
    <div>
      <NavBarMenu />

      Event Details Card
      
      Title
      Description
      Date and Time
      Location

      <MembersAttendingContainer />

    </div>
  )
}

export default EventDetailsPage;
