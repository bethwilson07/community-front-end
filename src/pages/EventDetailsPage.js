import React from 'react';
import MembersAttendingContainer from '../containers/MembersAttendingContainer'
import {Header, Segment, Form, Radio, Button, Grid, Image, Card} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import moment from 'moment';

class EventDetailsPage extends React.Component {

  state = {
      value: this.props.eventObj
  }

 handleStatusChange = (e, { value }) => this.setState({ value })

 handleDelete = (id) => {
   this.props.onDelete(id);
   this.props.history.push("/group/events")
 }

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

 getOrganizer = () => {
   if (this.props.eventObj) {
     let memEv = this.props.eventObj.member_events.filter(ev => ev.organizer === true)
     let organizer = this.props.eventObj.members.filter(m => m.id === memEv[0].member_id)
     return organizer[0].name
   }
 }


 render() {
   console.log(this.getOrganizer())
   return (
     <div>

       <Segment clearing className="details">
         <Header as='h2' floated="left">
           Event Details <br></br>
         <h3>{this.props.eventObj ? this.props.eventObj.name : null}</h3>
         <h4>{`Organizer: ${this.getOrganizer()}`}</h4>
         </Header>
         <Header as='h2' floated="right">
         {this.props.eventObj ?
           <Form>
           <Grid>
             <Grid.Row columns={3}>
                <Form.Field>
                 <Radio
                   label='Going'
                   name='radioGroup'
                   value='going'
                   checked={this.getMemberStatus() === "going"}
                   onChange={this.handleChange}
                 />
             </Form.Field>
               <Form.Field>
                 <Radio
                   label='Maybe'
                   name='radioGroup'
                   value='maybe'
                   checked={this.getMemberStatus() === 'maybe'}
                   onChange={this.handleChange}
                 />
               </Form.Field>
               <Form.Field>
                 <Radio
                   label='Not Going'
                   name='radioGroup'
                   value='not going'
                   checked={this.getMemberStatus() === 'not going'}
                   onChange={this.handleChange}
                 />
               </Form.Field>
             </Grid.Row>
           </Grid>
         </Form>
       : null}
         {this.getOrganizerStatus() ? <Link to={`/group/events/${this.props.eventObj.id}/edit`}><Button compact type='text'>Update Event</Button></Link> :
         null}
         {this.getOrganizerStatus() === false ? <Link to={`/group/events/${this.props.eventObj.id}/edit`}><Button compact type='text'>Update RSVP</Button></Link> : null}
         {this.getOrganizerStatus() ?
           <Button onClick={() => this.handleDelete(this.props.eventObj.id)} compact type="text">Delete Event</Button>
           : null}
       </Header>
     </Segment>

     <Segment className="photo">
         <Card className="center">
           {this.props.eventObj ?
           <Image src={`${this.props.eventObj.photo}`}/>
           : null}
       </Card>
     </Segment>

     { this.props.eventObj ?
       <React.Fragment>
         <Segment className="details">
         <h5>What:</h5>
         {this.props.eventObj.description}
         </Segment>

         <Segment className="details">
           <h5>Where:</h5>
           {this.props.eventObj.location}
         </Segment>

         <Segment className="details">
           <h5>When:</h5>
             {moment(this.props.eventObj.when).format("MMMM Do, YYYY, h:mm a")}
         </Segment>

         { this.props.eventObj?
           <Segment className="attending">
             <MembersAttendingContainer event={this.props.eventObj} members={this.props.eventObj.members}/>
           </Segment>
           : <Segment className="attending">
             <MembersAttendingContainer />
           </Segment>
         }
       </React.Fragment>
       : null
     }

   </div>
   )
 }
}

export default withRouter(EventDetailsPage)

// this.props.eventObj.member_events.filter(ev => ev.member_id === this.props.member.id)[0].status === "going"
//`${this.props.eventObj ? this.props.eventObj.member_events[0].status : "going"}`
//.split('T')[0]} Time: {this.props.eventObj.when.split('T')[1]
//
