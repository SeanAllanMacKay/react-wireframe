import React from 'react';
import { Field } from 'react-final-form';

export default ({ title, name, placeholder, children }) => (
  <>
    <p>{title}</p>

    <Field name={name}>
      {({
        input: { name, onBlur, onChange, onFocus, value },
        meta: { touched, error },
      }) => (
        <>
          {children({ name, onBlur, onChange, onFocus, value })}
          <div>{touched && error && <span>{error}</span>}</div>
        </>
      )}
    </Field>
  </>
);
