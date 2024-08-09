import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, {keyframes} from "styled-components";
import { noneVisible } from '../redux/toast';

const boxFade = keyframes`
  0% {
    transform: translateY(80px);
    opacity: 0;
  }
  25% {
    transform: translateY(0px);
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  75% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`

const StyledToastBox = styled.div`
  width: 100%;
  position: fixed;
  bottom: 50%;
  display: none;
  justify-content: center;
  align-items: center;
  animation: ${boxFade} 1.5s infinite linear alternate;

  div{
    font-size: 16px;
    padding: 10px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #c3c3c3;
    border-radius: 50px;
    background-color: #2cabff;
    color: #fff;
  }
`;

export const Toast: React.FC = () => {

  const message = useSelector((state: any) => state.visible.message);
  const status = useSelector((state: any) => state.visible.status);
  const dispatch = useDispatch();

  const displayNone = {
    'display': 'none'
  }

  const displayFlex = {
    'display': 'flex'
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(noneVisible())
    }, 1500)

    return () => clearTimeout(timer);
  }, [status])

  return (
    <StyledToastBox style={status ? displayFlex : displayNone}>
      <div>
        {message}
      </div>    
    </StyledToastBox>
  )
}