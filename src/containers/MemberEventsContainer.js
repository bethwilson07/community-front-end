import React from 'react';
import MyEventCard from '../components/MyEventCard'
import {Header, Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'


const MemberEventsContainer = (props) => {
    console.log(props.events)
    return(
      <div>
        <Header as='h4'>My Events</Header>
        <div className="my-events">
        { props.member ?
          props.events.filter(ev => ev.member_id === props.member.id).map(ev =>
            <MyEventCard key={ev.id} eventObj={ev.event} status={ev.status}/>)
          : null
        }
        </div>
        <Link to='/group/events/new'><Button className="create">Create New Event</Button></Link>
      </div>
    )
  }

export default MemberEventsContainer;
