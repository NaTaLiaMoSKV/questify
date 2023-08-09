import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import {
    AuthContainer,
    AuthForm,
    AuthFormField,
    AuthFormWrapper,
    AuthFormPasswordIcon,
    AuthFormSubmitButton,
    ErrorSection,
    HelloText,
    AuthFormSubmitContainer,
    AuthFormSubmitNavLink
} from './LoginForm.styled';

import { Formik } from 'formik';
import * as Yup from 'yup';

import { logIn } from 'redux/auth/authOperations';
// import Loader from 'components/Loader/Loader';
// import { selectIsLoading } from 'redux/auth/authSelectors';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';


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

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const onSubmit = async (values, { resetForm }) => {
        const { email, password } = values;
        const data = await dispatch(logIn({ email, password }));
        if (data.error.message === "Rejected") {
          toast.error("Email or password is wrong")
        }
        resetForm();
    };

    return (
        <AuthContainer>
            <HelloText>Hi, Your Name</HelloText>
            <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            >
                <AuthForm>
                    <AuthFormWrapper>
                    <AuthFormField
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        />
                        
                    <ErrorSection name="email" component="div" />
                    </AuthFormWrapper>

                    <AuthFormWrapper>
                    <AuthFormField
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        name="password"
                        placeholder="Confirm a password"
                        />
                        
                    <ErrorSection name="password" component="div" />
                    <AuthFormPasswordIcon onClick={handleTogglePassword}>
                        {showPassword ? <AiOutlineEyeInvisible style={{width: '25px', height: '25px'}}/> : <AiOutlineEye style={{width: '25px', height: '25px'}} />}
                    </AuthFormPasswordIcon>
                    </AuthFormWrapper>
                    
                    <AuthFormSubmitContainer>
                        <AuthFormSubmitButton type="submit">
                            {/* {loading ? <Loader /> : 'Login now'} */}
                            Sign In!
                        </AuthFormSubmitButton>
                        <AuthFormSubmitNavLink to='/auth/register'>Sign up</AuthFormSubmitNavLink>
                    </AuthFormSubmitContainer>
                    
                </AuthForm>
            </Formik>
        </AuthContainer>
    );
};

export default LoginForm;
