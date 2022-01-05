import React, { useState } from "react";
import "./App.css";
import Main from "./components/Main";
import Register from "./components/modal/Register";

const App = () => {
  const [open, setOpen] = useState(false)

  const closeModal = () => setOpen(false)

  return (
    <div className="app">
      {open && <Register handleModal={closeModal}/>}
      <Main handleModal={setOpen}/>
    </div>
  );
};

export default App;
