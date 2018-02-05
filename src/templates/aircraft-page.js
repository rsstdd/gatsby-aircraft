import React from 'react';

const AircraftPage = ({ data }) => {
  const aircraft = data.aircraftJson;
  return (
    <div>
      <h1>{aircraft.name}</h1>
      <p><b>Country of Origin:</b> {aircraft.countryOfOrigin}</p>
      <p><b>Year in Service:</b> {aircraft.yearInService}</p>
      <p><b>Powerplant:</b> {aircraft.engines}</p>
      <p><b>Max Speed:</b> {aircraft.maxSpeed} mph</p>
      <p><b>Max Range:</b> {aircraft.maxRange} miles</p>
      <p><b>Operational Ceiling:</b> {aircraft.ceiling}ft</p>
      <p><b>Operators:</b> {aircraft.operators}</p>
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
      imgUrl
    }
  }
`;

export default AircraftPage;
