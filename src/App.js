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
    group: "HIMYM Cast",
    allEvents: [],
    currentMember: null,
    members: [],
    myEvents: []
  }

  componentDidMount = ()=> {
    fetch("http://localhost:3000/groups")
      .then(res => res.json())
      .then(json => this.setState({
        group: json[0].name,
        allEvents: json[0].events
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
    console.log(this.state.members)
    return (

      <div className="App">

        <Route exact path="/group/login" render={(props) => {
            return <LoginForm onClick={this.handleLoginSubmit} />
          }} />

          <NavBarMenu group={this.state.group} member={this.state.currentMember}/>

        <Route exact path="/group/events" render={(props) => {
            return <GroupEventsPage
              events={this.state.allEvents}/>
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
