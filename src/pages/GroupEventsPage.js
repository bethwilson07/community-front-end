import React from 'react';
import AllEventsContainer from '../containers/AllEventsContainer';
import CalendarArea from '../components/CalendarArea';
import MemberEventsContainer from '../containers/MemberEventsContainer';
import {Grid, Segment} from 'semantic-ui-react'

const GroupEventsPage =(props) => {
    return(
        <div>
          <Grid relaxed container >
            <Grid.Row>
              <Grid.Column columns={1}>
                <Segment className="events" >
                  {props.events ?
                  <AllEventsContainer events={props.events} />
                  : null }
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
                { props.member ?
                <Segment className="mine" >
                  <MemberEventsContainer events={props.events} member={props.member}/>
                </Segment>
                : null }
              </Grid.Column>
            </Grid.Row>

          </Grid>

        </div>
      )
   }

export default GroupEventsPage;
