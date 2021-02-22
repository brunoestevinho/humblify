import React, { useState, useEffect } from "react";

import { getUser } from "../utils/functions";
import Loading from "./Loading";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUser();

      setUser(data.data);
    };
    fetchData();
  }, []);

  return (
    <React.Fragment>
      {user ? (
        <div className="home-content">
          <header>
            <h1 className="text-4xl pt-16">Hello {user.display_name}</h1>
          </header>

          <section className="home-section">
            <div>
              <div>
                <h3 className="text-lg pb-6">Your email is {user.email}</h3>
                <h3 className="text-lg pb-6">
                  You currently have {user.followers.total} followers
                </h3>
                <h3 className="text-lg pb-6">
                  {user.product === "premium" ? (
                    <span>You're a premium user</span>
                  ) : (
                    <span>You're not a premium user</span>
                  )}
                </h3>
              </div>
            </div>
            <div>
              <a
                href={user.external_urls.spotify}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="border-2 border-green-700 rounded-full p-2 text-center my-3 inline-block focus:outline-none">
                  View on Spotify
                </button>
              </a>
            </div>
          </section>
        </div>
      ) : (
        <Loading />
      )}
    </React.Fragment>
  );
};

export default Profile;
