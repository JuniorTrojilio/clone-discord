import React from 'react';
import { Container, Category, AddCategoryIcon} from './styles'
import ChannelButton from '../channelButton'

const ChannelList: React.FC = () => {
    return (

    <Container>
        <Category>
            <span>Canais de Texto</span>
            <AddCategoryIcon />
        </Category>


        <ChannelButton channelName="geral"/>
        <ChannelButton channelName="eventos"/>
        <ChannelButton channelName="desafios"/>
        <ChannelButton channelName="scrum"/>
        <ChannelButton channelName="cotação"/>
    </Container> 
    );
};

export default ChannelList;