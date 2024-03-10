import { useState } from "react";

const InputForm = () => {
  const [username, setUserName] = useState("");
  const handleSubmit = () => {};
  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        placeholder="Enter Github Username...."
        value={username}
        className="search-input"
        onChange={(e) => setUserName(e.target.value)}
      />
      <button type="submit" className="search-btn">
        Search
      </button>
    </form>
  );
};

export default InputForm;
