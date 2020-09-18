import React from 'react';
import ServerButton from '../../components/serverButton'
import { Container, Separator } from './styles'

const ServerList: React.FC = () => {
    return(
        <Container>
          <ServerButton isHome/> 
          <Separator />
          <ServerButton /> 
          <ServerButton hasNotifications/> 
          <ServerButton mentions={3}/> 
          <ServerButton /> 
          <ServerButton /> 
          <ServerButton /> 
          <ServerButton /> 
          <ServerButton mentions={70}/> 
          <ServerButton /> 
          <ServerButton /> 
          <ServerButton hasNotifications/> 
        </Container>
    );
};

export default ServerList;
