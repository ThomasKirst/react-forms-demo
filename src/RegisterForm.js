import { useEffect, useState } from 'react';
import Tags from './Tags';

import styled from 'styled-components/macro';

export default function RegisterForm() {
  const [userProfile, setUserProfile] = useState({
    firstName: '',
    lastName: '',
    email: '',
    gender: 'female',
    toc: false,
    tags: [],
  });
  const [formIsValid, setFormIsValid] = useState(false);

  function updateTags(tag) {
    setUserProfile({
      ...userProfile,
      tags: [...userProfile.tags, tag],
    });
  }

  function sendForm(event) {
    event.preventDefault();
    if (validateForm(userProfile)) {
      alert('Success');
    } else {
      alert('ERROR: Check your input');
    }
    console.log(userProfile);
  }

  function handleChange(event) {
    const fieldValue =
      event.target.name === 'toc' ? event.target.checked : event.target.value;

    setUserProfile({
      ...userProfile,
      [event.target.name]: fieldValue,
    });
  }

  useEffect(() => setFormIsValid(validateForm(userProfile)), [userProfile]);

  return (
    <FormWrapper onSubmit={sendForm}>
      <h1>Register</h1>
      <Fieldset>
        <div>
          <label htmlFor="firstName">
            <strong>First name</strong>
          </label>
          <input
            type="text"
            name="firstName"
            onChange={handleChange}
            value={userProfile.firstName}
          />
        </div>

        <div>
          <label htmlFor="lastName">
            <strong>Last name</strong>
          </label>
          <input
            type="text"
            name="lastName"
            onChange={handleChange}
            value={userProfile.lastName}
          />
        </div>
      </Fieldset>

      <div>
        <label>
          <strong>Email</strong>
          <input
            type="text"
            name="email"
            onChange={handleChange}
            value={userProfile.email}
          />
        </label>
      </div>

      <h4>Gender</h4>
      <Fieldset>
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={userProfile.gender === 'male'}
            onChange={handleChange}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={userProfile.gender === 'female'}
            onChange={handleChange}
          />
          Female
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="diverse"
            checked={userProfile.gender === 'diverse'}
            onChange={handleChange}
          />
          Diverse
        </label>
      </Fieldset>

      <Tags
        onUpdateTags={updateTags}
        tags={userProfile.tags}
        headline="Your interests"
      />

      <label>
        <input type="checkbox" name="toc" onChange={handleChange} />
        <small>
          I read the terms and conditions and hereby confirm that I read them
          all.
        </small>
      </label>

      <div>
        <Button disabled={!formIsValid}>Register</Button>
      </div>
    </FormWrapper>
  );
}

const validateName = ({ firstName, lastName }) =>
  firstName.length >= 2 && lastName.length >= 2;

const hasValidDomain = (email) => {
  const parts = email.split('.');
  return parts.length >= 2 && parts[parts.length - 1].length >= 2;
};

const validateEmail = ({ email }) =>
  email.includes('@') && hasValidDomain(email);

const tocAccepted = ({ toc }) => toc;

const validateForm = (userProfile) =>
  validateName(userProfile) &&
  validateEmail(userProfile) &&
  tocAccepted(userProfile);

const FormWrapper = styled.form`
  display: grid;
  gap: 1.25rem;
  max-width: 380px;
  font-family: sans-serif;

  margin: 0 auto;

  h4 {
    margin-bottom: 0.5rem;
  }

  fieldset {
    border: none;
    padding: 0;
  }

  small {
    color: #999;
  }

  input[type='text'],
  input[type='email'] {
    display: block;
  }

  input[type='radio'] {
    margin: 0 0.5rem 1rem 0;
    padding: 0;
    transform: scale(1.5);
  }
  input[type='checkbox'] {
    transform: scale(1.5);
    margin-right: 0.5rem;
  }
`;

const Fieldset = styled.fieldset`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  border: none;
  border-radius: 5px;
  background-color: deeppink;
  color: ivory;
  font-size: 1.25rem;
  padding: 1rem 2rem;
  transition: background-color ease-in-out 1s;
  &[disabled] {
    background-color: #ccc;
  }
`;
