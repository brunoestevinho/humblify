import React, { useState } from "react";

import { getNewReleases } from "../utils/functions";
import Like from "./Like";

const NewReleases = () => {
  const [liked, setLike] = useState(false);

  function onLikeHandler() {
    setLike(!liked);
  }

  return (
    <React.Fragment>
      <div className="home-content">
        <header>
          <h1 className="text-4xl">Hello User</h1>
        </header>

        <section className="home-section">
          <div>
            <div>
              <h3 className="text-2xl pb-12">
                <Like />
              </h3>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default NewReleases;
