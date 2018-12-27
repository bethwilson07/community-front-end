import React from 'react';
import {Header, Segment} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const NavBarMenu = () => {
  return(
    <Segment clearing inverted>
     <Header color='teal' as='h2' floated='right'>
       MemberName
     </Header>
     <Header color='teal' as='h2' floated='left'>
       <Link to="/group/events">Group Name</Link>
     </Header>
   </Segment>
  )
}

export default NavBarMenu;
