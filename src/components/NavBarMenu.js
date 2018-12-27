import React from 'react';
import {Header, Segment, Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const NavBarMenu = () => {
  return(
    <Segment clearing inverted>
     <Header color='teal' as='h3' floated='right'>
       <Icon name="user circle" size="mini"/>
       MemberName
     </Header>
     <Header color='teal' as='h2' floated='left'>
       <Link to="/group/events"><Icon name="home"/>Group Name</Link>
     </Header>
   </Segment>
  )
}

export default NavBarMenu;
