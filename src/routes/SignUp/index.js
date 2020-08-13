import React from 'react';

import Form from '@components/Form';
import Field from '@components/Field';
import Button from '@components/Button';
import Input from '@components/Input';

import {
  signUpPageContainer,
  signUpFormContainer,
  signUpTitle,
} from './styles.scss';

export default () => (
  <div className={signUpPageContainer}>
    <div className={signUpFormContainer}>
      <h1 className={signUpTitle}>Sign up</h1>

      <Form onSubmit={(values) => console.log(values)}>
        <Field title="Username" name="test">
          {({ name, onBlur, onChange, onFocus, value }) => (
            <Input onChange={onChange} value={value} />
          )}
        </Field>
      </Form>
    </div>
  </div>
);
