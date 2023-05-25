import { bp } from '@/lib/breakpoints'
import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import { Col } from 'react-grid-system'

export const FlexRow = styled.div`
    display: flex;
    flex-direction: row;
`

export const FlexCol = styled.div`
    display: flex;
    flex-direction: column;
`

export const FlexRowBetween = styled(FlexRow)`
    justify-content: space-between;
`
export const Coln = styled(Col)`
    padding: 5px !important;
` 

export const MiniCardContainer = styled.div`
    padding: 5px;
    font-size: 14px;
    color: ${props => props.inc?"#0C9C00":"#AC1616"};
    background-color: ${props => props.inc?"#EDFFF8":"#FFF2F2"}; 
    border-radius: 5px;
    width: fit-content;
`

export const CardContainer = styled.div`
    display: flex;
    background-color: #E8F5E9; 
    padding: 10px; 
    
    border: 1px solid #B9F6CA;
    border-radius: 5px;
`


export const SectionContainer = styled.div`
    padding: 15px;
    background-color: white; 
    border-radius: 5px; 
    border: 1px solid rgb(240, 240, 240);
    height: 100%;
`

export const FlexRowCenter = styled.div`
    display: flex;
    flex:1;
    justify-content: center;
    align-items: center;
`

export const FlexColCenter = styled.div`
    display: flex;
    flex-direction: column;
    flex:1;
    justify-content: center;
    align-items: self-start;
`



export const Page = styled.div`
    margin-left: none;
    padding-bottom: 15%;
    ${bp.tablet} {
        margin-left: 15%;
        padding-bottom: 10%;
    } 
`
export const InitialGap = styled.div`
    padding-top: 4rem;
` 




