import React from 'react'

export default ({albums})=>(
  <div className="col-xs-10">
    <div className="albums">
      <h3>Albums</h3>
      <div className="row">
      {console.log(albums)}
      {albums.map(album => 
        <div className="col-xs-4" key={album.id}>
          <a className="thumbnail" href="#">
            <img src={album.imageUrl} />
            <div className="caption">
              <h5>
                <span>{album.name}</span>
              </h5>
              <small>{album.songs.length} songs</small>
            </div>
          </a>
        </div>
        )}
      </div>
    </div>
  </div>
)