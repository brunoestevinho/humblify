import React, { useState, useEffect } from "react";

import { getSavedAlbums } from "../utils/functions";
import NewItem from "./NewItem";
import Loading from "./Loading";

const SavedAlbums = () => {
  const [albums, setAlbums] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getSavedAlbums();

      setAlbums(data);
    };

    fetchData();
  }, []);

  return (
    <React.Fragment>
      {albums ? (
        <div className="home-content">
          <header>
            <h1 className="text-4xl">Your Saved Albums</h1>
          </header>

          <section className="home-section">
            <div>
              <div>
                <h3 className="text-2xl pb-12">New Albums</h3>
              </div>
              <ul>
                {albums ? (
                  albums.data.items
                    .sort((a, b) => {
                      return new Date(b.added_at) - new Date(a.added_at);
                    })
                    .map((album, i) => <NewItem data={album.album} key={i} />)
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

export default SavedAlbums;
