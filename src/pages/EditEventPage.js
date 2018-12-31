import React from 'react';
import EditEventForm from '../components/EditEventForm'
import StatusForm from '../components/StatusForm'

export default class EditEventPage extends React.Component {

  render(){
    console.log(this.props.eventObj)
    return (
      <div>
          { this.props.eventObj ?  <EditEventForm member={this.props.member} eventObj={this.props.eventObj}  /> : null}
          <br></br>
          { this.props.eventObj ?  <StatusForm member={this.props.member} memberEv={this.props.eventObj.member_events} eventObj={this.props.eventObj}/> : null}
      </div>
    )
  }
}
