import React from 'react';
import {Card} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

export default class EventCard extends React.Component {

  // formatDate =(date) => {
  //   console.log(date.toDateString())
  // }

  render() {
    return(
      <div>
        { this.props.event ?
            <Link to={`/events/${this.props.event.id}`}><Card className="center">
             <Card.Content header={`${this.props.event.name}`} />
             <Card.Content className="limit" description={`${this.props.event.description}`} />
             <Card.Content extra>{`Date:${this.props.event.when.split('T')[0]}
               Time:${this.props.event.when.split('T')[1]}  `}</Card.Content>
           </Card></Link>
         : null }
      </div>
    )
  }
}
