import React, { Component } from 'react';
import { connect } from 'react-redux'


class NotFound extends Component {

  render() {

    return (
      <div className="container">
          <div className="row">
              <h1 style={{textAlign: 'center'}}>Страница не найдена</h1>
              <div className="progress">
                  <div className="indeterminate" />
              </div>
          </div>

      </div>
    );
  }
}


export default connect()(NotFound)
