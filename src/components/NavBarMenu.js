import React from 'react';
import {Header, Segment} from 'semantic-ui-react'


const NavBarMenu = () => {
  return(
    <Segment clearing inverted>
     <Header color='teal' as='h2' floated='right'>
       User
     </Header>
     <Header color='teal' as='h2' floated='left'>
       Group Name
     </Header>
   </Segment>
  )
}

export default NavBarMenu;
