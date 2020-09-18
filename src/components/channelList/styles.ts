import styled from 'styled-components';
import { Add } from 'styled-icons/material';

export const Container = styled.div`
    grid-area: CL;    
    display: flex;
    flex-direction: column;
    background-color: var(--secondary);
    padding: 24px 9.5px 0 16px;
`;

export const Category = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 6px;   

    > span {
        text-transform: uppercase;
        font-size: 13px;
        font-weight: 500;
        color: var(--gray);
        cursor: pointer; 
    }
`;

export const AddCategoryIcon = styled(Add)`
   width: 22px;
   height: 22px;

   color: var(--symbol); 
   cursor: pointer;
`;
