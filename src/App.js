import React, { Component } from 'react';
import './App.css';
import LoginForm from './components/LoginForm'
import NavBarMenu from './components/NavBarMenu'
import GroupEventsPage from './pages/GroupEventsPage'
import EventDetailsPage from './pages/EventDetailsPage'
import EventFormPage from './pages/EventFormPage'
import MemberDetailsPage from './pages/MemberDetailsPage'
import { Route } from 'react-router-dom'

class App extends Component {

  state = {
    group: null,
    allEvents: [],
    currentMember: null,
    members: [],
    myEvents: []
  }

  componentDidMount = ()=> {
    fetch("http://localhost:3000/events")
      .then(res => res.json())
      .then(json => {
          this.setState({
            group: json[0].group.name,
            allEvents: json,
            currentMember: json[0].members[4]
          })
      })
      fetch("http://localhost:3000/member_events")
        .then(res => res.json())
        .then(json => this.setState({
          myEvents: json.filter(obj => obj.member_id === 5)
        }))
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
              events={this.state.allEvents} myEvents={this.state.myEvents} member={this.state.currentMember}/>
          }} />

        <Route exact path="/group/events/new" render={(props) => {
            return <EventFormPage />
          }} />

        <Route exact path="/events/:id" render={(props) => {
            let eventId = props.match.params.id
            return (<EventDetailsPage eventObj={this.state.allEvents.find(event => event.id === parseInt(eventId))}/>)
          }} />

        <Route exact path="/members/:id" render={(props) => {

            return <MemberDetailsPage members={this.state.members}/>
          }} />

      </div>
    );
  }
}

export default App;
