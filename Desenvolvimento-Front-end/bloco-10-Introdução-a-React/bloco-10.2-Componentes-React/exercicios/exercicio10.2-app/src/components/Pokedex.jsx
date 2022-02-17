import React from "react";
import PropTypes from 'prop-types';

class Pokedex extends React.Component {
  render() {
    const { pokemon: { name, type, image, moreInfo } } = this.props;
    return (
      <div className="info">
        <img src={ image } alt={ name } />
        <div className="content">
          <p><strong>{ name }</strong></p>
          <p>Type: { type }</p>
          <br></br>
          <a href={ moreInfo }>More Info</a>
        </div>
      </div>
    )
  }
}

Pokedex.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    img: PropTypes.string,
  }).isRequired,
};

export default Pokedex;