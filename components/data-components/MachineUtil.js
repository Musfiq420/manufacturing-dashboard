import React, { useState } from 'react'
import RadialProgress from '../ui-components/molecules/RadialProgress';
import { FlexRowBetween, SectionContainer } from '../ui-components/atoms/container';
import { SectionHeading } from '../ui-components/atoms/text';
import Toggle from '../ui-components/molecules/Toggle';
import DataGrid from '../ui-components/molecules/Datagrid';

const MachineUtil = () => {
  const percentData1 = [{ name: 'L1', value: 30.25 }];
  const percentData2 = [{ name: 'L1', value: 36.08 }];
  const percentData3 = [{ name: 'L1', value: 42.89 }];

  const [selectedOption, setSelectedOption] = useState('Worst');
  const columns = React.useMemo(
    () => [
      {
        Header: 'Machine Name',
        accessor: 'name'
      },
      {
        Header: 'Quantity',
        accessor: 'qty'
      },
      {
        Header: 'Active',
        accessor: 'active'
      },
      
      {
        Header: 'Percentage',
        accessor: 'percentage'
      },
    ],
    []
  )



  const data = React.useMemo(
    () => [
      {name:"Single Needle", qty: 1403, active: 533, percentage: <RadialProgress data={percentData1} dataKey="value" height={70} /> },
      {name:"Single Needle", qty: 1403, active: 533, percentage: <RadialProgress data={percentData2} dataKey="value" height={70} /> },
      {name:"Single Needle", qty: 1403, active: 533, percentage: <RadialProgress data={percentData3} dataKey="value" height={70} /> },
    ],
    []
  )

  return (
    <SectionContainer>
      <FlexRowBetween>
        <SectionHeading>
          Machine Utilization
        </SectionHeading>
        <Toggle
          options={["Worst", "Best"]}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      </FlexRowBetween>
      <DataGrid
        columns={columns}
        data={data}
        pageSize={3}
        />
    </SectionContainer>
  )
}

export default MachineUtil