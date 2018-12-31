import React from 'react'
import {Segment, Header, Form, Radio, Grid, Button} from 'semantic-ui-react'

export default class StatusForm extends React.Component {

  state = {
    value: this.props.memberEv[0].status
  }

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    console.log(this.state.value)
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
        </Form>
        <Button className="create">Update RSVP</Button>
      </Segment>
    </Segment>
    )
  }
}
