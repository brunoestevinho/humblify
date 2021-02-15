import axios from "axios";
import Cookies from "js-cookie";

console.log("api calls");

/**
 * Fetch token through cookies
 */
export const token = Cookies.get("spotifyAuthToken");

const headers = {
  Authorization: `Bearer ${token}`,
  "Content-Type": "application/json",
};

/**
 * Get Current User's Profile
 * https://developer.spotify.com/documentation/web-api/reference/users-profile/get-current-users-profile/
 */
export const getUser = () =>
  axios.get("https://api.spotify.com/v1/me", { headers });

/**
 * Get Current User's Recently Played Tracks
 * https://developer.spotify.com/documentation/web-api/reference/player/get-recently-played/
 */
export const getRecentlyPlayed = () =>
  axios.get("https://api.spotify.com/v1/me/player/recently-played", {
    headers,
  });

/**
 * Get an Artist
 * https://developer.spotify.com/documentation/web-api/reference/artists/get-artist/
 */
export const getArtist = (artistId) =>
  axios.get(`https://api.spotify.com/v1/artists/${artistId}`, { headers });

/**
 * Get a List of New Releases
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-new-releases/
 */
export const getNewReleases = () =>
  axios.get("https://api.spotify.com/v1/browse/new-releases", { headers });

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
