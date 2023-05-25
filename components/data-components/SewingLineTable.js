import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Coln, FlexRow, FlexRowBetween, SectionContainer } from '@/components/ui-components/atoms/container';
import DataGrid from '../ui-components/molecules/Datagrid';
import lines from "../../lib/lines.json";
import { Button } from '../ui-components/atoms/input';




const SewingLineTable = () => {


    const columns = React.useMemo(
        () => [
          {
            Header: 'Line',
            accessor: 'line'
          },
          {
            Header: 'Buyer',
            accessor: 'buyer'
          },
          {
            Header: 'SO',
            accessor: 'sfl'
          },
          {
            Header: 'Style',
            accessor: 'style'
          },
          {
            Header: 'Sam Earners',
            accessor: 'sam earners',
          },
          {
            Header: 'Net Prod',
            accessor: 'output',
          },
          {
            Header: 'Hrs',
            accessor: 'hours',
          },
          {
            Header: 'SMV',
            accessor: 'smv',
          },
          {
            Header: 'Due',
            accessor: 'due',
          },
          {
            Header: 'Efficiency',
            accessor: 'efficiency',
          },
        ],
        []
      )


  return (
    <SectionContainer>
      <DataGrid
        columns={columns}
        data={lines}
        pageSize={17}
        height={62}
        />
        <FlexRowBetween>
          <div></div>
          <div style={{paddingTop:"20px"}}>
          <Button>Add Row</Button>
          </div>
          
        </FlexRowBetween>
        
    </SectionContainer>
  )
}

export default SewingLineTable

