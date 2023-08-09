import { WelcomeContainer, WelcomeForm, WelcomeFormButton, WelcomeFormField } from "./WelcomePage.styled";
import css from './WelcomePage.module.css'
import * as Yup from 'yup';
import { Formik } from "formik";
import { NavLink } from "react-router-dom";

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required')
        .min(2, 'Name must be at least 2 characters')
        .max(20, 'Name must be at most 20 characters'),
});

const initialValues = {
    name: ''
}

export default function WelcomePage() {

    const onFormSubmit =  (values, { resetForm }) => {
        const { name } = values;
        console.log('name: ', name);
        
        resetForm();
    };


    return (
        <WelcomeContainer>
            <div className={css.welcomeTextContainer}>
                <p className={css.welcomeTextSubtitle}>Questify</p>
                <h1 className={css.welcomeTextTitle}>Questify will turn your life into a thrilling game full of amazing quests and exciting challenges.</h1>
                <p className={css.formLabel}>Choose your name to sign up or log in</p>
        
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onFormSubmit}
                    
                >
                    {({ isValid, dirty }) => (
                        <WelcomeForm>
                            <WelcomeFormField type="name" id="name" name="name" />
                            <NavLink to='auth/login' disabled={!isValid || !dirty}>
                                <WelcomeFormButton type="submit" disabled={!isValid || !dirty}>
                                    go!
                                </WelcomeFormButton>
                            </NavLink>
                        </WelcomeForm>
                    )}
                </Formik>
            </div>
            
        </WelcomeContainer>
    );
}