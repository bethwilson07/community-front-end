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

      <Grid relaxed container columns={2}>
        <Grid.Row>
          <Grid.Column>
            <Segment className="events" >
              <AllEventsContainer />
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
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
