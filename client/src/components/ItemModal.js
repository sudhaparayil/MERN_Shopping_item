import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';
// import PropTypes from 'prop-types';
import { Button, 
    Modal, 
    ModalHeader, 
    ModalBody, 
    ModalFooter, 
    Form,
    FormGroup,
    Label,
    Input } from 'reactstrap';

class ItemModal extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        modal: false
      };
  
      this.toggle = this.toggle.bind(this);
    }
  
    toggle() {
      this.setState({
        modal: !this.state.modal
      });
    }
    onChange = (e)=> {
this.setState({ [e.target.name]:e.target.value})
    }

    onSubmit = e => {
      e.preventDefault();
      const newItem = {
        id: uuid(),
        name: this.state.name
      }

      //add item via addItem action
      this.props.addItem(newItem);

      //close modal
      this.toggle();
    }
    render() {
      return (
        <div>
          <Button 
          color="primary"
          style={{ margin: '16px 0px 16px 16px'}}
           onClick={this.toggle}>
           AddItem</Button>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>Add Item</ModalHeader>
            <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="item">Item</Label>
                <Input
                  type="text"
                  name="name"
                  id="item"
                  placeholder="Add shopping item"
                  onChange={this.onChange}
                />
                <Button color="dark" style={{ marginTop: '2rem' }} block>
                  Add Item
                </Button>
              </FormGroup>
            </Form>
            </ModalBody>
            <ModalFooter>
            </ModalFooter>
          </Modal>
        </div>
      );
    }
  }

  const mapStateToProps = (state) =>({
    item: state.item
});

export default connect(mapStateToProps,{ addItem})(ItemModal);