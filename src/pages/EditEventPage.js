import React from 'react';
import EditEventForm from '../components/EditEventForm'
import StatusForm from '../components/StatusForm'

export default class EditEventPage extends React.Component {

  render(){
    return (
      <div>
          { this.props.eventObj ? <EditEventForm
            member={this.props.member}
            eventObj={this.props.eventObj}
            name={this.props.eventObj.name}
            location={this.props.eventObj.location}
            description={this.props.eventObj.description}
            when={this.props.eventObj.when}
            photo={this.props.eventObj.photo}
            id={this.props.eventObj.id}
            handleUpdate={this.props.handleUpdate}
            /> : null}
          <br></br>
          { this.props.eventObj ? <StatusForm
            member={this.props.member}
            memberEv={this.props.eventObj.member_events}
            eventObj={this.props.eventObj}
            handleNewStatus={this.props.handleNewStatus}
             /> : null}
      </div>
    )
  }
}

//   if(this.state.toDashboard === true) {
  //   <Redirect to="/group/events" />
  // }

    //
    // findOrganizer = () => {
    //   let organizer = this.props.eventObj.member_events.find(mem => mem.organizer === true)
    //   return organizer
    // }
