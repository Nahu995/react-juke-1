import React from 'react'

export default ({selectedSong, start, songs}) => (
  <table className='table'>
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Artists</th>
        <th>Genre</th>
      </tr>
    </thead>
    <tbody>
      {songs && songs.map(song =>
      <tr className={selectedSong.id === song.id ?  'active' : ''} key={song.id}>
        <td>
          {selectedSong.id !== song.id ?
          <button className="btn btn-default btn-xs" onClick={() => start(song, songs)}>
              <span className="glyphicon glyphicon-play"></span>
          </button>
          :
          <button className="btn btn-default btn-xs" onClick={() => start(song, songs)}>
              <span className="glyphicon glyphicon-pause"></span>
          </button>
          }
        </td>
        <td>{song.name}</td>
        <td>{song.artists.map(artist => artist.name).join(', ')}</td>
        <td>{song.genre}</td>
      </tr>
      )}
    </tbody>
  </table>
)