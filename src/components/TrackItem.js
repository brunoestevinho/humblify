import React from "react";

const TrackItem = ({ track }) => (
  <li>
    <a to={`/track/${track.id}`}>
      <div>
        <div>
          {track.album.images.length && (
            <img src={track.album.images[2].url} alt="Album Artwork" />
          )}
        </div>
      </div>
      <div>
        <span>
          {track.name && <span>{track.name}</span>}
          {track.artists && track.album && (
            <div>
              {track.artists &&
                track.artists.map(({ name }, i) => (
                  <span key={i}>
                    {name}
                    {track.artists.length > 0 && i === track.artists.length - 1
                      ? ""
                      : ","}
                    &nbsp;
                  </span>
                ))}
              &nbsp;&middot;&nbsp;&nbsp;
              {track.album.name}
            </div>
          )}
        </span>
        <span>2min</span>
      </div>
    </a>
  </li>
);

export default TrackItem;
