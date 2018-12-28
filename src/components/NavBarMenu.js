import React from 'react';
import {Header, Segment, Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const NavBarMenu = (props) => {
  return(
    <Segment clearing inverted>
       <Header color='teal' as='h3' floated='right'>
         <Icon name="user circle" size="mini"/>
         Barney Stinson
       </Header>
       <Header color='teal' as='h2' floated='left'>
         <Link to="/group/events"><Icon name="home"/>HIMYM Cast</Link>
       </Header>
     </Segment>

  )
}

export default NavBarMenu;
