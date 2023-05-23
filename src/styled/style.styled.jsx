import styled from '@emotion/styled'

export const Form = styled.form`
   display: flex;
   flex-direction: column;
   gap: 30px;
   width: 400px;
   border: 2px solid black;
   padding: 10px;
`;

export const Button = styled.button`
   width: 100px;
   background: inherit;
   border: 1px solid #dad4d4;
   border-radius: 5px;
   cursor: pointer;

   &:active {
    background-color: #36a4ee;
   }
`;

export const Label = styled.label`
   display: flex;
   flex-direction: column; 
   gap: 5px;
`;

export const Input = styled.input`
   width: 170px;
   border: 1px solid #d0d0d0;
`;

export const Div = styled.div`
   margin: 30px;
`

export const ListElement = styled.li`
   margin-bottom: 10px;
`;