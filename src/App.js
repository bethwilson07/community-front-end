import React, { Component } from 'react';
import './App.css';
import LoginPage from './pages/LoginPage'
import GroupEventsPage from './pages/GroupEventsPage'
import EventDetailsPage from './pages/EventDetailsPage'
import EventFormPage from './pages/EventFormPage'
import MemberDetailsPage from './pages/MemberDetailsPage'
import { Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">

        <Route exact path="/group/login" render={() => {
            return <LoginPage />
          }} />

        <Route exact path="/group/events" render={() => {
            return <GroupEventsPage />
          }} />

        <Route exact path="/group/events/new" render={() => {
            return <EventFormPage />
          }} />

        <Route exact path="/events/:id" render={() => {
            return <EventDetailsPage />
          }} />

        <Route exact path="/members/:id" render={() => {
            return <MemberDetailsPage />
          }} />


      </div>
    );
  }
}

export default App;
