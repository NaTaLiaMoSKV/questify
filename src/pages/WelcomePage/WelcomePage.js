import { WelcomeContainer, WelcomeForm, WelcomeFormButton, WelcomeFormField, WelcomeFormLabel, WelcomeTextContainer, WelcomeTextSubtitle, WelcomeTextTitle } from "./WelcomePage.styled";
import * as Yup from 'yup';
import { Formik } from "formik";

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required')
        .min(2, 'Name must be at least 2 characters')
        .max(20, 'Name must be at most 20 characters'),
});

const initialValues = {
    name: ''
}

export default function WelcomePage() {

    const onFormSubmit = async (values) => {
        const { name } = await values;
        localStorage.setItem('userName', name);
    };


    return (
        <WelcomeContainer>
            <WelcomeTextContainer>
                <WelcomeTextSubtitle>Questify</WelcomeTextSubtitle>
                <WelcomeTextTitle>Questify will turn your life into a thrilling game full of amazing quests and exciting challenges.</WelcomeTextTitle>
                <WelcomeFormLabel>Choose your name to sign up or log in</WelcomeFormLabel>
        
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onFormSubmit}
                    
                >
                    {({ isValid, dirty }) => (
                        <WelcomeForm>
                            <WelcomeFormField type="name" id="name" name="name" />
                                <WelcomeFormButton type="submit" disabled={!isValid || !dirty} onClick={() => {
                                    onFormSubmit();
                                    window.location.href = '/questify/auth/login'; 
                                    }}
                                >
                                    go!
                                </WelcomeFormButton>
                        </WelcomeForm>
                    )}
                </Formik>
            </WelcomeTextContainer>
            
        </WelcomeContainer>
    );
}