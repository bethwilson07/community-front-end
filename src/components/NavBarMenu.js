import React from 'react';
import {Header, Segment} from 'semantic-ui-react'


const NavBarMenu = () => {
  return(
    <Segment clearing inverted >
     <Header inverted color='grey' as='h2' floated='right'>
       Username
     </Header>
     <Header inverted color='grey' as='h2' floated='left'>
       Group Name
     </Header>
   </Segment>
  )
}

export default NavBarMenu;
