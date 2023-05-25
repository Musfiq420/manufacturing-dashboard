import OperatorTable from '@/components/data-components/OperatorTable'
import Topbar from '@/components/layout/topbar'
import { Coln, InitialGap, Page } from '@/components/ui-components/atoms/container'
import React from 'react'
import { Container, Row } from 'react-grid-system'

const Operators = () => {
 
  
  
  return (
    <Page>
      <Topbar title="Operators" />      
      <InitialGap />
      <Container style={{margin:"10px"}} fluid>
        <Row>
          <Coln sm={12} lg={12}>
            <OperatorTable />    
          </Coln>
        </Row>
      </Container>
       
    </Page>
  )
}

export default Operators