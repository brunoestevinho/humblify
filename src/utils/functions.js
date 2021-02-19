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
export const getFollowing = (lastID) =>
  axios.get(
    `https://api.spotify.com/v1/me/following?type=artist&after=${lastID}&limit=50`,
    {
      headers: getHeaders(),
    }
  );

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

/* Get an Album */
export const getAlbum = (albumId) =>
  axios.get(`https://api.spotify.com/v1/albums/${albumId}`, {
    headers: getHeaders(),
  });

/* Get an Album */
export const getAlbum = (albumId) =>
  axios.get(`https://api.spotify.com/v1/albums/${albumId}`, {
    headers: getHeaders(),
  });

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

//Convert ms to min:sec
export const convertMs = (millis) => {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
};
