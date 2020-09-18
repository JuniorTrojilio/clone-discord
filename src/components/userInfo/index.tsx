import React from 'react';
import { Container, Profile, Avatar, UserData, Icons, MicIcon, HeadphoneoIcon, SettingIcon } from './styles'

const UserInfo: React.FC = () => {
    return (
        <Container>
            <Profile>
                <Avatar />
                <UserData>
                    <strong>Junior Trojilio</strong>
                    <span>#7836</span>
                </UserData>
            </Profile>
            <Icons>
                <MicIcon/>
                <HeadphoneoIcon />
                <SettingIcon />
            </Icons>
        </Container>
    );
};

export default UserInfo;