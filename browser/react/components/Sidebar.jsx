import React from 'react'
import {Link} from 'react-router-dom'

export default () => (
  <div className="col-xs-2">
    <sidebar>
      <img src="juke.svg" className="logo" />
      <section>
        <h4 className="menu-item active">
          <Link to="/albums">ALBUMS</Link>
        </h4>
      </section>
    </sidebar>
  </div>
)