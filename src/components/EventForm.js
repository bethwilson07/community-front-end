import React from 'react';

const EventForm = () => {
  return(
    <div>Event Form
      <form>
        <input type="text" name="name of event" placeholder="name of event" />
        <input type="text" name="date time" placeholder="date time" />
        <input type="text" name="location" placeholder="location" />
        <input type="text" name="description" placeholder="description" />
        <input type="submit" name="create" />
      </form>
    </div>
  )
}

export default EventForm;
