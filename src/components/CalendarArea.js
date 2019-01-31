import React from 'react';
import Calendar from 'react-calendar';
import {Header} from 'semantic-ui-react'
import moment from 'moment'

const CalendarArea = () => {
  return(
    <div>
      <Header as='h4'>Calendar</Header>
      <Header as="h4">Today is <i>{`${moment(new Date()).format("MMMM Do, YYYY")}`}</i></Header>
      <Calendar value={new Date()}/>
    </div>
  )
}

 export default CalendarArea;
