import React from 'react';
import {Card} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import moment from 'moment'

const EventCard =(props) => {
  return(
    <div>
      { props.eventObj ?
          <Link to={`/events/${props.eventObj.id}`}><Card className="center">
           <Card.Content header={`${props.eventObj.name}`} />
           <Card.Content className="limit" description={props.eventObj.description}/>
           Location: {props.eventObj.location}
           <Card.Content extra>{`${moment(props.eventObj.when).format("MMMM Do, YYYY, h:mm a")}`}</Card.Content>
          </Card></Link>
       : null
     }
    </div>
  )
}


export default EventCard;
// {`Date:${props.eventObj.when.split('T')[0]}
//   Time:${props.eventObj.when.split('T')[1]}`}
//
