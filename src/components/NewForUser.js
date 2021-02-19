import React, { useState, useEffect } from "react";

import { getFollowing, getAlbums, flattenObject } from "../utils/functions";
import NewItem from "./NewItem";
import Loading from "./Loading";

const NewForUser = () => {
  const [artists, setArtists] = useState(null);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      var tempData = [];
      var lastID = " ";

      do {
        var data = await getFollowing(lastID);
        lastID = data.data.artists.cursors.after;
        tempData.push(data.data.artists.items);
      } while (data.data.artists.cursors.after !== null);

      var flattenedData = flattenObject(tempData);

      setArtists(flattenedData);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      var tempData = [];
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
        for (var artist in artists) {
          var data = await getAlbums(artists[artist].id);

          tempData.push(
            data.data.items.filter(
              (album) => new Date(album.release_date) > today
            )
          );
        }
      }
      //filter empty objects from array
      var filteredData = tempData.filter(
        (value) => Object.keys(value).length !== 0
      );

      var flattenedData = flattenObject(filteredData);

      setAlbums(flattenedData);
    };

    fetchData();
  }, [artists]);

  const filteredAlbums = albums
    .filter((album) => album.album_type === "album")
    //below filter appears to work??
    .filter(
      (album, index, self) =>
        index ===
        self.findIndex((t) => t.place === album.place && t.name === album.name)
    )
    .sort((a, b) => {
      return new Date(b.release_date) - new Date(a.release_date);
    });
  const filteredSingles = albums
    .filter((album) => album.album_type === "single")
    //below filter appears to work??
    .filter(
      (album, index, self) =>
        index ===
        self.findIndex((t) => t.place === album.place && t.name === album.name)
    )
    .sort((a, b) => {
      return new Date(b.release_date) - new Date(a.release_date);
    });

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
                {Object.keys(filteredAlbums).length !== 0 ? (
                  filteredAlbums.map((album, i) => (
                    <NewItem data={album} key={i} />
                  ))
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
                {Object.keys(filteredSingles).length !== 0 ? (
                  filteredSingles.map((album, i) => (
                    <NewItem data={album} key={i} />
                  ))
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

export default NewForUser;
