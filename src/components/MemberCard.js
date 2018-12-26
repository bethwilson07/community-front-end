import React from 'react';
import {Card} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const MemberCard = () => {
  return (
    <Card.Group className="members">
     <Link to='/members/:id'><Card fluid header='Member Name' /></Link>
   </Card.Group>
  )
}

export default MemberCard;
