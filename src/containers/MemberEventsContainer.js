import React from 'react';
import EventCard from '../components/EventCard'
import {Header, Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'


export default class MemberEventsContainer extends React.Component {


  render() {
    console.log(this.props.events)
    return(
      <div>
        <Header as='h4'>My Events</Header>
        { this.props.events ?
            this.props.events.map(event => <EventCard key={event.id} event={event}/>)[0]
            : null
          }
        <Link to='/group/events/new'><Button className="create">Create New Event</Button></Link>
      </div>
    )
  }
}
