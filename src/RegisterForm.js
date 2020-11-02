import { useState } from 'react';

import styled from 'styled-components/macro';

export default function RegisterForm() {
  const [userProfile, setUserProfile] = useState({
    firstName: '',
    lastName: '',
    email: '',
    gender: 'female',
    toc: false,
  });

  function sendForm(event) {
    event.preventDefault();
    console.log(userProfile);
  }

  function handleChange(event) {
    const fieldValue =
      event.target.name === 'toc' ? event.target.checked : event.target.value;
    console.log(fieldValue);
    setUserProfile({
      ...userProfile,
      [event.target.name]: fieldValue,
    });
  }

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
            type="email"
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

      <label>
        <input type="checkbox" name="toc" onChange={handleChange} />
        <small>
          I read the terms and conditions and hereby confirm that I read them
          all.
        </small>
      </label>

      <div>
        <Button>Register</Button>
      </div>
    </FormWrapper>
  );
}

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
  background: deeppink;
  color: ivory;
  font-size: 1.25rem;
  padding: 1rem 2rem;
`;
