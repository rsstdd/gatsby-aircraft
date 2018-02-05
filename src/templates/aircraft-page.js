import React from 'react';

const AircraftPage = ({ data }) => {
  const aircraft = data.aircraftJson;
  {console.log(aircraft, '<=')}
  return (
    <div>
      <h1>{aircraft.name}</h1>
      <p>
        <strong>{aircraft.countryOfOrigin}</strong>
        <strong>{aircraft.yearInService}</strong>
        <strong>{aircraft.operators}</strong>
        <strong>{aircraft.maxSpeed}</strong>
        <strong>{aircraft.maxRange}</strong>
        <strong>{aircraft.ceiling}</strong>
        <strong>{aircraft.engines}</strong>
      </p>
      <p>{aircraft.description}</p>
      <img src={aircraft.imgUrl} alt={aircraft.name} />
    </div>
  );
};

export const query = graphql`
  query AircraftPage($slug: String!) {
    aircraftJson(fields: { slug: { eq: $slug } }) {
      name
      description
      yearInService
      countryOfOrigin
      operators
      maxSpeed
      maxRange
      ceiling
      engines
      imgUrl404
    }
  }
`;

export default AircraftPage;
