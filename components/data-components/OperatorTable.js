import React from 'react'
import { FlexRowBetween, SectionContainer } from '../ui-components/atoms/container';
import DataGrid from '../ui-components/molecules/Datagrid';
import operators from '../../lib/operators.json';
import { Button } from '../ui-components/atoms/input';

const OperatorTable = () => {

  const columns = React.useMemo(
    () => [
      {
        Header: 'Designation',
        accessor: 'designation'
      },
      {
        Header: 'Gender',
        accessor: 'gender'
      },
      {
        Header: 'ID',
        accessor: 'id'
      },
      {
        Header: 'Joined',
        accessor: 'joined'
      },
      {
        Header: 'Line',
        accessor: 'line',
      },
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Section',
        accessor: 'section',
      }
    ],
    []
  )
  
  return (
    <SectionContainer>
      <DataGrid
        columns={columns}
        data={operators}
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

export default OperatorTable