import React from "react";

import { Link } from "react-router-dom";

const NewItem = ({ data }) => (
  <li>
    <Link className="item" to={`/album/${data.id}`}>
      <div>
        <div>
          {data.images.length && (
            <img src={data.images[1].url} alt="Album Artwork" />
          )}
        </div>
      </div>
      <div className="item-description">
        <span>
          {data.name && (
            <span>
              <strong>{data.name}</strong>
            </span>
          )}

          <div>
            {data.artists.map((artist, i) => (
              <span key={i}>
                {artist.name}
                {data.artists.length > 0 && i === data.artists.length - 1
                  ? ""
                  : ","}
                &nbsp;
              </span>
            ))}
          </div>
        </span>
      </div>
    </Link>
  </li>
);

export default NewItem;
