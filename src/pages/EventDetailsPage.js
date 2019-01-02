import React from 'react';
import MembersAttendingContainer from '../containers/MembersAttendingContainer'
import {Header, Segment, Form, Radio, Button, Grid, Image, Card} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

export default class EventDetailsPage extends React.Component {

  state = {
    value: this.props.eventObj
  }

 handleChange = (e, { value }) => this.setState({ value })

 render() {
   console.log(this.props.eventObj ? this.props.eventObj : null)
   return (
     <div>

       <Segment clearing className="details">
         <Header as='h2' floated="left">
           Event Details <br></br>
         <h3>{this.props.eventObj ? this.props.eventObj.name : null}</h3>
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
                   checked={this.props.eventObj.member_events.filter(ev => ev.member_id === this.props.member.id)[0].status === "going"}
                   onChange={this.handleChange}
                 />
             </Form.Field>
               <Form.Field>
                 <Radio
                   label='Maybe'
                   name='radioGroup'
                   value='maybe'
                   checked={this.props.eventObj.member_events.filter(ev => ev.member_id === this.props.member.id)[0].status === 'maybe'}
                   onChange={this.handleChange}
                 />
               </Form.Field>
               <Form.Field>
                 <Radio
                   label='Not Going'
                   name='radioGroup'
                   value='not going'
                   checked={this.props.eventObj.member_events.filter(ev => ev.member_id === this.props.member.id)[0].status === 'not going'}
                   onChange={this.handleChange}
                 />
               </Form.Field>
             </Grid.Row>
           </Grid>
         </Form>
       : null}
         {this.props.eventObj ? <Link to={`/group/events/${this.props.eventObj.id}/edit`}><Button compact type='text'>Update Event</Button></Link> : null}
         {this.props.eventObj ?
           <Button onClick={() => this.props.onDelete(this.props.eventObj.id)} compact type="text">Delete Event</Button>
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
             Date: {this.props.eventObj.when}
         </Segment>

         { this.props.eventObj?
           <Segment className="attending">
             <MembersAttendingContainer members={this.props.eventObj.members}/>
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

// this.props.eventObj.member_events.filter(ev => ev.member_id === this.props.member.id)[0].status === "going"
//`${this.props.eventObj ? this.props.eventObj.member_events[0].status : "going"}`
//.split('T')[0]} Time: {this.props.eventObj.when.split('T')[1]
//
