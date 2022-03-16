import React, { Component } from "react";
import ValidEmail from "./ValidEmail";

export default class Form extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      saveName: '',
      saveEmail: '',
      save: '',
    }
  }

  handleChange = ({ target }) => {
    const name = target.name;
    const value = target.value;
    this.setState({
      [name] : value,
    });
  }

  handleSubmit = () => {
    const { name, email } = this.state;
    this.setState({
      saveName: name,
      saveEmail : email,
    }, () => {
      this.setState({
        name: '',
        email: '',
      })
    } );
  }

  render() {
    const { name, email, save, saveEmail, saveName } = this.state;

    return (
      <form>
        <label htmlFor="name">
          Name:
          {' '}
        <input
          name="name"
          id="name"
          type="text"
          value={ name }
          onChange={ this.handleChange }
        />
        </label>
        <br/>
        <label htmlFor="e-mail">
          E-mail:
          {' '}
        <input
          name="email"
          id="e-mail"
          type="email"
          value={ email }
          onChange={ this.handleChange }
        />
        </label>
        <br/>
        <input
          type="button"
          id="btn-submit"
          value="Submit"
          onClick={ () => this.handleSubmit(save, save) }
        />
        <h3>{`Your Name: ${saveName}`}</h3>
        <ValidEmail email={ saveEmail } />
      </form>
    )
  }
}