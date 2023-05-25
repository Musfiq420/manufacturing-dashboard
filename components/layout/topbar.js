import React from 'react'
import { Coln, FlexRow } from '@/components/ui-components/atoms/container';
import { Row } from 'react-grid-system';
import { H2, Sub } from '@/components/ui-components/atoms/text';
import styled from '@emotion/styled';
import Link from 'next/link';

const TopbarContainer = styled.div`
    width: 100%;
    height: 4rem;
    padding:15px;
    z-index:1500;  
    padding-left: 17%;
    position: fixed; 
    top: 0; 
    right:0;
    left: 0;
    background-color: white;
`


const Topbar = ({title}) => {


  return (
    <TopbarContainer>
      <Row align='center' justify="between">
        <Coln sm={12} md={6}>
          <Sub style={{fontSize:"24px"}}>{title}</Sub>
        </Coln>
        <Coln sm={12} md={6}>
          <FlexRow style={{justifyContent:"end"}}>
            <Link href="/admin">
              <Sub style={{fontSize:"16px", marginRight:"15px"}}>Admin Panel</Sub>
            </Link>
            <Link href="/messages">
              <Sub style={{fontSize:"16px", marginRight:"15px"}}>Messages</Sub>
            </Link>
            <Link href="/">
              <Sub style={{fontSize:"16px", marginRight:"15px"}}>Log Out</Sub>
            </Link>
            
          </FlexRow>
          
        </Coln>
      </Row>
    </TopbarContainer>
  )
}

export default Topbar