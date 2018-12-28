import React from 'react';
import NavBarMenu from '../components/NavBarMenu';
import AllEventsContainer from '../containers/AllEventsContainer';
import CalendarArea from '../components/CalendarArea';
import MemberEventsContainer from '../containers/MemberEventsContainer';
import {Grid, Segment} from 'semantic-ui-react'

export default class GroupEventsPage extends React.Component {

  state = {
    allEvents: [],
    member: null
  }


  componentDidMount = ()=> {
    fetch("http://localhost:3000/groups")
      .then(res => res.json())
      .then(json => this.setState({
        allEvents: json[0].events
      }))
  }


  render () {
    return(
      <div>

        <NavBarMenu />

        <Grid relaxed container >
          <Grid.Row>
            <Grid.Column columns={1}>
              <Segment className="events" >
                <AllEventsContainer
                  events={this.state.allEvents}
                  group={this.state.group}
                  member={this.state.member}/>
              </Segment>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row columns={2}>
            <Grid.Column>
              <Segment className="calendar" float="left" >
                <CalendarArea />
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment className="mine" >
                <MemberEventsContainer
                  events={this.state.allEvents}
                  member={this.state.member}
                  group={this.state.group}/>
              </Segment>
            </Grid.Column>
          </Grid.Row>

        </Grid>

      </div>
    )
  }
}
