import React from "react";
import { connect } from "react-redux";

import { addMember } from "../actions";

class AddQuote extends React.Component {
  state = {
    newMember: "",
    author: ""
  };

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleAddMember = e => {
    e.preventDefault();
    // update the redux members store
    this.props.addMember(this.state.newMember,this.state.author);

    //   e.target.parentNode[0].value = '';
    //   e.target.parentNode[1].value = '';


    this.setState({
      newMember: '',
      author: ''
  });  
 
  };

  render() {
    return (
      <React.Fragment>
        <form id="data-form">
        <input
          type="text"
          name="newMember"
          value={this.state.newMember}
          onChange={this.handleChanges}
          placeholder="Add new quote"
        />
        <input
          type="text"
          name="author"
          value={this.state.author}
          onChange={this.handleChanges}
          placeholder="Author"
        />
        <button onClick={this.handleAddMember}>Add quote</button>
        </form>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    members: state.members
  };
};

export default connect(
  mapStateToProps,
  { addMember }
)(AddQuote);
