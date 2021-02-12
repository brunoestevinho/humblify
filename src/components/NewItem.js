import React from "react";

const NewItem = ({ track }) => (
  <li>
    <div className="item">
      <div>
        <div>
          {track.images.length && (
            <img src={track.images[1].url} alt="Album Artwork" />
          )}
        </div>
      </div>
      <div className="item-description">
        <span>
          {track.name && (
            <span>
              <strong>{track.name}</strong>
            </span>
          )}

          <div>
            {track.artists.map((artist, i) => (
              <span key={i}>
                {artist.name}
                {track.artists.length > 0 && i === track.artists.length - 1
                  ? ""
                  : ","}
                &nbsp;
              </span>
            ))}
          </div>
        </span>
      </div>
    </div>
  </li>
);

export default NewItem;
