import React, { Component } from "react";
import { SpotifyApiContext } from "react-spotify-api";
import Cookies from "js-cookie";
import axios from "axios";
import { SpotifyAuth, Scopes } from "react-spotify-auth";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lastListenedTracks: [],
    };
  }

  componentDidMount() {
    const token = Cookies.get("spotifyAuthToken");

    //e.preventDefault();

    axios
      .get("https://api.spotify.com/v1/me/player/recently-played", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(async (response) => {
        for (let i = 0; i < response.data.items.length; i++) {
          const trackItems = response.data.items[i];

          let arrArtist = [];
          for (let x = 0; x < trackItems.track.artists.length; x++) {
            const artist = trackItems.track.artists[x];
            arrArtist.push(artist.name);
          }
          this.setState({
            lastListenedTracks: [
              ...this.state.lastListenedTracks,
              Object.assign({
                id: trackItems.track.id,
                track: trackItems.track.name,
                album: trackItems.track.album.name,
                artists: arrArtist.join(),
                cover: trackItems.track.album.images[0].url,
              }),
            ],
          });
        }
        console.log(this.state);
      })
      .catch(console.log);
  }

  render() {
    const token = Cookies.get("spotifyAuthToken");

    return (
      <div className="App">
        {token ? (
          <SpotifyApiContext.Provider value={token}>
            <h1>Your recently played tracks!</h1>
            <div className="grid">
              {this.state.lastListenedTracks.map((item) => {
                return (
                  <Card style={{ width: "18rem" }}>
                    <Card.Img src={item.cover} alt={item.album} />
                    <Card.ImgOverlay>
                      <Card.Title>{item.track}</Card.Title>
                      <Card.Text>{item.artists}</Card.Text>
                      <Card.Text>{item.album}</Card.Text>
                    </Card.ImgOverlay>
                  </Card>
                );
              })}
            </div>
          </SpotifyApiContext.Provider>
        ) : (
          // Display the login page
          <SpotifyAuth
            redirectUri="http://localhost:3000/callback"
            clientID="6bd413ba51b941f99b32b4da3d082ffd"
            scopes={[Scopes.userReadRecentlyPlayed]} // either style will work
          />
        )}
      </div>
    );
  }
}

export default App;
