import React from 'react';
import Calendar from 'react-calendar';
import {Header} from 'semantic-ui-react'

const CalendarArea = () => {
  return(
    <div>
      <Header as='h4'>Calendar</Header>
      <Calendar />
    </div>
  )
}

 export default CalendarArea;
