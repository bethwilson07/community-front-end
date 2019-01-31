import React from 'react';
import {Button, Header, Segment, Form} from 'semantic-ui-react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class EditEventForm extends React.Component {

  state = {
    eventName: this.props.name,
    eventDescription: this.props.description,
    eventDate: this.props.when,
    eventLocation: this.props.location,
    eventPhoto: this.props.photo
  }

  handleDateChange =(date) =>{
    this.setState({
      eventDate: new Date(date)
    })
  }

  formatEventDate = () => {
    return new Date(this.props.when).toLocaleDateString();
  }

  OnFormChanges = (e) => {
    let targetName = e.target.name
    let targetValue = e.target.value
      this.setState({
        [targetName]: targetValue
      })
  }

  updateEvent = (eventId) => {
    console.log(eventId)
    fetch(`http://localhost:3000/events/${eventId}`, {
      method: "PATCH",
      headers: {
          "Content-Type":"application/json",
          "Accept":"application/json"
        },
      body: JSON.stringify({
        name: this.state.eventName,
        description: this.state.eventDescription,
        location: this.state.eventLocation,
        when: this.state.eventDate,
        photo: this.state.eventPhoto
        })
    }).then(res => res.json())
    .then(json => this.props.handleUpdate(json))
  }

  render() {
    return(
      <div>
        <Segment className="form">
            <Header as='h3'>Edit Event Details:</Header>
            <Form onSubmit={()=>this.updateEvent(this.props.id)}>
              <Form.Field onChange={this.OnFormChanges}>
                <label>Event Name</label>
                <input name='eventName' defaultValue={this.props.name} />
              </Form.Field>
              <Form.Field onChange={this.OnFormChanges}>
                <label>Photo Url</label>
                <input name="eventPhoto" defaultValue={this.props.photo} />
              </Form.Field>
              <Form.Field onChange={this.OnFormChanges}>
                <label>Location</label>
                <input name='eventLocation' defaultValue={this.props.location} />
              </Form.Field>
              <Form.Field onChange={this.handleDateChange}>
                <label>Date & Time</label>
                  <DatePicker
                    inline
                    openToDate={this.state.eventDate}
                    selected={this.state.eventDate}
                    onChange={this.handleDateChange}
                    showTimeSelect
                    dateFormat="Pp"
                    />
              </Form.Field >
              <Form.TextArea label="Description" name="eventDescription" defaultValue={this.props.description} onChange={this.OnFormChanges} />
              <Button className="create" type='submit'>Update Event</Button>
            </Form>
          </Segment>

        </div>
      )
  }

}
// if(this.state.toDashboard === true) {
//   <Redirect to="/group/events" />
// }
