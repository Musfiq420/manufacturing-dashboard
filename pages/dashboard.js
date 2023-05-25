import React, { useEffect, useState } from 'react';
import { Coln, InitialGap, Page } from '@/components/ui-components/atoms/container';
import Topbar from '@/components/layout/topbar';
import SewingAtaGlance from '@/components/data-components/SewingAtaGlance';
import { Container, Row } from 'react-grid-system';
import DeptSummary from '@/components/data-components/DeptSummary';
import TrendAnalysis from '@/components/data-components/TrendAnalysis';
import BlockSummary from '@/components/data-components/BlockSummary';
import HourlyProduction from '@/components/data-components/HourlyProduction';
import MachineSummary from '@/components/data-components/MachineSummary';
import MachineUtil from '@/components/data-components/MachineUtil';
import MachineBreakdown from '@/components/data-components/MachineBreakdown';

const Performance = () => {
  const [hydration, setHydration] = useState(false);


  useEffect(() => {
    setHydration(true);
  }, [])

  if(!hydration)
    return <p>Loading...</p>

  return (
    <Page>
      
      <Topbar title="Welcome, Musfiq" />
      <InitialGap />
      <Container style={{margin:"10px"}} fluid>
      
        <Row>
          <Coln sm={12} lg={5}>
            <SewingAtaGlance />
          </Coln>
          <Coln sm={12} lg={7}>
            <DeptSummary />
          </Coln>
        </Row>
        <Row>
          <Coln sm={12} lg={6}>
            <TrendAnalysis />
          </Coln>
          <Coln sm={12} lg={6}>
            <BlockSummary />
          </Coln>
        </Row>
        <Row>
          <Coln sm={12} lg={8}>
            <HourlyProduction />
          </Coln>
          <Coln sm={12} lg={4}>
            <MachineSummary />
          </Coln>
        </Row>
        <Row>
          <Coln sm={12} lg={5}>
            <MachineUtil />
          </Coln>
          <Coln sm={12} lg={7}>
            <MachineBreakdown />
          </Coln>
        </Row>
        
      </Container>
      
    </Page>
  )
}


export default Performance