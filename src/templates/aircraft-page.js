import React from 'react';

const AircraftPage = ({ data }) => {
  const aircraft = data.aircraftJson;
  return (
    <div>
      <h1>{aircraft.name}</h1>
      <p>
        <strong>{aircraft.countryOfOrigin}</strong>
      </p>
      <p>{aircraft.description}</p>
    </div>
  );
};

export const query = graphql`
  query AircraftPage($slug: String!) {
    aircraftJson(fields: { slug: { eq: $slug } }) {
      name
      countryOfOrigin
      description
    }
  }
`;

export default AircraftPage;
