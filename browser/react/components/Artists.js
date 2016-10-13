'use strict';
import{ Link } from 'react-router'
import React from 'react';

export default ({ artists, go }) => (
  <div>
    <h3>Artists</h3>
      <div className="list-group">
      {
        artists.map(artist => (
          <div className="list-group-item" key={ artist.id }>
            <Link to={() => go(artist)}>{ artist.name }</Link>
          </div>
        ))
      }
    </div>
  </div>
);
