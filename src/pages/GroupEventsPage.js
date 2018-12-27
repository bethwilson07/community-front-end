import React from 'react';
import NavBarMenu from '../components/NavBarMenu';
import AllEventsContainer from '../containers/AllEventsContainer';
import CalendarArea from '../components/CalendarArea';
import MemberEventsContainer from '../containers/MemberEventsContainer';
import {Grid, Segment} from 'semantic-ui-react'

const GroupEventsPage = () => {

  return(
    <div>

      <NavBarMenu />

      <Grid relaxed container >
        <Grid.Row>
          <Grid.Column columns={1}>
            <Segment className="events" >
              <AllEventsContainer />
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
              <MemberEventsContainer />
            </Segment>
          </Grid.Column>
        </Grid.Row>

      </Grid>

    </div>
  )
}

export default GroupEventsPage;
