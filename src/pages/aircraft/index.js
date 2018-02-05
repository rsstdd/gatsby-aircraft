import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

const IndexAircraft = ({ data }) => (
  <div>
    <h1>WWII Era Military Aircraft</h1>

    <blockquote>
      Flying a good airplane doesn't require near as much attention as a motor car.
      <br />
      -- Charles Lindbergh
    </blockquote>

    {data.allAircraftJson.edges.map((node, key) => (
      <Link
        key={key}
        to={`/${node.node.fields.slug}`}
        style={{
          textDecoration: `none`,
          border: `1px dashed`,
          display: `block`,
          padding: `1rem`,
          marginBottom: `1rem`,
        }}
      >
        <div>
          <b>{node.node.name}</b> -- {node.node.countryOfOrigin}
          <p>
            {node.node.description
              .split(' ')
              .slice(0, 30)
              .join(' ') + ' ...'}
          </p>
        </div>
      </Link>
    ))}
  </div>
);

export default IndexAircraft;

IndexAircraft.propTypes = {
  data: PropTypes.object,
};


/*eslint no-undef: "off"*/
export const query = graphql`
  query allAircraftQuery {
    allAircraftJson {
      edges {
        node {
          fields {
            slug
          }
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
    }
  }
`;
