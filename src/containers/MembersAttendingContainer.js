import React from 'react';
import {Header, Segment} from 'semantic-ui-react'
import MemberCard from '../components/MemberCard'

const MembersAttendingContainer = () => {
  return(
    <div>
      <Header as='h4'>Who's Going?</Header>
      <Segment className="members" >
        <MemberCard />
        <MemberCard />
      </Segment>
    </div>
  )
}

export default MembersAttendingContainer;
