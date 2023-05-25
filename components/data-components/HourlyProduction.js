import React, { useState } from 'react'
import BarChartUI from '../ui-components/molecules/BarChart'
import { FlexRowBetween, MiniCardContainer, SectionContainer } from '../ui-components/atoms/container'
import { SectionHeading } from '../ui-components/atoms/text'
import DataGrid from '../ui-components/molecules/Datagrid'
import Toggle from '../ui-components/molecules/Toggle'

const HourlyProduction = () => {
  const [selectedOption, setSelectedOption] = useState('Worst Lines');

  const columns = React.useMemo(
    () => [
      {
        Header: 'Line No',
        accessor: 'line'
      },
      {
        Header: 'Target',
        accessor: 'target'
      },
      {
        Header: 'Avg Prod',
        accessor: 'avg'
      },
      {
        Header: 'Achievement',
        accessor: 'achievement'
      },
      {
        Header: 'Hourly Comparison',
        accessor: 'hourly'
      }
    ],
    []
  )



  const data = React.useMemo(
    () => [
      {line: 1, target: 165, avg: 153, achievement:<MiniCardContainer inc>98.23%</MiniCardContainer>, hourly: <BarChartUI />},
      {line: 2, target: 165, avg: 153, achievement:<MiniCardContainer inc>98.23%</MiniCardContainer>, hourly: <BarChartUI />},
      {line: 3, target: 165, avg: 153, achievement:<MiniCardContainer inc>98.23%</MiniCardContainer>, hourly: <BarChartUI />},
      {line: 4, target: 165, avg: 153, achievement:<MiniCardContainer inc>98.23%</MiniCardContainer>, hourly: <BarChartUI />},
      {line: 5, target: 165, avg: 153, achievement:<MiniCardContainer inc>98.23%</MiniCardContainer>, hourly: <BarChartUI />},

    ],
    []
  )


  return (
    <SectionContainer>
      <FlexRowBetween>
        <SectionHeading>
          Real Time Production Summary
        </SectionHeading>
        <Toggle
          options={["Worst Lines", "Best Lines"]}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      </FlexRowBetween>
      <DataGrid
        columns={columns}
        data={data}
        pageSize={5}
        />
    </SectionContainer>
  )
}

export default HourlyProduction