import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../channelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage
            key={n}
            author="Junior Trojilio"
            date="17/09/2020"
            content="Socorram-me subi num onibûs em marrocus!"
          />
        ))}

        <ChannelMessage
          author="King Bot"
          date="17/09/2020"
          content={
            <>
              <Mention>@Junior Trojilio</Mention>, Xiuuuuuuuu!
            </>
          }
          hasMention
          isBot
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversarem #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;