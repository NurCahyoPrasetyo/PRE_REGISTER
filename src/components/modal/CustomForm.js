import React, { useState, useEffect } from "react";

const CustomForm = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [country, setCountry] = useState("SEA");

  useEffect(() => {
      setEmail("");
      setName("");
      setCountry("SEA");
  }, [status]);

  const submit = () =>
    email &&
    name &&
    country &&
    email.indexOf("@") > -1 &&
    onValidated({
      NAME: name,
      EMAIL: email,
      COUNTRY: country,
      TAGS: "Pre Register",
    });

  const onHandleChange = (data) => {
    if (data.type === "text") {
      setName(data.value);
    } else if (data.type === "email") {
      setEmail(data.value);
    } else {
      setCountry(data.value);
    }
  };

  const countrys = [{value :'SEA'}, {value : 'USA'}, {value :'EU'}, {value :'AUS'}, {value :'MENA'}] 

  return (
    <div>
      {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
      {status === "error" && (
        <div
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          style={{ color: "green" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      <div className="form">
        <input
          className="input"
          onChange={(e) => onHandleChange(e.target)}
          type="text"
          placeholder="Your name"
        />
        <input
          className="input"
          onChange={(e) => onHandleChange(e.target)}
          type="email"
          placeholder="Your email"
        />
        <select className="input" onChange={(e) => onHandleChange(e.target)}>
          {countrys.map((data, i) => 
          <option key={i} value={data.value}>{data.value}</option>
          )}
        </select>
        <button className="btn_submit" onClick={submit}>
          <span>SUBMIT</span>
        </button>
      </div>
    </div>
  );
};

export default CustomForm;
