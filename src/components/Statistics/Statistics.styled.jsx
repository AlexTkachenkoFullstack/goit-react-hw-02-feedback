import styled from 'styled-components';

export const StatisticsList = styled.ul`
 display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 10px;
    padding-left: 0;
    margin-top: 0;
`

export const StatisticsItem = styled.li`
&:last-child{
      width:437px;
      text-align: center;
   }
`

export const StatisticItemName = styled.p`
   margin: 0;
`