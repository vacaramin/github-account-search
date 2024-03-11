import { useState ,useRef, useEffect} from "react";
import CSS from "./InputForm.module.css"

const InputForm = (props) => {
  const [username, setUserName] = useState("");
  const inputfocus = useRef();

  useEffect(()=>{
      inputfocus.current.focus();
  },[username])

  const handleSubmit = (e) => {
    e.preventDefault();
    props.SearchUsername(username)

  };

  return (
    <form onSubmit={handleSubmit} className={CSS["search-form"]}>
      <input
      ref={inputfocus}
        type="text"
        placeholder="Enter github username"
        value={username}
        className={CSS["search-input"]}
        onChange={(e) => setUserName(e.target.value)}
        spellCheck={true}
      />
      <button type="submit" className={CSS["search-btn"]}>
        Search
      </button>
    </form>
  );
};

export default InputForm;
