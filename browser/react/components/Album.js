'use strict';

import React from 'react';
import SongsContainer from '../containers/SongsContainer';

export default class Album extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
  fetch(`/api/albums/${this.props.params.albumId}`)
    .then(response =>response.json())
    .then(album => this.props.fetchAlbum(album))
    .catch(err => console.error(err.stack))
  }
  render(){
    console.log('selected album: ', this.props.selectedAlbum)
    return (
        <div className="album">
          <div>
              <h3>{ this.props.selectedAlbum.name }</h3>
              <img src={ this.props.selectedAlbum.imageUrl } className="img-thumbnail" />
          </div>
          <SongsContainer songs={this.props.selectedAlbum.songs || []} />
        </div>
    )
  }
}




