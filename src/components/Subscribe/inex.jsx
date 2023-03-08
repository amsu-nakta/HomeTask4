import React from 'react';

class Form extends React.Component {
  constructor() {
    super();

    this.state = {

      input: {},

      errors: {},

    };

    this.handleChange = this.handleChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { input } = this.state;

    input[event.target.name] = event.target.value;

    this.setState({

      input,

    });
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.validate()) {
      console.log(this.state);

      const input = {};

      input.name = '';

      input.surname = '';

      input.email = '';

      this.setState({ input });

      alert('Form is submited');
    }
  }

  validate() {
    const { input } = this.state;

    const errors = {};

    let isValid = true;

    if (!input.name) {
      isValid = false;

      errors.name = 'Please enter your name.';
    }

    if (!input.surname) {
      isValid = false;

      errors.name = 'Please enter your surname.';
    }

    if (!input.email) {
      isValid = false;

      errors.email = 'Please enter your email Address.';
    }

    if (typeof input.email !== 'undefined') {
      const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

      if (!pattern.test(input.email)) {
        isValid = false;

        errors.email = 'Please enter valid email address.';
      }
    }

    this.setState({

      errors,

    });

    return isValid;
  }

  render() {
    return (

      <div className="subscribe">
        <a name="subscribe" />
        <div className="subscribe_title">DON’T FORGET TO SIGN UP</div>
        <img src="../img/line.png" alt="" />
        <div className="subscribe_description">
          Find out early about all upcoming promotions and new product releases with
          our newsletter.
        </div>

        <form onSubmit={this.handleSubmit} className="subscribe_form">

          <div className="subscribe_form_group">
            <div className="subscribe_form_group_name">
              <input
                type="text"
                name="name"
                value={this.state.input.name}
                onChange={this.handleChange}
                className="form-control"
                placeholder="Enter your name....."
              />
              <div className="text-danger">{this.state.errors.name}</div>
            </div>
            <div className="subscribe_form_group_surname">
              <input
                type="text"
                name="surname"
                value={this.state.input.surname}
                onChange={this.handleChange}
                className="form-control"
                placeholder="Enter your surname....."
              />
              <div className="text-danger">{this.state.errors.surname}</div>
            </div>
          </div>

          <div className="subscribe_form_email">

            <input
              type="text"
              name="email"
              value={this.state.input.email}
              onChange={this.handleChange}
              className="form-control"
              placeholder="Enter your e-mail....."
            />
            <div className="text-danger">{this.state.errors.email}</div>
          </div>

          <input type="submit" value="Submit" className="subscribe_form_button" />
        </form>
      </div>

    );
  }
}
export default Form;
