/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import InputField from './InputField';

function CustomForm({ status, message, onValidated }) {
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status]);

  const clearFields = () => {
    setEmail('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      email.indexOf('@') > -1 &&
      onValidated({
        EMAIL: email
      });
  };

  return (
    <form className="mc__form" onSubmit={(e) => handleSubmit(e)}>
      <h3 className="mc__title">
        {status === 'success' ? 'Success!' : 'Join my email list for future books.'}
      </h3>

      {status === 'sending' && <div className="mc__alert mc__alert--sending">sending...</div>}
      {status === 'error' && (
        <div className="mc__alert mc__alert--error" dangerouslySetInnerHTML={{ __html: message }} />
      )}
      {status === 'success' && (
        <div
          className="mc__alert mc__alert--success"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}

      {status !== 'success' ? (
        <div className="mc__field-container">
          <InputField
            label="Email"
            onChangeHandler={setEmail}
            type="email"
            value={email}
            placeholder="your@email.com"
            isRequired
          />
        </div>
      ) : null}

      <InputField label="subscribe" type="submit" formValues={[email]} />
    </form>
  );
}

export default CustomForm;
