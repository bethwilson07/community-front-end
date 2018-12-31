import React from 'react';
import {Card} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const MyEventCard =(props) => {
  console.log(props.status)
  return(
    <div>
      { props.eventObj ?
          <Link to={`/events/${props.eventObj.id}`}><Card className="center">
           <Card.Content header={`${props.eventObj.name}`} />
           <Card.Content extra>{`Date:${props.eventObj.when.split('T')[0]}
              Time:${props.eventObj.when.split('T')[1]}`}</Card.Content>
           </Card></Link>
         : null }
      </div>
    )
  }


  export default MyEventCard;
