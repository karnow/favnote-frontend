import React from 'react';
import styled from 'styled-components';
import { Formik, Form } from 'formik';
import AxiosApiNote from 'api/axiosApi';
import { useNavigate } from 'react-router';
import AuthTemplate from 'templates/AuthTemplate';
import Heading from 'components/atoms/Heading/Heading';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import { Link } from 'react-router-dom';

const StyledForm = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledInput = styled(Input)`
  margin: 0 0 30px 0;
  height: 40px;
  width: 300px;
`;

const StyledLink = styled(Link)`
  display: block;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: black;
  text-transform: uppercase;
  margin: 20px 0 50px;
`;

const RegisterPage = () => {
  const navigate = useNavigate();
  return (
    <AuthTemplate>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={({ username, password }, { setSubmitting }) => {
          console.log(username, password);

          AxiosApiNote.register(username, password)
            .then((result) => {
              console.log(result);
              navigate('/');
            })
            .catch((err) => console.log(err));
          setSubmitting(false);
        }}
      >
        {({ handleChange, handleBlur, values }) => (
          <>
            <Heading>Sign in</Heading>
            <StyledForm>
              <StyledInput
                type='text'
                name='username'
                placeholder='Login'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
              />
              <StyledInput
                type='password'
                name='password'
                placeholder='Password'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              <Button activecolor='notes' type='submit'>
                register
              </Button>
            </StyledForm>
            <StyledLink as={Link} to={'/'}>
              I want to log in!
            </StyledLink>
          </>
        )}
      </Formik>
    </AuthTemplate>
  );
};

export default RegisterPage;
