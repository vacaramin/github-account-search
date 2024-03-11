import { useState } from "react";
import CSS from "./App.module.css";
import InputForm from "./components/Github-Searching-Input/InputForm";
import GithubResult from "./components/Github-Result/GithubResult";
import axios from "axios";

function App() {
  const [userProfile, setUserProfile] = useState(null);
  const [error, setError] = useState(null);

  const handleSearchUsername = async (username) => {
    await axios
      .get(`https://api.github.com/users/${username}`)
      .then((res) => {
        setUserProfile(res.data);
        setError(null)
      })
      .catch((error) => {
        setError("User Not Found");
        setUserProfile(null)
      });
  };

  return (
    <div className={CSS["container"]}>
      <h1 className={CSS["heading"]}>Github Profile Searching</h1>
      <InputForm searchUsername={handleSearchUsername}/>
      {error && <p className={CSS['error']}>{error}</p>}
      {userProfile && <GithubResult userProfile={userProfile}/> }
    </div>
  );
}

export default App;
