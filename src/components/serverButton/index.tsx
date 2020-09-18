import React from 'react';
import Logo from '../../assets/logo.svg';
import { Button } from './styles';


export interface ButtonProps {
    selected?: boolean;
    isHome?: boolean;
    mentions ?: number;
    hasNotifications ?: boolean;
}

const ServerButton: React.FC<ButtonProps> = ({
    selected, 
    isHome, 
    mentions,
    hasNotifications
}) =>{
    return (
        <div>       
            <Button
                isHome={isHome}
                mentions={mentions}
                className={selected ? 'active' : ''}
                hasNotifications={hasNotifications}
            >
            {isHome && <img src={Logo} alt='logo'/>}  
            </Button>
        </div>         
    );
};

export default ServerButton;