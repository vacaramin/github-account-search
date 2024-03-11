import { useState, useRef, useEffect } from "react";
import CSS from "./InputForm.module.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const InputForm = (props) => {
  const [username, setUserName] = useState("");
  const inputfocus = useRef();

  useEffect(() => {
    inputfocus.current.focus();
  }, [username]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if(username.trim('')===''){
      toast.error('please enter username!!!')
      return;
    }
    props.searchUsername(username);
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
      <ToastContainer/>
    </form>
  );
};

export default InputForm;
