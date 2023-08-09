import LoginForm from "components/LoginForm/LoginForm";
import RegisterForm from "components/RegisterForm/RegisterForm";
import { useParams } from "react-router-dom";
import { WelcomeContainer } from "pages/WelcomePage/WelcomePage.styled";

export default function AuthPage() {
    const { id } = useParams();
    return (
        <WelcomeContainer>
            {id === 'login' && <LoginForm/>}
            {id === 'register' && <RegisterForm/>}
        </WelcomeContainer>
    )
}