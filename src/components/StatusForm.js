import React from 'react'
import {Segment, Header, Form, Radio, Grid, Button} from 'semantic-ui-react'

export default class StatusForm extends React.Component {

  state = {
    value: this.props.memberEv[0].status
  }

  handleChange = (e, { value }) => this.setState({ value })

  updateStatus = (memEvId) => {
    console.log(memEvId)
    fetch(`http://localhost:3000/member_events/${memEvId}`, {
      method: "PATCH",
      headers: {
          "Content-Type":"application/json",
          "Accept":"application/json"
        },
      body: JSON.stringify({
        status: this.state.value
        })
    }).then(res => res.json())
    .then(newStatus => this.props.handleNewStatus(newStatus))
  }

  render() {
    return (
      <Segment className="form">
      <Header as="h3"> Change RSVP: </Header>
      {this.props.memberEv ? <Segment className="form">
        <Form onSubmit={() => this.updateStatus(this.props.memberEv[0].id)}>
          <Grid>
            <Grid.Row columns={3}>
               <Form.Field>
                <Radio
                  label='Going'
                  name='radioGroup'
                  value='going'
                  checked={ this.state.value === "going"}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <Radio
                  label='Maybe'
                  name='radioGroup'
                  value='maybe'
                  checked={this.state.value === 'maybe'}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <Radio
                  label='Not Going'
                  name='radioGroup'
                  value='not going'
                  checked={this.state.value === 'not going'}
                  onChange={this.handleChange}
                />
              </Form.Field>
            </Grid.Row>
          </Grid>
          <Button className="create" type="submit">Update RSVP</Button>
        </Form>
      </Segment> : null}
    </Segment>
    )
  }
}
