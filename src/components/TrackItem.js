import React from "react";
import { convertMs } from "../utils/functions";

const TrackItem = ({ track }) => (
  <React.Fragment>
    <tr key={track.track_number}>
      <td rowspan="2" className="py-4">
        {track.track_number}
      </td>
      <td className="pt-4">{track.name}</td>
      <td rowspan="2" className="text-right py-4">
        {convertMs(track.duration_ms)}
      </td>
    </tr>
    <tr>
      <td className="text-sm text-gray-400">
        {track.artists.map((artist, i) => (
          <span key={i}>
            {artist.name}
            {track.artists.length > 0 && i === track.artists.length - 1
              ? ""
              : ","}
            &nbsp;
          </span>
        ))}
      </td>
    </tr>
  </React.Fragment>
);

export default TrackItem;
