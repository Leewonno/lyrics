import styled from "styled-components";

const StyledToastBox= styled.div`
  font-size:30px;
`;

interface ToastProps{
    children: string
}

export const Toast: React.FC<ToastProps> = ({ children }) =>{
    return (
        <StyledToastBox>
            {children}
        </StyledToastBox>
    )
}