import React from 'react';
import {Card} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const EventCard = () => {
  return(
    <Link to="/events/1"><Card className="center">
     <Card.Content header='Event Title' />
     <Card.Content description='description' />
     <Card.Content extra = '4 Friends' />
   </Card></Link>
  )
}

export default EventCard;
