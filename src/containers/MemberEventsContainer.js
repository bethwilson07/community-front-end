import React from 'react';
import EventCard from '../components/EventCard'
import {Header, Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'


const MemberEventsContainer = (props) => {
    return(
      <div>
        <Header as='h4'>My Events</Header>
        { props.member ?
          props.events.filter(ev => ev.member_id === props.member.id).map(ev => <EventCard key={ev.id} eventObj={ev.event}/>)
          : null
        }
        <Link to='/group/events/new'><Button className="create">Create New Event</Button></Link>
      </div>
    )
  }

export default MemberEventsContainer;
