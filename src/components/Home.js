import React, { useState, useEffect } from "react";

import { getUserInfo, catchErrors, getNewReleases } from "../apiCalls";
import NewItem from "./NewItem";

const Content = () => {
  const [user, setUser] = useState(null);
  const [topArtists, setTopArtists] = useState(null);
  const [topTracks, setTopTracks] = useState(null);
  const [newAlbums, setNewAlbums] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { user, topArtists, topTracks } = await getUserInfo();
      const newAlbums = await getNewReleases();

      setUser(user);
      setTopArtists(topArtists);
      setTopTracks(topTracks);
      setNewAlbums(newAlbums);
    };
    catchErrors(fetchData());
  }, []);
  console.log(topArtists);
  console.log(newAlbums);

  return (
    <React.Fragment>
      {user ? (
        <div className="home-content">
          <header>
            <h1 className="text-4xl">New releases</h1>
          </header>

          <section className="home-section">
            <div>
              <div>
                <h3 className="text-2xl pb-12">New Albums</h3>
              </div>
              <ul>
                {newAlbums ? (
                  newAlbums.data.albums.items
                    .filter((album) => album.album_type === "album")
                    .slice(0, 10)
                    .map((album, i) => <NewItem track={album} key={i} />)
                ) : (
                  <p>Loading...</p>
                )}
              </ul>
            </div>

            <div>
              <div>
                <h3 className="text-2xl pb-12">New Singles</h3>
              </div>
              <ul>
                {newAlbums ? (
                  newAlbums.data.albums.items
                    .filter((album) => album.album_type === "single")
                    .slice(0, 10)
                    .map((album, i) => <NewItem track={album} key={i} />)
                ) : (
                  <p>Loading...</p>
                )}
              </ul>
            </div>
          </section>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </React.Fragment>
  );
};

export default Content;
