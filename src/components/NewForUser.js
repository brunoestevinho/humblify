import React, { useState, useEffect } from "react";

import {
  catchErrors,
  getFollowing,
  getAlbums,
  flattenObject,
} from "../utils/apiCalls";
import NewItem from "./NewItem";

const NewForUser = () => {
  const [artists, setArtists] = useState(null);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getFollowing();

      setArtists(data);
      //console.log(data);
    };
    catchErrors(fetchData());
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      var tempAlbums = [];
      var today = new Date();
      //Date 30 days ago
      today = new Date(
        today.getFullYear() +
          "-" +
          (today.getMonth() + 1) +
          "-" +
          today.getDate()
      );
      today.setDate(today.getDate() - 30);

      if (artists) {
        for (var artist in artists.data.artists.items) {
          var data = await getAlbums(artists.data.artists.items[artist].id);
          tempAlbums.push(
            data.data.items.filter(
              (album) => new Date(album.release_date) > today
            )
          );
        }
      }
      //filter empty objects from array
      var filteredAlbums = tempAlbums.filter(
        (value) => Object.keys(value).length !== 0
      );

      var flattened = flattenObject(filteredAlbums);

      setAlbums(flattened);
    };

    catchErrors(fetchData());
  }, [artists]);

  return (
    <React.Fragment>
      {artists ? (
        <div className="home-content">
          <header>
            <h1 className="text-4xl">New releases for you</h1>
          </header>
          <section className="home-section">
            <div>
              <div>
                <h3 className="text-2xl pb-12">New Albums</h3>
              </div>
              <ul>
                {albums ? (
                  albums
                    .filter((album) => album.album_type === "album")
                    //below filter appears to work??
                    .filter(
                      (album, index, self) =>
                        index ===
                        self.findIndex(
                          (t) =>
                            t.place === album.place && t.name === album.name
                        )
                    )
                    .sort((a, b) => {
                      return (
                        new Date(b.release_date) - new Date(a.release_date)
                      );
                    })
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
                {albums ? (
                  albums
                    .filter((album) => album.album_type === "single")
                    //below filter appears to work??
                    .filter(
                      (album, index, self) =>
                        index ===
                        self.findIndex(
                          (t) =>
                            t.place === album.place && t.name === album.name
                        )
                    )
                    .sort((a, b) => {
                      return (
                        new Date(b.release_date) - new Date(a.release_date)
                      );
                    })
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

export default NewForUser;
