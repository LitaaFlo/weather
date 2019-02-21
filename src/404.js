import React, { Component } from 'react';
import { connect } from 'react-redux'


class NotFound extends Component {

  render() {

    return (
      <div className="container">
          <div className="row">
            404 not Found
          </div>

      </div>
    );
  }
}


export default connect()(NotFound)
