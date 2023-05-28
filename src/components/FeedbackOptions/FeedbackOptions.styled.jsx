import styled from 'styled-components';

export const FeedbackButtonContainer = styled.div`
  display: flex;
    gap: 30px;
`
export const FeedbackButton = styled.button`
  width: 130px;
    height: 65px;
    font-size: 30px;
    border-radius: 10px;
    box-shadow: 0px 0px 19px #2c3a7b inset;
    cursor: pointer;

     &:hover{
     transform: scaleX(1.05);
    background-color: rgb(176, 236, 236);
    box-shadow: 0px 0px 19px #2c3a7b;
     }

     &:nth-child(1){
      background-color: rgb(135, 245, 135);
     }

     &:nth-child(2){
      background-color: rgb(245, 247, 123);
     }

     &:nth-child(3){
      background-color: rgb(245, 116, 116);
     }
    
`