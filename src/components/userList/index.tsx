import React from 'react';
import { Container, Role, User, Avatar} from './styles'

interface UserProps {
    nickName: string;
    isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({
    nickName, 
    isBot
}) => {
    return (
        <User>
            <Avatar className={isBot? 'bot' : ''}/>
            <strong>{nickName}</strong>
            {isBot && <span>Bot</span>}
        </User>
    );
};

const UserList: React.FC = () => {
    return (
        <Container>
            <Role>Disponível - 1</Role>
            <UserRow nickName="Junior Trojilio"/>

            <Role>OFFLINE - 1</Role>
            <UserRow nickName="King Bot" isBot/>
            <UserRow nickName="Maria" />
            <UserRow nickName="John" />
            <UserRow nickName="Bellamy" />
            <UserRow nickName="Clarck" />
            <UserRow nickName="Manu" />
            <UserRow nickName="Elizeu" />
            <UserRow nickName="Cadu" />
            <UserRow nickName="Alessandro" />
            <UserRow nickName="Catarina" />
            <UserRow nickName="Garfield" />
            <UserRow nickName="Juju" />
            <UserRow nickName="Branquinho" />
            <UserRow nickName="Lurdes" />
            <UserRow nickName="Tom" />
            <UserRow nickName="Jefté" />
            <UserRow nickName="Konnan o Barbaro" />
            <UserRow nickName="Senhora" />
        </Container>
    );
};

export default UserList;