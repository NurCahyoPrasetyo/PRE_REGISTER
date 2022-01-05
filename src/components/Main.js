import React from "react";

const Main = ({handleModal}) => {
  return (
    <section className="app-section">
      <h1 className="title">Title Heading</h1>
      <div className="btn-link" onClick={handleModal}>
        <p>PRE-REGISTER</p>
      </div>
    </section>
  );
};

export default Main;
