import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/index';
import Box from '../components/Box';

export class BoxContainer extends Component {
  render() {
    return (
      <Box handleClick={this.props.loadColor} color={this.props.color}></Box>
    )
  }
}

const mapStateToProps = (state) => {
  return state
};

export default connect(mapStateToProps, actionCreators)(BoxContainer);
