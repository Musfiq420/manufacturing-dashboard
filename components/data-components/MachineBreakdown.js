import React, { useState } from 'react'
import { FlexRowBetween, MiniCardContainer, SectionContainer } from '../ui-components/atoms/container';
import { SectionHeading } from '../ui-components/atoms/text';
import DataGrid from '../ui-components/molecules/Datagrid';
import { Option, Select } from '../ui-components/atoms/input';

const MachineBreakdown = () => {

  const columns = React.useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id'
      },
      {
        Header: 'Type',
        accessor: 'type'
      },
      {
        Header: 'Line',
        accessor: 'line'
      },
      {
        Header: 'Lost Time',
        accessor: 'lost'
      },
      {
        Header: 'Reason',
        accessor: 'reason'
      },
    ],
    []
  )



  const data = React.useMemo(
    () => [
      {id: "DGH-3847", type: "Single Needle", line:45, lost:<MiniCardContainer dec>34:82 min</MiniCardContainer>, reason: "Needle Break"},
      {id: "DGH-3847", type: "Single Needle", line:45, lost:<MiniCardContainer dec>34:82 min</MiniCardContainer>, reason: "Needle Break"},
      {id: "DGH-3847", type: "Single Needle", line:45, lost:<MiniCardContainer dec>34:82 min</MiniCardContainer>, reason: "Needle Break"},
      {id: "DGH-3847", type: "Single Needle", line:45, lost:<MiniCardContainer dec>34:82 min</MiniCardContainer>, reason: "Needle Break"},
      {id: "DGH-3847", type: "Single Needle", line:45, lost:<MiniCardContainer dec>34:82 min</MiniCardContainer>, reason: "Needle Break"},
      {id: "DGH-3847", type: "Single Needle", line:45, lost:<MiniCardContainer dec>34:82 min</MiniCardContainer>, reason: "Needle Break"},
    ],
    []
  )

  return (
    <SectionContainer>
      <FlexRowBetween>
        <SectionHeading>
          Machine Breakdown
        </SectionHeading>
        <Select value="Yesterday" >
          <Option value="Yesterday">Yesterday</Option>
          <Option value="20 May">20 May</Option>
        </Select>
      </FlexRowBetween>
      <DataGrid
        columns={columns}
        data={data}
        pageSize={6}
        />
    </SectionContainer>
  )
}

export default MachineBreakdown