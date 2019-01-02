import React from 'react';
import {Header, Segment, Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const NavBarMenu = (props) => {
  return(

      <React.Fragment>
        { props.member ?
          <Segment clearing inverted>
         <Header as='h3' floated='right'>
           <Link to={`/members/${props.member.id}`}><Icon name="user" />{props.member.name}</Link>
         </Header>
         <Header as='h2' floated='left'>
           <Link to="/group/events"><Icon name="home"/>{props.group}</Link>
         </Header>
       </Segment>
       : <Segment clearing inverted>
      <Header color='teal' as='h3' floated='right'>
        <Icon name="user circle" size="mini"/>
        MemberName
      </Header>
      <Header color='teal' as='h2' floated='left'>
        <Link to="/group/events"><Icon name="home"/>{props.group}</Link>
      </Header>
    </Segment>
      }
     </React.Fragment>

  )
}

export default NavBarMenu;
