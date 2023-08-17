import { Tooltip } from 'react-tooltip'
import css from '../CardItem/CardItem.module.css'
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
                    <UserText>{userName}’s Quest Log</UserText>
                </UserContainer>
                <LogoutContainer>
                    <LogoutUserAvatar><UserFirstLetter>{userName.charAt(0)}</UserFirstLetter></LogoutUserAvatar>
                    <img src={trophyImage} alt='trophy' />
                        <LogoutButton  data-tooltip-id="exit-tooltip" data-tooltip-content="Exit" onClick={onLogoutButtonClick}>
                                <LogoutIcon>
                                    <use href={sprite + '#icon-logout'} />
                            </LogoutIcon>

                        </LogoutButton>
                    
                    <Tooltip className={css.tooltipExit}  id="exit-tooltip" title="Exit"></Tooltip>
                    
                </LogoutContainer>
            </HeaderContainer>
        </HeaderSection>
        
    )
}