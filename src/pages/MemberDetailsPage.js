import React from 'react';
import {Header, Segment, Icon, Image, Card} from 'semantic-ui-react'

const MemberDetailsCard = (props) => {
  return(
    <div>

      <Segment >
        <Header as='h3'>Member Details</Header>
      </Segment>
      { props.member ?
      <Card className="mem">
        <Image src={`${props.member.photo}`} />
        <Card.Content>
          <Card.Header>{props.member.name}</Card.Header>
          <Card.Meta>Age: {props.member.age}</Card.Meta>
          <Card.Meta>Email: {props.member.email}</Card.Meta>
          <Card.Description>Bio: {props.member.bio}</Card.Description>
        </Card.Content>
        <Card.Content extra><Icon name='user'/>Active</Card.Content>
      </Card>
      : null
      }
    </div>
  )
}

export default MemberDetailsCard;
