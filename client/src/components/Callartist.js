import React from "react";

import axios from 'axios';

export class Callartist extends React.Component {
  state = {
    artists: []
  }
  
  componentDidMount() {
    axios.get(`http://localhost:3001/api/artists`)
      .then(res => {
        const artists = res.data;
        console.log(artists)
      })
  };

 render() {

  return (
    <div className="container">
    <ul>
      
    </ul>
      
    </div>
  );
 }
}

export default Callartist;