import React from 'react';
import MemberDetailsPage from '../pages/MemberDetailsPage'
import {Header} from 'semantic-ui-react'

const MembersAttendingContainer = () => {
  return(
    <div>
      <Header as='h4'>Who's Going?</Header>
      <MemberDetailsPage />

    </div>
  )
}

export default MembersAttendingContainer;
