import styled, { css } from 'styled-components';

import { ButtonProps } from '.'

export const Button = styled.div<ButtonProps>`
  display: flex;

  align-items: center;
  justify-content: center;
  
  flex-shrink: 0;

  width: 48px;
  height: 48px;

  margin-bottom: 8px;

  background-color: ${ButtonProps => ButtonProps.isHome? 'var(--rocketseat)' : 'var(--primary)'};

  position: relative;
  cursor: pointer;  

  transition: border-radius .1s ease-out, background-color .1s ease-out, height .1s ease-out,
  opacity .1s cubic-bezier(0.075, 0.82, 0.165, 1);  

  ${ButtonProps => ButtonProps.isHome? css`
    border-radius: 16px;
  ` : css`
    border-radius: 50%;
  `}
  
  > img {
    width: 48px;
    height: 48px;
    border-radius: inherit;
  }
  

  &::before{
    ${ButtonProps => ButtonProps.isHome? css`
    width: 8px;
    height: 40px;
    border-radius: 4px;
  ` : css`
    width: 9px;
    height: 9px;
    border-radius: 50%;
  `}

    position: absolute;
    left: -16px;

    background-color: var(--white);    

    content: '';
    

    transition: border-radius .1s ease-out, 
    background-color .1s ease-out, height .1s ease-out;

    display: ${(props) => ((props.hasNotifications || props.isHome) ? 'inline' : 'none')};
  }

  &::after{
    background-color: var(--notification);
    width: auto;
    height: 16px;

    padding: 0 4px;
    position: absolute;
    bottom: -4px;
    right: -4px;
    border-radius: 12px;

    border-radius: 12px;
    border: 4px solid var(--tertiary);

    text-align: right;
    font-size: 13px;
    font-weight: 500;
    color: var(--white);

    content: '${props => props.mentions && props.mentions}';

    display: ${(props) => props.mentions && props.mentions > 0? 'inline' : 'none'};
  }

  &.active, &:hover {
      border-radius: 16px;
      background-color: ${(ButtonProps) => ButtonProps.isHome? 'var(--rocketseat)' : 'var(--discord)'};    

    ${ButtonProps => (ButtonProps.isHome && !ButtonProps.hasNotifications) ? css`      
    ` : css`
      &::before{
        width: 8px;
        height: 20px;
        border-radius: 4px;
        display: inline;
      }
    `}
  }
`;
