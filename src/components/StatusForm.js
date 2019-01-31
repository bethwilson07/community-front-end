import React from 'react'
import {Segment, Header, Form, Radio, Grid, Button} from 'semantic-ui-react'
import {withRouter} from 'react-router-dom'

class StatusForm extends React.Component {

  state = {
    value: this.props.status
  }

  handleChange = (e, { value }) => this.setState({ value })

  updateStatus = (memEvId) => {
    fetch(`http://localhost:3000/member_events/${memEvId}`, {
      method: "PATCH",
      headers: {
          "Content-Type":"application/json",
          "Accept":"application/json"
        },
      body: JSON.stringify({
        data: {
          'member_event': {
              status: this.state.value
          }
        }
      })
    }).then(res => res.json())
    .then(newMemEvObj => this.props.handleNewStatus(newMemEvObj))
  }

  handleSubmit = (event, memEvId) => {
    event.persist();
    this.props.history.push('/group/events')
    this.updateStatus(memEvId)
  }

  render() {
    console.log(this.props.memberEv[0].id)
    return (
      <Segment className="form">
      <Header as="h3"> {`Change RSVP for ${this.props.eventObj.name}:`} </Header>
      {this.props.memberEv ? <Segment className="form">
        <Form onSubmit={(event) => this.handleSubmit(event, this.props.memberEv[0].id)}>
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

export default withRouter(StatusForm)
