import React from 'react';
import {Card} from 'semantic-ui-react'

const EventCard = () => {
  return(
    <Card>
     <Card.Content header='Event Title' />
     <Card.Content description='description' />
     <Card.Content extra = '4 Friends' />
   </Card>
  )
}

export default EventCard;
