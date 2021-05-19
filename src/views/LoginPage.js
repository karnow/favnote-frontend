import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import AxiosApiNote from 'api/axiosApi';
import { Formik, Form } from 'formik';
import AuthTemplate from 'templates/AuthTemplate';
import Heading from 'components/atoms/Heading/Heading';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import { authorise } from 'actions';
import { useDispatch } from 'react-redux';

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

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <AuthTemplate>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={({ username, password }, { setSubmitting }) => {
          console.log(username, password);

          AxiosApiNote.login(username, password)
            .then((respons) => {
              console.log(respons._id);
              localStorage.setItem('userId', respons._id);
              // dispatch(authorise(respons._id));
              navigate('/notes');
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
                sign in
              </Button>
            </StyledForm>
            <StyledLink as={Link} to={'/register'}>
              I want my account!
            </StyledLink>
          </>
        )}
      </Formik>
    </AuthTemplate>
  );
};

export default LoginPage;
