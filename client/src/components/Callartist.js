import React from "react";
import axios from 'axios';

class Callartist extends React.Component {
  state = {
    artists: []
  }

  componentDidMount() {
    axios.get(`http://localhost:3001/api/artists`)
      .then(res => {
        const artists = res.data;
        this.setState({ artists })
        console.log(artists)
      })
  };

  render() {

    return (
      <div className="container artistDrop">
        <form id="getArtistImages">
          <div className="form-group">
            <label for="allartist">Artist Name:</label>
            <select name="artist_id" className="custom-select mr-sm-2" id="allartist_id">
              <option selected>Choose...</option>
              {this.state.artists.map(artist => <option value={artist.id}>{artist.artist_firstName} {artist.artist_lastName}</option>)}
            </select>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default Callartist;