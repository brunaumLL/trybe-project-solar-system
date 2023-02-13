import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system" className="planet-container">
        <div className="title-card">
          <Title headline="Planetas" />
        </div>
        <div className="planets-card">
          { Planets.map(({ name, image }) => (
            <PlanetCard key={ name } planetName={ name } planetImage={ image } />
          )) }
        </div>
      </div>
    );
  }
}

export default SolarSystem;
