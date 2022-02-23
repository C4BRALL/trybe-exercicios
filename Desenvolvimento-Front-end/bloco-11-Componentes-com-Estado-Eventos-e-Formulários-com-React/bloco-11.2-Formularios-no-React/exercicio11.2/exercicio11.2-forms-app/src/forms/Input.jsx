import React from "react";

class Input extends React.Component {  
  render() {

    const { handleChange, type, value, id, text, name } = this.props;

    return(
      <label htmlFor="name">
        { text }
          <input 
            type={ type } 
            name={ name }
            id={ id }
            value={ value }
            onChange={ handleChange }>
          </input>
      </label>
    );
  }
}

export default Input;