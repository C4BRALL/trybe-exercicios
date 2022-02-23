import React from "react";
import Input from "./Input";

class Forms extends React.Component {
  constructor() {
    super();

    this.state = {
      stack: '',
      email: '',
      resume: '',
    }
  }

  handleChange = ( { target } ) => {
    const { name } = target
    const value = target.value
    // const value = target.type === 'checkbox' ? target.checked : target.value 
    this.setState({
      [name]: value,
    })
  }

  validEmail =(email) => {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email);
  }

  render() {
    const { value, email } = this.state;
    return(
      <div>
        <form className="forms">

          <Input 
            value={ value } 
            type="text"
            name="name"
            id="input-name"
            text="Seu nome:"
            handleChange={ this.handleChange }
          />

          <Input
            value={ email }
            type="email"
            name="email"
            id="input-email"
            text="Seu email:"
            handleChange={ this.handleChange }
          />

          <Input 
            value="mobile"
            type="checkbox"
            name="stack"
            id="mobile"
            text="Mobile:"
            handleChange={ this.handleChange }
          />

          <Input 
            value="website"
            type="checkbox"
            name="stack"
            id="website"
            text="Website:"
            handleChange={ this.handleChange }
          />

          <Input 
            value="others"
            type="checkbox"
            name="stack"
            id="others"
            text="Others:"
            handleChange={ this.handleChange }
          />

          <label htmlFor="">
            
          </label>

          <label htmlFor="resume">
            Resume:
            <textarea 
              name="resume" 
              id="resume" 
              cols="30" 
              rows="1" 
              value={ value } 
              onChange={ this.handleChange }>
            </textarea>
          </label>
        </form>
        <button disabled={ !this.validEmail(email) }>Click aqui!</button>
      </div>
    )
  }
}

export default Forms;