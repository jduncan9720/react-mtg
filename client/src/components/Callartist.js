import React from "react";

function Body() {
    
return(
<div className="container">
<h3>See artist images:</h3>
          <form id="getArtistImages">
            <div class="form-group">
              <label for="allartist_id">Artist Name:</label>
              <select name="artist_id" class="custom-select mr-sm-2" id="allartist_id">
                <option selected>Choose...</option>
              </select>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
</div>
);
}

export default Body;