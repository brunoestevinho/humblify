import React, { useState, useEffect } from "react";

import { catchErrors, getNewReleases } from "../utils/apiCalls";

const NewReleases = () => {
  const [newAlbums, setNewAlbums] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const newAlbums = await getNewReleases();

      setNewAlbums(newAlbums);
    };
    catchErrors(fetchData());
  }, []);

  return (
    <React.Fragment>
      {newAlbums ? (
        <div className="home-content">
          <header>
            <h1 className="text-4xl">Hello User</h1>
          </header>

          <section className="home-section">
            <div>
              <div>
                <h3 className="text-2xl pb-12">Your Profile</h3>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </React.Fragment>
  );
};

export default NewReleases;
