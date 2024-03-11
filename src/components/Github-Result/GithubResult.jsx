import CSS from "./GithubResult.module.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import { PiBuildingsFill } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const GithubResult = ({ userProfile }) => {
  return (
    <div>
      <div className={CSS["profile-container"]}>
        <div className={CSS["profile-content"]}>
          <div className={CSS["profile-img"]}>
            <img
              src={userProfile.avatar_url}
              alt="Avatar"
              className={CSS["profile-avatar"]}
            />
            <a
              href={userProfile.html_url}
              target="_blank"
              rel="noreferrer"
              className={CSS["profile-username"]}
            >
              @{userProfile.login}
            </a>
            <p className={CSS["profile-bio"]}>{userProfile.bio}</p>
          </div>
          <div className={CSS["profile-details"]}>
            <div className={CSS["profile-des"]}>
              <h2 className={CSS["profile-name"]}>{userProfile.name}</h2>
              <p className={CSS["profile-created"]}>
                Join Date:{" "}
                {new Date(userProfile.created_at).toLocaleDateString()}
              </p>
            </div>

            <div className={CSS["profile-stats"]}>
              <p className={CSS["profile-repos"]}>
                Repositories
                <br />
                <span className={CSS["stats"]}>{userProfile.public_repos}</span>
              </p>
              <p className={CSS["profile-followers"]}>
                Followers
                <br />
                <span className={CSS["stats"]}>{userProfile.followers}</span>
              </p>
              <p className={CSS["profile-following"]}>
                Following
                <br />
                <span className={CSS["stats"]}>{userProfile.following}</span>
              </p>
            </div>

            <div className={CSS["profile-info"]}>
              <p className={CSS["profile-location"]}>
                <FaMapMarkerAlt /> {userProfile.location}
              </p>
              <p className={CSS["profile-company"]}>
                <PiBuildingsFill /> {userProfile.company}
              </p>
            </div>

            <div className={CSS["profile-links"]}>
              <a
                href={`https://twitter.com/${userProfile.twitter_username}`}
                target="_blank"
                rel="noreferrer"
                className={CSS["twitter-link"]}
              >
                <FaXTwitter />
                {userProfile.twitter_username}
              </a>
              <a
                href={userProfile.html_url}
                target="_blank"
                rel="noreferrer"
                className={CSS["profile-url"]}
              >
                <FaGithub />
                View Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GithubResult;
