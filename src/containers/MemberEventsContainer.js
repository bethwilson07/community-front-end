import React from 'react';
import MyEventCard from '../components/MyEventCard'
import {Header, Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'


const MemberEventsContainer = (props) => {
    const getMyEvents =() => {
      let events = props.events.filter(ev => (
        ev.member_events.filter(memEv => memEv.member_id === props.member.id)
      ))
      return events
    }
    return(
      <div>
        <Header as='h4'>My Events</Header>
        <div className="my-events">
        { props.events ?
          getMyEvents().map(ev => <MyEventCard key={ev.id} eventObj={ev} /> )
          : null }
        </div>
        <Link to='/group/events/new'><Button className="create">Create New Event</Button></Link>
      </div>
    )
  }

export default MemberEventsContainer;

//, props.events.filter(ev => ev.member_events.filter(memEv => memEv.member_id === props.member.id))
