import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import { logIn } from 'redux/auth/authOperations';
import { AuthContainer, AuthForm, AuthFormField, AuthFormWrapper, AuthFormPasswordIcon, AuthFormSubmitButton, ErrorSection, HelloText, AuthFormSubmitContainer, AuthFormSubmitNavLink, TestLink } from './LoginForm.styled';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .trim()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .max(64, 'Password must be at most 64 characters')
    .matches(
        /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]+$/,
        'Password must contain at least one letter and at least one number'
    ),
});

const initialValues = {
    email: '',
    password: '',
    showPassword: false,
};

const LoginForm = () => {
    const dispatch = useDispatch();
    const [showPassword, setShowPassword] = useState(false);
    const userName = localStorage.getItem('userName');
    const formRef = useRef(null);

    const onTestLinkClick = () => {
        formRef.current.setFieldValue('email', 'natashamoskv@gmail.com');
        formRef.current.setFieldValue('password', 'qwerty123');

        setTimeout(() => {
            formRef.current.handleSubmit();
        }, 500);
    };

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const onSubmit = (values, { resetForm }) => {
        const { email, password } = values;
        const data = dispatch(logIn({ email, password }));
        if (data.error.message === 'Rejected') {
            toast.error('Email or password is wrong');
        }
        resetForm();
    };

  return (
    <AuthContainer>
        <HelloText>
            Hi, {userName}!
            <TestLink onClick={onTestLinkClick}>test the app</TestLink>
        </HelloText>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} innerRef={formRef}>
            {({ handleSubmit, values, handleChange, errors, touched }) => (
            <AuthForm onSubmit={handleSubmit}>
                <AuthFormWrapper>
                    <AuthFormField
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        value={values.email}
                        onChange={handleChange}
                    />

                    {touched.email && errors.email && (
                        <ErrorSection>{errors.email}</ErrorSection>
                    )}
                </AuthFormWrapper>

                <AuthFormWrapper>
                    <AuthFormField
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        name="password"
                        placeholder="Confirm a password"
                        value={values.password}
                        onChange={handleChange}
                    />

                    {touched.password && errors.password && (
                        <ErrorSection>{errors.password}</ErrorSection>
                    )}
                    <AuthFormPasswordIcon onClick={handleTogglePassword}>
                        {showPassword ? (
                            <AiOutlineEye style={{ width: '25px', height: '25px' }} />
                            ) : (
                            <AiOutlineEyeInvisible
                                style={{ width: '25px', height: '25px' }}
                            />
                        )}
                    </AuthFormPasswordIcon>
                </AuthFormWrapper>

                <AuthFormSubmitContainer>
                    <AuthFormSubmitButton type="submit">
                        Sign In!
                    </AuthFormSubmitButton>
                    <AuthFormSubmitNavLink to="/auth/register">
                        Sign up
                    </AuthFormSubmitNavLink>
                </AuthFormSubmitContainer>
            </AuthForm>
            )}
        </Formik>
    </AuthContainer>
  );
};

export default LoginForm;
