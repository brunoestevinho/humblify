import React, { useState, useEffect } from "react";

import { catchErrors, getNewReleases } from "../apiCalls";
import NewItem from "./NewItem";

const NewReleases = () => {
  const [newAlbums, setNewAlbums] = useState(null);
  console.log("rendering new-releases.js");

  useEffect(() => {
    const fetchData = async () => {
      const newAlbums = await getNewReleases();

      setNewAlbums(newAlbums);
    };
    catchErrors(fetchData());
  }, []);

  return (
    <React.Fragment>
      {newAlbums ? (
        <div className="home-content">
          <header>
            <h1 className="text-4xl">Recent Nav</h1>
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

export default NewReleases;
