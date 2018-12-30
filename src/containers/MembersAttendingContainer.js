import React from 'react';
import {Header, Segment} from 'semantic-ui-react'
import MemberCard from '../components/MemberCard'

const MembersAttendingContainer = (props) => {
  console.log(props)
  return(
    <div>
      <Header as='h4'>Who's Going?</Header>
      <Segment className="members" >
        {props.members ? props.members.map(m => <MemberCard key={m.id} member={m}/>) : null}
      </Segment>
    </div>
  )
}

export default MembersAttendingContainer;
