import React from 'react';
import { Form } from 'react-final-form';

export default ({ onSubmit, validation, children }) => (
  <Form
    onSubmit={onSubmit}
    validate={validation}
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>{children}</form>
    )}
  />
);
