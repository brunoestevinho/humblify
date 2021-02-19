import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import { checkAlbum, saveAlbum, removeAlbum } from "../utils/functions";

const Like = () => {
  const [liked, setLike] = useState(false);
  const { albumId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      var boolStatus = await checkAlbum(albumId);

      setLike(boolStatus.data[0]);
    };
    fetchData();
  }, [albumId]);

  function onLikeHandler() {
    if (liked) removeAlbum(albumId);
    else saveAlbum(albumId);
    setLike(!liked);
  }

  return (
    <div className="inline-block align-middle">
      <button className="focus:outline-none">
        {!liked ? (
          <svg
            width="65"
            height="65"
            viewBox="-3.5 -10 30 42.76"
            xmlns="http://www.w3.org/2000/svg"
            fill="red"
            cursor="pointer"
            onClick={onLikeHandler}
          >
            <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181" />
          </svg>
        ) : (
          <svg
            width="65"
            height="65"
            viewBox="-3.5 -10 30 42.76"
            xmlns="http://www.w3.org/2000/svg"
            fill="red"
            cursor="pointer"
            onClick={onLikeHandler}
          >
            <path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default Like;
