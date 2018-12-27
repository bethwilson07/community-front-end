import React from 'react';
import NavBarMenu from '../components/NavBarMenu'
import {Header, Segment, Icon, Image, Card} from 'semantic-ui-react'

const MemberDetailsCard = () => {
  return(
    <div>
      <NavBarMenu />

      <Segment >
        <Header as='h3'>Member Details</Header>
      </Segment>

      <Card className="mem">
        <Image src="https://thoughtcatalog.files.wordpress.com/2016/07/howimet.jpg?w=1140&h=855" />
        <Card.Content>
          <Card.Header>Name</Card.Header>
          <Card.Meta>Age</Card.Meta>
          <Card.Meta>Email</Card.Meta>
          <Card.Description>Bio</Card.Description>
        </Card.Content>
        <Card.Content extra><Icon name='user'/> 6 Friends</Card.Content>
      </Card>
    </div>
  )
}

export default MemberDetailsCard;
