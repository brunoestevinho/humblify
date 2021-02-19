import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getAlbum } from "../utils/functions";
import Loading from "./Loading";
import TrackItem from "./TrackItem";
import Like from "./Like";

const Album = () => {
  const { albumId } = useParams();
  const [album, setAlbum] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAlbum(albumId);
      setAlbum(data);
    };
    fetchData();
  }, [albumId]);

  return (
    <React.Fragment>
      {album ? (
        <div className="album-container">
          <div className="album-content">
            <div className="artwork">
              {album.data.images.length && (
                <img src={album.data.images[1].url} alt="Album Artwork" />
              )}
            </div>
            <div className="description px-3 font-bold space-y-2">
              <h3 className="text-gray-300">
                {album.data.album_type.charAt(0).toUpperCase() +
                  album.data.album_type.slice(1)}
              </h3>
              <h1 className="text-3xl">{album.data.name}</h1>
              <h2 className="text-xl text-gray-500">
                {album.data.artists &&
                  album.data.artists.map(({ name }, i) => (
                    <span key={i}>
                      {name}
                      {album.data.artists.length > 0 &&
                      i === album.data.artists.length - 1
                        ? ""
                        : ","}
                      &nbsp;
                    </span>
                  ))}
              </h2>
              <h3 className="text-gray-300">
                {new Date(album.data.release_date).getFullYear()}
              </h3>
            </div>
          </div>
          <div>
            <button className="border-2 border-green-700 rounded-full p-2 text-center ml-14 mr-2 mb-1 inline-block align-middle">
              <a
                href={album.data.external_urls.spotify}
                target="_blank"
                rel="noopener noreferrer"
              >
                Play on Spotify
              </a>
            </button>
            <Like />

            <div className="tracklist">
              <table>
                <thead className="border-b-2 border-gray-700">
                  <tr>
                    <th className="text-left w-8 py-1">#</th>
                    <th className="text-left py-1">Title</th>
                    <th className="text-right w-20 py-1">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  {album.data.tracks ? (
                    album.data.tracks.items.map((track, i) => (
                      <TrackItem track={track} />
                    ))
                  ) : (
                    <Loading />
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </React.Fragment>
  );
};

export default Album;
