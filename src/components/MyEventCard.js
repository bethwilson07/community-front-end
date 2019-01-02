import React from 'react';
import {Card} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const MyEventCard =(props) => {

  return(
    <div>
      { props.eventObj ?
          <Link to={`/events/${props.eventObj.id}`}><Card className="center">
           <Card.Content header={`${props.eventObj.name}`} />
           <Card.Content extra>{`Date & Time: ${new Date(props.eventObj.when)}`}</Card.Content>
           </Card></Link>
         : null }
      </div>
    )
  }


export default MyEventCard;
