import React from 'react'
import Songs from './Songs'
export default ({ album, start, selectedSong }) => (
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
  </div>
);