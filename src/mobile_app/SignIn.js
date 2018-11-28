import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

import './../App.css';


class SignIn extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state={};
      }
      makeField(id, col, name) {
      const
        value = this.state[id] || '',
        invalid = !!(value.length % 2), // check if odd
        className = 'form-control' + (invalid?' is-invalid':'');
        return(
          <div className={`col-md-${col} mb-3`}>
            <label>{name}</label>
            <input
              type="text"
              className={className}
              data-id={id}
              placeholder={name}
              value={value}
              onChange={this.handleChange}
            />
            {/* The next line is where you specify that the
                error message should be shown only
                when the 'invalid' variable is true    */}
            <Fade bottom collapse when={invalid}>
              <div className="invalid-feedback"
                //Boostrap 4 uses some CSS tricks to simplify
                //error handling but we're doing it differently
                //so the next line disables these tricks
                style={{ display: 'block' }}
              >
                Oh no, the number of characters is odd
              </div>
            </Fade>
          </div>
        );
      }
      handleChange({ target }) {
        this.setState({
          [target.getAttribute('data-id')]: target.value
        });
      }
      render() {
        return (
          <form autoComplete="off">
            <div className="form-row">
              {this.makeField('f2',4, 'Username')}
              {this.makeField('f3',4, 'Password' )}
            </div>
            <button className="btn btn-success" type="button">
              Submit form
            </button>
          </form>
        );
      }
}

export default SignIn;
