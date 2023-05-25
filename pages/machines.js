import MachineTable from '@/components/data-components/MachineTable'
import Topbar from '@/components/layout/topbar'
import { Coln, InitialGap, Page } from '@/components/ui-components/atoms/container'
import React from 'react'
import { Container, Row } from 'react-grid-system'

const Machines = () => {
 
  
  return (
    <Page>
      <Topbar title="Machines" />      
      <InitialGap />
      <Container style={{margin:"10px"}} fluid>
        <Row>
          <Coln sm={12} lg={12}> 
            <MachineTable /> 
          </Coln>
        </Row>
      </Container>
       
    </Page>
  )
}

export default Machines