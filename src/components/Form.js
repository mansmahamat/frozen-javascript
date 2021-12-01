import React from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import CustomForm from './CustomForm';
import './form.css';

function Form() {
  // eslint-disable-next-line no-undef
  const postEmailUrl = `https://gmail.us19.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

  return (
    <div className="mc__form-container">
      <MailchimpSubscribe
        url={postEmailUrl}
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      />
    </div>
  );
}

export default Form;
