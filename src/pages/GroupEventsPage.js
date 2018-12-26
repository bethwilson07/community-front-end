import React from 'react';
import NavBarMenu from '../components/NavBarMenu';
import AllEventsContainer from '../containers/AllEventsContainer';
import CalendarArea from '../components/CalendarArea';
import MemberEventsContainer from '../containers/MemberEventsContainer';
import {Segment} from 'semantic-ui-react'

const GroupEventsPage = () => {

  return(
    <div>

      <NavBarMenu />

      <Segment >
        <AllEventsContainer />
      </Segment>

      <Segment floated="left" >
        <CalendarArea />
      </Segment>

      <Segment floated="right">
        <MemberEventsContainer />
      </Segment>

    </div>
  )
}

export default GroupEventsPage;
