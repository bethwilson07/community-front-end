import React from 'react';
import EditEventForm from '../components/EditEventForm'
import StatusForm from '../components/StatusForm'

const EditEventPage = (props) => {
  console.log(props)
  return (
    <div>
        { props.eventObj ?  <EditEventForm member={props.member} eventObj={props.eventObj} /> : null}
        <br></br>
        { props.eventObj ?  <StatusForm member={props.member} eventObj={props.eventObj} /> : null}
    </div>
  )
}

export default EditEventPage;
