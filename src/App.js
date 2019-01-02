import React, { Component } from 'react';
import './App.css';
import LoginForm from './components/LoginForm'
import NavBarMenu from './components/NavBarMenu'
import GroupEventsPage from './pages/GroupEventsPage'
import EventDetailsPage from './pages/EventDetailsPage'
import EventForm from './components/EventForm'
import MemberDetailsPage from './pages/MemberDetailsPage'
import EditEventPage from './pages/EditEventPage'
import { Route } from 'react-router-dom'

class App extends Component {

  state = {
    group: null,
    members: [],
    currentMember: null,
    allEvents: [],
    myEvents: [],
    formName: '',
    formDescription: '',
    formLocation: '',
    formTime: '',
    formPhoto: ''
  }

  componentDidMount = ()=> {
    fetch("http://localhost:3000/events")
      .then(res => res.json())
      .then(json => {
          this.setState({
            group: json[0].group.name,
            allEvents: json,
            currentMember: json[0].members[4],
            members: json[0].members
          })
      })
      fetch("http://localhost:3000/member_events")
        .then(res => res.json())
        .then(json => this.setState({
          myEvents: json.filter(obj => obj.member_id === 5)
        }))
    }

    OnFormChanges = (e) => {
      let targetName = e.target.name
      let targetValue = e.target.value
        this.setState({
          [targetName]: targetValue
        })
    }

    onAddNewEvent =(event) => {
      event.preventDefault()
      fetch(`http://localhost:3000/events`, {
            method: "POST",
            headers: {
              "Content-Type" :"application/json",
              "Accept":"application/json"
            },
            body: JSON.stringify({
              name: this.state.formName,
              description: this.state.formDescription,
              location: this.state.formLocation,
              latitude: null,
              longitude: null,
              when: this.state.formTime,
              photo: this.state.formPhoto,
              group_id: 1
            })
          }).then(res => res.json())
          .then(newEvent => {
            this.setState ({
              allEvents: [...this.state.allEvents, newEvent],
              myEvents: [...this.state.myEvents, newEvent]
            })
            fetch(`http://localhost:3000/member_events`, {
              method: "POST",
              headers: {
                "Content-Type" :"application/json",
                "Accept":"application/json"
              },
              body: JSON.stringify({
                member_id: this.state.currentMember.id,
                event_id: newEvent.id,
                organizer: true,
                status: "going"
              })
            }).then(res => res.json())
            .then(newMemEv => this.setState({
              myEvents: [...this.state.myEvents, newMemEv]
            }))
          })
    }

    removeEvent = (eventId) => {
       fetch(`http://localhost:3000/events/${eventId}`, {
        method: "DELETE"
      }).then(res => res.json())
      .then(data => {
        let newEventList = this.state.allEvents.filter(ev => ev.id !== eventId)
        this.setState({
          allEvents: newEventList
        })
      })
     }

     handleUpdate = (updatedEvent) => {
       this.setState({
         allEvents: [...this.state.allEvents, updatedEvent],
         myEvents:[...this.state.myEvents, updatedEvent]
       })
     }

     handleNewStatus = (newStatus) => {
       this.setState({
         allEvents: [...this.state.allEvents, newStatus],
         myEvents: [...this.state.myEvents, newStatus]
       })
     }

    handleLoginSubmit = (username) => {
      fetch("http://localhost:3000/members")
      .then(res=> res.json())
      .then(json => this.setState({
        currentMember: json.find(member => member.email === username),
        members: json
      }))
    }


  render() {
    console.log(this.state.myEvents)
    return (

      <div className="App">

        <Route exact path="/group/login" render={(props) => {
            return <LoginForm onClick={this.handleLoginSubmit} />
          }} />

        <NavBarMenu group={this.state.group} member={this.state.currentMember}/>

        <Route exact path="/group/events" render={(props) => {
            return <GroupEventsPage
              events={this.state.allEvents}
              myEvents={this.state.myEvents}
              member={this.state.currentMember}
              />
          }} />

        <Route exact path="/group/events/new" render={(props) => {
            return (<EventForm
              history={props.history}
              photo={this.state.formPhoto}
              onChange={this.OnFormChanges}
              onSubmit={this.onAddNewEvent}/>)
          }} />

        <Route exact path="/events/:id" render={(props) => {
            let eventId = props.match.params.id
            return (<EventDetailsPage
              member={this.state.currentMember}
              eventObj={this.state.allEvents.find(event => event.id === parseInt(eventId))}
              onDelete={this.removeEvent}/>)
          }} />

        <Route exact path="/group/events/:id/edit" render={(props) => {
            let eventId = props.match.params.id
            return (
               <EditEventPage
                 member={this.state.currentMember}
                 eventObj={this.state.allEvents.find(event => event.id === parseInt(eventId))}
                 handleUpdate={this.handleUpdate}
                 handleNewStatus={this.handleNewStatus}
                 />
            )
        }} />

        <Route exact path="/members/:id" render={(props) => {
            let memberId = props.match.params.id
            return (<MemberDetailsPage member={this.state.members.find(member => member.id === parseInt(memberId))}/>)
          }} />

      </div>
    );
  }
}
export default App;
