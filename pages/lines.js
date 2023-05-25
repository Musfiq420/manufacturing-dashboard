import React, { useState } from 'react'
import { Coln, InitialGap, Page } from '@/components/ui-components/atoms/container';
import Topbar from '@/components/layout/topbar';
import SewingLineTable from '@/components/data-components/SewingLineTable';
import { Container, Row } from 'react-grid-system';


const Sewing = () => {
 
  return (
    <Page>
      <Topbar title="Sewing Lines" />      
      <InitialGap />
      <Container style={{margin:"10px"}} fluid>
        <Row>
          <Coln sm={12} lg={12}>
            <SewingLineTable />    
          </Coln>
        </Row>
      </Container>
       
    </Page>
  )
}



export default Sewing