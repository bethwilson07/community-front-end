import React from 'react'
import {Segment, Header, Form, Radio, Grid, Button} from 'semantic-ui-react'

export default class StatusForm extends React.Component {
  render() {
    return (
      <Segment className="form">
      <Header as="h3"> Change RSVP: </Header>
      <Segment className="form">
        <Form >
          <Grid>
            <Grid.Row columns={3}>
               <Form.Field>
                <Radio
                  label='Going'
                  name='radioGroup'
                  value='Going'
                  checked={ this.props.eventObj.member_events.filter(ev => ev.member_id === this.props.member.id)[0].status === "going"}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <Radio
                  label='Maybe'
                  name='radioGroup'
                  value='Maybe'
                  checked={this.props.eventObj.member_events.filter(ev => ev.member_id === this.props.member.id)[0].status === 'maybe'}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <Radio
                  label='Not Going'
                  name='radioGroup'
                  value='Not Going'
                  checked={this.props.eventObj.member_events.filter(ev => ev.member_id === this.props.member.id)[0].status === 'not going'}
                  onChange={this.handleChange}
                />
              </Form.Field>
            </Grid.Row>
          </Grid>
        </Form>
        <Button className="create">Update RSVP</Button>
      </Segment>
    </Segment>
    )
  }
}
