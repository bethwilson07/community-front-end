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
    formTime: new Date(),
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

    handleDateChange =(date) => {
      this.setState({
        formTime: date
      })
    }

    onAddNewEvent =(event) => {
      event.preventDefault()
      fetch(`http://localhost:3000/member_events`, {
            method: "POST",
            headers: {
              "Content-Type" :"application/json",
              "Accept":"application/json"
            },
            body: JSON.stringify({
              data: {
                'event': {name: this.state.formName,
                        description: this.state.formDescription,
                        location: this.state.formLocation,
                        latitude: null,
                        longitude: null,
                        when: this.state.formTime,
                        photo: this.state.formPhoto,
                        group_id: 1
                      },
                'member_event': {
                        member_id: this.state.currentMember.id,
                        organizer: true,
                        status: "going"
                      }
                    }
            })
          }).then(res=> res.json())
          .then(newMemEv => this.setState({
            allEvents: [...this.state.allEvents, newMemEv]
          }, () => console.log(newMemEv))
        )
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
       let updatedEvents = this.state.allEvents.map(ev => {
         if (ev.id === updatedEvent.id) {
           return updatedEvent;
         } else {
           return ev;
         }
       })
       this.setState({
         allEvents: updatedEvents
       })
     }

     handleNewStatus = (newMemEvObj) => {
       let updatedEvents = this.state.allEvents.map(ev => {
         if (ev.id === newMemEvObj.event.id) {
           let oldStatus = ev.member_events.find(m => m.member_id === newMemEvObj.member_id).status
           let newEvent = {...ev, oldStatus: newMemEvObj.status}
           return newEvent;
         } else {
           return ev;
         }
        })
       this.setState({
         allEvents: updatedEvents
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
    return (

      <div className="App">

        <Route exact path="/group/login" render={(props) => {
            return <LoginForm onClick={this.handleLoginSubmit} />
          }} />

        <NavBarMenu group={this.state.group} member={this.state.currentMember}/>

        <Route exact path="/group/events" render={(props) => {
            return <GroupEventsPage
              events={this.state.allEvents}
              member={this.state.currentMember}
              />
          }} />

        <Route exact path="/group/events/new" render={(props) => {
            return (<EventForm
              history={props.history}
              photo={this.state.formPhoto}
              onChange={this.OnFormChanges}
              handleDate={this.handleDateChange}
              formTime={this.state.formTime}
              onSubmit={this.onAddNewEvent}/>)
          }} />

        <Route exact path="/events/:id" render={(props) => {
            let eventId = props.match.params.id
            return (<EventDetailsPage
              member={this.state.currentMember}
              eventObj={this.state.allEvents.find(event => event.id === parseInt(eventId))}
              onDelete={this.removeEvent}
              history={props.history}
              />)
          }} />

        <Route exact path="/group/events/:id/edit" render={(props) => {
            let eventId = props.match.params.id
            return (
               <EditEventPage
                 history={props.history}
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
