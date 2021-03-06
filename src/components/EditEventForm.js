import React from 'react'
import {Button, Header, Segment, Form} from 'semantic-ui-react'
import {withRouter} from 'react-router-dom'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class EditEventForm extends React.Component {

  state = {
    eventName: this.props.name,
    eventDescription: this.props.description,
    eventDate: this.props.when,
    eventLocation: this.props.location,
    eventPhoto: this.props.photo
  }

  handleDateChange =(date) =>{
    this.setState({
      eventDate: date
    })
  }

  OnFormChanges = (e) => {
    let targetName = e.target.name
    let targetValue = e.target.value
      this.setState({
        [targetName]: targetValue
      })
  }

  updateEvent = (eventId) => {
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

  handleSubmit = (event, eventId) => {
    event.persist()
    this.props.history.push("/group/events")
    this.updateEvent(eventId)
  }

  render() {
    return(
      <div>
        <Segment className="form">
            <Header as='h3'>Edit Event Details:</Header>
            <Form onSubmit={(event)=>this.handleSubmit(event, this.props.id)}>
              <Form.Field onChange={this.OnFormChanges}>
                <label>Event Name</label>
                <input name='eventName' defaultValue={this.props.eventObj.name} />
              </Form.Field>
              <Form.Field onChange={this.OnFormChanges}>
                <label>Photo Url</label>
                <input name="eventPhoto" defaultValue={this.props.eventObj.photo} />
              </Form.Field>
              <Form.Field onChange={this.OnFormChanges}>
                <label>Location</label>
                <input name='eventLocation' defaultValue={this.props.eventObj.location} />
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

export default withRouter(EditEventForm)
