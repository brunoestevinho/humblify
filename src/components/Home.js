import React, { useState, useEffect } from "react";

import { getNewReleases } from "../utils/functions";
import NewItem from "./NewItem";
import Loading from "./Loading";

const NewReleases = () => {
  const [newAlbums, setNewAlbums] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const newAlbums = await getNewReleases();

      setNewAlbums(newAlbums);
    };

    fetchData();
  }, []);

  return (
    <React.Fragment>
      {newAlbums ? (
        <div className="home-content">
          <header>
            <h1 className="text-4xl">Recent Albums and Singles</h1>
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
                    .sort((a, b) => {
                      return (
                        new Date(b.release_date) - new Date(a.release_date)
                      );
                    })
                    .map((album, i) => <NewItem data={album} key={i} />)
                ) : (
                  <Loading />
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
                    .sort((a, b) => {
                      return (
                        new Date(b.release_date) - new Date(a.release_date)
                      );
                    })
                    .map((album, i) => <NewItem data={album} key={i} />)
                ) : (
                  <Loading />
                )}
              </ul>
            </div>
          </section>
        </div>
      ) : (
        <Loading />
      )}
    </React.Fragment>
  );
};

export default NewReleases;
