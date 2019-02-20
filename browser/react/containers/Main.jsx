import React from 'react'
import axios from'axios'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import Albums from '../components/Albums'

export default class Main extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      albums: []
    }
  }
  componentDidMount(){
    axios.get('/api/albums')
    .then( response => response.data)
    .then( data => this.setState({albums:data}))
    .catch( err => console.log(err))
  }




  render(){
    return(
      <div id="main" className="container-fluid">
        <Sidebar />
        <Albums albums={this.state.albums}/>
        <Footer />
      </div>

    )
  }
}