import React from 'react'
import Songs from './Songs'

export default  class SingleAlbum extends React.Component{

  componentDidMount(){
    this.props.selectAlbum(this.props.albumId)
  }

  render(){
    const {album,start,selectedSong} = this.props;
    return(
      <div className="col-xs-10">
          <div className="album">
            <div>
              <h3>{album.name}</h3>
              <img src={`/api/albums/${album.id}/image`} className="img-thumbnail"/>
            </div>
          </div>
            <Songs
              songs={album.songs}
              start={start}
              selectedSong={selectedSong}
            />
      </div>)
  }
};