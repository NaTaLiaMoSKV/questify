import { useDispatch } from "react-redux"
import { logOut } from "redux/auth/authOperations";

import trophyImage from '../../images/trophy.svg'
import sprite from '../../images/symbol-defs.svg'

import { HeaderContainer, HeaderLogo, HeaderSection, LogoutButton, LogoutContainer, LogoutIcon, LogoutUserAvatar, UserAvatar, UserContainer, UserFirstLetter, UserText } from "./Header.styled";

export default function Header() { 
    const dispatch = useDispatch();
    const userName = localStorage.getItem('userName');
    
    const onLogoutButtonClick = async () => {
        await dispatch(logOut());
    }

    return (
        <HeaderSection>
            <HeaderContainer>
                <HeaderLogo>Questify</HeaderLogo>
                <UserContainer>
                    <UserAvatar><UserFirstLetter>{userName.charAt(0)}</UserFirstLetter></UserAvatar>
                    <UserText>Hello, {userName}</UserText>
                </UserContainer>
                <LogoutContainer>
                    <LogoutUserAvatar><UserFirstLetter>{userName.charAt(0)}</UserFirstLetter></LogoutUserAvatar>
                    <img src={trophyImage} alt='trophy' />
                    <LogoutButton onClick={onLogoutButtonClick}>
                            <LogoutIcon>
                                <use href={sprite + '#icon-logout'} />
                            </LogoutIcon>
                    </LogoutButton>
                </LogoutContainer>
            </HeaderContainer>
        </HeaderSection>
        
    )
}