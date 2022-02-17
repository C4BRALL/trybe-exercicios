import React from "react";
import Pokemon from './Pokedex';
import PropTypes from 'prop-types';

class Pokelist extends React.Component {
  render() {
    const { poke } = this.props;
    return (
      <div>
        { poke.map((pokemon) => <Pokemon key={ pokemon.id } pokemon={ pokemon } />) }
      </div>
    )
  }
}

Pokelist.propTypes = {
  poke: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      type: PropTypes.string,
      img: PropTypes.string,
    })
  ).isRequired,
};

export default Pokelist;