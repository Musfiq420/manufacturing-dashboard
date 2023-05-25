import React from 'react'
import { FlexRowBetween, SectionContainer } from '../ui-components/atoms/container';
import DataGrid from '../ui-components/molecules/Datagrid';
import machines from '../../lib/machines.json';
import { Button } from '../ui-components/atoms/input';

const MachineTable = () => {

  const columns = React.useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id'
      },
      {
        Header: 'Manufacturer',
        accessor: 'manufacturer'
      },
      {
        Header: 'Name',
        accessor: 'name'
      },
      {
        Header: 'No',
        accessor: 'no'
      },
      {
        Header: 'Ownership',
        accessor: 'ownership',
      },
      {
        Header: 'Status',
        accessor: 'status',
      },
      {
        Header: 'Type',
        accessor: 'type',
      }
    ],
    []
  )
  
  return (
    <SectionContainer>
      <DataGrid
        columns={columns}
        data={machines}
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

export default MachineTable