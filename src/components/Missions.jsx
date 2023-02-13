import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import Mission from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        { Mission.map(({ name, year, country, destination }) => (
          <MissionCard
            key={ name }
            name={ name }
            year={ year }
            country={ country }
            destination={ destination }
          />
        )) }
      </div>
    );
  }
}

export default Missions;
