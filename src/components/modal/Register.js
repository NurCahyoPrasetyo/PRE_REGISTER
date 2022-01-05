import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import CustomForm from "./CustomForm";

const Register = ({handleModal}) => {
  const MAILCHIMP_URL =
    "https://gmail.us20.list-manage.com/subscribe/post?u=87fa41a12ccc41692bc4c0814&amp;id=3e785bb404";
  return (
    <div className="modal">
      <div className="modal-body">
          <p className="close" onClick={handleModal}>X</p>
        <div>
          <div className="title">
            <h1>Start the journey now!</h1>
            <p>Be one of the first to reach the spire.</p>
          </div>
          <div className="form">
            <MailchimpSubscribe
              url={MAILCHIMP_URL}
              render={({ subscribe, status, message }) => (
                <CustomForm
                  status={status}
                  message={message}
                  onValidated={(formData) => subscribe(formData)}
                />
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
};



export default Register;
