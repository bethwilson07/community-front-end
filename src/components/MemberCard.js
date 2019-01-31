import React from 'react';
import {Card} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const MemberCard = (props) => {
  return (
    <Card.Group className="members">
      {props ? <Link to={`/members/${props.member.id}`}><Card fluid header={`${props.member.name}`} /></Link> : null }
    </Card.Group>
  )
}

export default MemberCard;
