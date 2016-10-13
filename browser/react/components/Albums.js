'use strict';

import React from 'react';

class Albums extends React.Component {
  constructor(){
    super();
  }

  componentDidMount(){
    fetch('/api/albums')
      .then(res => res.json())
      .then(albums => albums.map(album => this.props.go(album)))
      .catch(err => console.error(err))
  }

  render() {
    return (
      <div>
        <h3>Albums</h3>
        <div className="row">
          {
            albums.map(album => (
              <div className="col-xs-4" key={ album.id }>
                <a className="thumbnail" href="#" onClick={() => go(album)}>
                  <img src={ album.imageUrl } />
                  <div className="caption">
                    <h5>
                      <span>{ album.name }</span>
                    </h5>
                    <small>{ album.songs.length } songs</small>
                  </div>
                </a>
              </div>
            ))
          }
        </div>
      </div>
      )
    }

}


