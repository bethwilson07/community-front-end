import React from 'react';
import EditEventForm from '../components/EditEventForm'
import StatusForm from '../components/StatusForm'

export default class EditEventPage extends React.Component {

  getMemberStatus =() => {
    if (this.props.member) {
      return this.props.eventObj.member_events.filter(ev => ev.member_id === this.props.member.id)[0].status
    }
  }

  getOrganizerStatus = () => {
    if (this.props.eventObj || this.props.member) {
      return this.props.eventObj.member_events.filter(ev => ev.member_id === this.props.member.id)[0].organizer
    }
  }

  render(){
    return (
      <div>
          { this.getOrganizerStatus() ? <EditEventForm
            member={this.props.member}
            eventObj={this.props.eventObj}
            name={this.props.eventObj.name}
            location={this.props.eventObj.location}
            description={this.props.eventObj.description}
            when={this.props.eventObj.when}
            photo={this.props.eventObj.photo}
            id={this.props.eventObj.id}
            handleUpdate={this.props.handleUpdate}
            history={this.props.history}
            /> : null}
          <br></br>
          { this.props.eventObj ? <StatusForm
            member={this.props.member}
            memberEv={this.props.eventObj.member_events}
            status={this.getMemberStatus()}
            eventObj={this.props.eventObj}
            handleNewStatus={this.props.handleNewStatus}
            history={this.props.history}
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
