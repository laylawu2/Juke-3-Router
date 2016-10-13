'use strict';

import { connect } from 'react-redux';
import Album from '../components/Album';
import { fetchAndGoToAlbum } from '../action-creators/albums'

const mapStateToProps = ( {selectedAlbum} ) => ({
  selectedAlbum
});

// function mapStateToProps(selectedAlbum) {
//   return {
//     selectedAlbum: selectedAlbum
//   }
// }

const mapDispatchToProps = function(dispatch) {
  return {
    fetchAlbum: function(album){
      dispatch(fetchAndGoToAlbum(album))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Album);
