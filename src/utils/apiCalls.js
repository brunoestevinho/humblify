import axios from "axios";
import Cookies from "js-cookie";

/* Build Header */
const getHeaders = (token = Cookies.get("spotifyAuthToken")) => {
  return {
    Authorization: "Bearer " + token,
    "Content-Type": "application/json",
  };
};

/* Get Current User's Profile */
export const getUser = () => {
  return axios.get("https://api.spotify.com/v1/me", { headers: getHeaders() });
};

/* Get an Artist */
export const getArtist = (artistId) =>
  axios.get(`https://api.spotify.com/v1/artists/${artistId}`, {
    headers: getHeaders(),
  });

/* Get Users's Followed Artists */
export const getFollowing = () =>
  axios.get("https://api.spotify.com/v1/me/following?type=artist", {
    headers: getHeaders(),
  });

/* Get an Artist's Albums */
export const getAlbums = (artistId) =>
  axios.get(`https://api.spotify.com/v1/artists/${artistId}/albums`, {
    headers: getHeaders(),
  });

/* Get a List of New Releases */
export const getNewReleases = () =>
  axios.get("https://api.spotify.com/v1/browse/new-releases", {
    headers: getHeaders(),
  });

// Higher-order function for async/await error handling
export const catchErrors = (fn) =>
  function (...args) {
    return fn(...args).catch((err) => {
      console.error(err);
    });
  };

// Remove cookie to logout
export const logout = () => {
  Cookies.remove("spotifyAuthToken", {
    path: "react-spotify-auth",
  });
  window.location = "/";
};

//Flatten objects
export const flattenObject = (obj) => {
  return obj.reduce(
    (acc, cur) => acc.concat(Array.isArray(cur) ? flattenObject(cur) : cur),
    []
  );
};
